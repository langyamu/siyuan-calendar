import { request } from '@/utils';
export { createDocWithMd };

function createDocWithMd(notebookId: string, path: string, markdown = '') {
    return request<string>({
        method: 'post',
        url: '/api/filetree/createDocWithMd',
        data: {
            notebook: notebookId,
            path,
            markdown,
        },
    });
}
