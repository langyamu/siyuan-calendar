import { request } from '@/utils';

export { getNotebookConf, lsNotebooks };
export type { ILsNotebooksRes, IGetNotebookConfRes, INotebook };

interface INotebook {
    id: string;
    name: string;
    icon: string;
    sort: number;
    closed: boolean;
}

interface ILsNotebooksRes {
    notebooks: Array<INotebook>;
}

interface IGetNotebookConfRes {
    box: string;
    conf: {
        name: string;
        closed: boolean;
        refCreateSavePath: string;
        createDocNameTemplate: string;
        dailyNoteSavePath: string;
        dailyNoteTemplatePath: string;
    };
    name: string;
}

function lsNotebooks() {
    return request<ILsNotebooksRes>({
        method: 'post',
        url: '/api/notebook/lsNotebooks',
    });
}

function getNotebookConf(notebookId: string) {
    return request<IGetNotebookConfRes>({
        method: 'post',
        url: '/api/notebook/getNotebookConf',
        data: {
            notebook: notebookId,
        },
    });
}
