import { request } from '@/utils';

export { getBlockAttrs, setBlockAttrs };
export type { IGetBlockAttrsRes };

interface IGetBlockAttrsRes {
    id: string;
    title: string;
    type: string;
    updated: string;
}

/**
 * @alias 获取块属性
 * @param id
 * @returns
 */

function getBlockAttrs(id: string) {
    return request<IGetBlockAttrsRes>({
        method: 'post',
        url: '/api/attr/getBlockAttrs',
        data: {
            id,
        },
    });
}

/**
* @alias 设置块属性
* @param id
* @param attrs  块属性，自定义属性必须以 custom- 作为前缀
* @example 
{
"id": "20210912214605-uhi5gco",
"attrs": {
 "custom-attr1": "line1\nline2"
}
}
* @returns
*/
function setBlockAttrs(id: string, attrs: object) {
    return request<null>({
        method: 'post',
        url: '/api/attr/setBlockAttrs',
        data: {
            id,
            attrs,
        },
    });
}
