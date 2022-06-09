import { RouteRecordRaw } from 'vue-router';
import IEpCalendar from '~icons/ep/calendar';
import IEpSetting from '~icons/ep/setting';

const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/calendar',
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/views/Calendar/index.vue'),
        meta: {
            title: '日历',
            icon: IEpCalendar,
        },
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/Setting/index.vue'),
        meta: {
            title: '设置',
            icon: IEpSetting,
        },
    },
];

export default baseRoutes;
