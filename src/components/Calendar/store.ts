import { IQueryRes, querySQL } from '@/apis';
import { toReject, toResolve } from '@/utils';
import dayjs from 'dayjs';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
import { useSettingStore } from '../Setting/store';

export type { ICalendarState };
export { useCalendarStore };
interface ICalendarState {
    curMonthEventData: IQueryRes[];
    curCalValue: Date;
    curDayEventData: IQueryRes[];
    isShowDrawer: boolean;
    curDrawerData: IQueryRes | Record<any, any>;
}

const structureMap = {
    '/YYYY/YYYY-MM-DD': '2006/2006-01-02',
    '/YYYY/MM/YYYY-MM-DD': '2006/01/2006-01-02',
    '/YYYY/MM-DD': '2006/01-02',
    '/YYYY/MM/DD': '2006/01/02',
};

const useCalendarStore = defineStore('calendar', {
    state(): ICalendarState {
        return {
            curMonthEventData: [],
            curCalValue: new Date(),
            curDayEventData: [],
            curDrawerData: {},
            isShowDrawer: false,
        };
    },
    getters: {
        dailyNoteSavePath() {
            return useSettingStore().dailyNoteSavePath;
        },
        pathPrefix() {
            const dailyNoteSavePath = useSettingStore().dailyNoteSavePath;
            const prefix = `/${dailyNoteSavePath
                .split('/')
                .filter(
                    (item) =>
                        !item.includes('{{') &&
                        !item.includes('}}') &&
                        item !== '',
                )
                .join('/')}`;

            return prefix === '/' ? '' : prefix;
        },
        pathStructure() {
            const dailyNoteSavePath = useSettingStore().dailyNoteSavePath;
            return dailyNoteSavePath
                .match(/(?<=\{\{).*?(?=\}\})/g)
                ?.join('/')
                .replace(/now \| date/g, '')
                .replace(/\s/g, '')
                .replace(/\"/g, '');
        },
        curNotebookId() {
            return useSettingStore().curNotebookId;
        },
    },
    actions: {
        initStore: async function () {
            const [error] = await this.setMonthEventData();
            if (error) return toReject(error);

            return toResolve(true);
        },
        setMonthEventData: async function (date?: Date) {
            let hpathWhere = '';
            const year = dayjs(date || this.curCalValue).format('YYYY');
            const month = dayjs(date || this.curCalValue).format('MM');
            if (this.dailyNoteSavePath === '') {
                ElMessage.error({
                    message: '请先设置笔记本的日记存放路径！',
                    grouping: true,
                });
                return toReject(new Error('请先设置笔记本的日记存放路径！'));
            }

            console.log('dailyNoteSavePath::', this.dailyNoteSavePath);
            console.log('pathPrefix::', this.pathPrefix);

            switch (true) {
                case this.pathStructure === '' ||
                    this.pathStructure === undefined:
                    ElMessage.error({
                        message: '不支持此路径格式！',
                        grouping: true,
                    });
                    return toReject(new Error('不支持此路径格式！'));
                case structureMap['/YYYY/YYYY-MM-DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${year}-${month}-%`;
                    break;
                case structureMap['/YYYY/MM/YYYY-MM-DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${month}/%`;
                    break;
                case structureMap['/YYYY/MM-DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${month}-%`;
                    break;
                case structureMap['/YYYY/MM/DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${month}/%`;
                    break;
            }
            // -- beginsql
            console.log(`
            SELECT
                *
            FROM
                blocks
            WHERE
                hpath LIKE '${hpathWhere}'
                and type = 'l'
                and subtype = 't'
                and box = '${this.curNotebookId}'
            order by
                    created
            `);

            const [qError, qRes] = await querySQL(`
            SELECT
                *
            FROM
                blocks
            WHERE
                hpath LIKE '${hpathWhere}'
                and type = 'l'
                and subtype = 't'
                and box = '${this.curNotebookId}'
            order by
                    created
            `);
            //-- endsql
            if (qError) return toReject(qError);

            this.curMonthEventData = qRes.data;

            this.curDayEventData = this.curMonthEventData.filter(
                (item) =>
                    dayjs(item.created).format('YYYYMMDD') ===
                    dayjs(this.curCalValue).format('YYYYMMDD'),
            );

            return toResolve(true);
        },
        getDayNoteData: async function (date: Date) {
            let hpathWhere = '';
            const year = dayjs(date).format('YYYY');
            const month = dayjs(date).format('MM');
            const day = dayjs(date).format('DD');
            if (this.dailyNoteSavePath === '') {
                ElMessage.error({
                    message: '请先设置笔记本的日记存放路径！',
                    grouping: true,
                });
                return toReject(new Error('请先设置笔记本的日记存放路径！'));
            }

            switch (true) {
                case this.pathStructure === '' ||
                    this.pathStructure === undefined:
                    ElMessage.error({
                        message: '不支持此路径格式！',
                        grouping: true,
                    });
                    return toReject(new Error('不支持此路径格式！'));
                case structureMap['/YYYY/YYYY-MM-DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${year}-${month}-${day}`;
                    break;
                case structureMap['/YYYY/MM/YYYY-MM-DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${month}/${year}-${month}-${day}%`;
                    break;
                case structureMap['/YYYY/MM-DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${month}-${day}`;
                    break;
                case structureMap['/YYYY/MM/DD'] === this.pathStructure:
                    hpathWhere = `${this.pathPrefix}/${year}/${month}/${day}`;
                    break;
            }

            // -- beginsql
            console.log(`
            SELECT
                *
            FROM
                blocks
            WHERE
                hpath = '${hpathWhere}'
                and type = 'd'
                and box = '${this.curNotebookId}'
            order by
                    created
            `);

            const [qError, qRes] = await querySQL(`
            SELECT
                *
            FROM
                blocks
            WHERE
                hpath = '${hpathWhere}'
                and type = 'd'
                and box = '${this.curNotebookId}'
            order by
                    created
            `);
            //-- endsql
            if (qError) return toReject(qError);

            return toResolve(qRes.data);
        },
    },
});
