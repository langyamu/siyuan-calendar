import { request } from '@/utils';
export { createDailyNote };

function createDailyNote(notebookId: string) {
    return request<null>({
        method: 'post',
        url: '/api/filetree/createDailyNote',
        data: { notebook: notebookId },
    });
}
