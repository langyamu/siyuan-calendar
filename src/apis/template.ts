import { request } from '@/utils';

export { searchTemplate, templateRender };
export type { ISearchTemplateRes, ITemplateRender };

interface ISearchTemplateRes {
    blocks: Array<{
        box: string;
        path: string;
        hPath: string;
        id: string;
        rootID: string;
        parentID: string;
        name: string;
        alias: string;
        memo: string;
        content: string;
        fcontent: string;
        markdown: string;
        folded: boolean;
        type: string;
        subType: string;
        refText: string;
        refs: null | string;
        defID: string;
        defPath: string;
        ial: null | string;
        children: null;
        depth: number;
        count: number;
    }>;
    k: string;
}

interface ITemplateRender {
    content: string;
    path: string;
}

function searchTemplate(key: string) {
    return request<ISearchTemplateRes>({
        method: 'post',
        url: '/api/search/searchTemplate',
        data: { k: key },
    });
}

function templateRender(id: string, path: string) {
    return request<ITemplateRender>({
        method: 'post',
        url: '/api/template/render',
        data: {
            id,
            path,
        },
    });
}
