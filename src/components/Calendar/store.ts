import {
    getNotebookConf,
    IGetNotebookConfRes,
    IQueryRes,
    querySQL,
} from '@/apis';
import { toReject, toResolve } from '@/utils';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { useSettingStore } from '../Setting/store';

export type { ICalendarState };
export { useCalendarStore };
interface ICalendarState {
    curMonthData: IQueryRes[];
    curCalValue: Date;
    curDayEventData: IQueryRes[];
    loading: boolean;
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
            curMonthData: [],
            curCalValue: new Date(),
            curDayEventData: [],
            loading: true,
        };
    },
    getters: {
        model() {
            return useSettingStore().model;
        },
        curNotebookIdList() {
            return useSettingStore().curNotebookIdList;
        },
    },
    actions: {
        initStore: async function () {
            this.loading = true;
            const [error] = await this.setMonthData();
            if (error) return toReject(error);
            this.loading = false;
            return toResolve(true);
        },

        setMonthData() {
            if (this.model === 'Todo') {
                return this.setMonthEventData();
            } else {
                return this.setMonthDailyNotes();
            }
        },

        setMonthEventData: async function (date?: Date) {
            const day = dayjs(date || this.curCalValue).format('YYYYMM');

            const notebookIdWhereList = this.curNotebookIdList.map(
                (item) => `OR box = '${item}'`,
            );

            // -- beginsql
            const sql = `
            SELECT
                *
            FROM
                blocks
            WHERE
                type = 'l'
                AND subtype = 't'
                AND created LIKE '${day}%'
                AND (${notebookIdWhereList.join(' ').substr(2)})
            ORDER BY
                    created`;
            //-- endsql
            console.log('setMonthEventData:[sql]:', sql);
            const [error, res] = await querySQL(sql);
            if (error) return toReject(error);

            this.curMonthData = res.data;

            return toResolve(true);
        },
        setMonthDailyNotes: async function (date?: Date) {
            const day = dayjs(date || this.curCalValue);
            const year = day.format('YYYY');
            const month = day.format('MM');
            let hpathWhere = '';

            const notebookConfList: IGetNotebookConfRes[] = [];
            for (const id of this.curNotebookIdList) {
                const [error, res] = await getNotebookConf(id);
                if (error) continue;
                notebookConfList.push(res.data);
            }
            const dailyNoteSavePathList = notebookConfList.map((item) => ({
                dailyNoteSavePath: item.conf.dailyNoteSavePath,
                notebookId: item.box,
            }));

            for (const {
                dailyNoteSavePath,
                notebookId,
            } of dailyNoteSavePathList) {
                const pathPrefix = matchDailyNotePathPrefix(dailyNoteSavePath);
                const pathStructure =
                    matchDailyNotePathStructure(dailyNoteSavePath);
                let hpath = '';
                switch (true) {
                    case pathStructure === '' || pathStructure === undefined:
                        continue;
                    case structureMap['/YYYY/YYYY-MM-DD'] === pathStructure:
                        hpath = `${pathPrefix}/${year}/${year}-${month}-__`;
                        break;
                    case structureMap['/YYYY/MM/YYYY-MM-DD'] === pathStructure:
                        hpath = `${pathPrefix}/${year}/${month}/__`;
                        break;
                    case structureMap['/YYYY/MM-DD'] === pathStructure:
                        hpath = `${pathPrefix}/${year}/${month}-__`;
                        break;
                    case structureMap['/YYYY/MM/DD'] === pathStructure:
                        hpath = `${pathPrefix}/${year}/${month}/__`;
                        break;
                }

                hpathWhere += `OR (hpath LIKE '${hpath}' AND type = 'd' AND box = '${notebookId}')`;
            }
            // -- beginsql
            const sql = `
                SELECT
                    *
                FROM
                     blocks
                WHERE
                   ${hpathWhere.substr(2)}
                ORDER BY
                        created
                `;
            // -- endsql
            console.log('setMonthDailyNotes:[sql]:', sql);
            const [error, res] = await querySQL(sql);

            if (error) return toReject(error);

            this.curMonthData = res.data;

            console.log('curMonthData::', this.curMonthData);
            return toResolve(true);
        },
    },
});

function matchDailyNotePathPrefix(path: string) {
    const prefix = `/${path
        .split('/')
        .filter(
            (item) =>
                !item.includes('{{') && !item.includes('}}') && item !== '',
        )
        .join('/')}`;
    return prefix === '/' ? '' : prefix;
}
function matchDailyNotePathStructure(path: string): string | undefined {
    return path
        .match(/(?<=\{\{).*?(?=\}\})/g)
        ?.join('/')
        .replace(/now \| date/g, '')
        .replace(/\s/g, '')
        .replace(/\"/g, '');
}
