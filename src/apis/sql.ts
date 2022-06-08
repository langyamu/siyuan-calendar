import { request } from '@/utils';
export { querySQL };
export type { IQueryRes };

interface IQueryRes {
    alias: string;
    box: string;
    content: string;
    created: string;
    fcontent: string;
    hash: string;
    hpath: string;
    ial: string;
    id: string;
    length: number;
    markdown: string;
    memo: string;
    name: string;
    parent_id: string;
    path: string;
    root_id: string;
    sort: number;
    subtype: string;
    type: string;
    updated: string;
}

/**
 * @alias sql 查询
 * @param stmt
 * @example
 *  {
 *   "stmt": "SELECT * FROM blocks WHERE content LIKE'%content%' LIMIT 7"
 * }
 * @returns
 */

function querySQL(stmt: string) {
    return request<IQueryRes[]>({
        method: 'post',
        url: '/api/query/sql',
        data: { stmt },
    });
}
