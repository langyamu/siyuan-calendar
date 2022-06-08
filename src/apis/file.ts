import service from '@/utils/axios';
import to from 'await-to-js';

export { getFile, putFile, putJSON };

/**
 * @param workspacePath {string} 工作空间路径 举例：/data/ ||  /conf/
 * @returns
 */
function getFile(workspacePath: string) {
    return to(
        // 如果获取 json 文件 返回的是个 object
        service.post<string | object>('/api/file/getFile', {
            path: workspacePath,
        }),
    );
}

function putFile(formData: FormData) {
    return to<boolean>(
        new Promise((resolve, reject) => {
            service
                .post<null>('/api/file/putFile', formData)
                .then((res) => {
                    res === null ? resolve(true) : reject(new Error(res));
                })
                .catch((error) => {
                    reject(error);
                });
        }),
    );
}
/**
 *
 * @param workspacePath {string} 工作空间路径 举例：/data/ ||  /conf/
 * @param isDir
 * @param jsonData
 * @returns
 */
function putJSON(workspacePath: string, isDir: boolean, jsonData: object) {
    const file = new File([JSON.stringify(jsonData)], 'filename', {
        lastModified: Date.now(),
    });

    const data = new FormData();
    data.append('path', workspacePath);
    data.append('isDir', 'false');
    data.append('modTime', String(Date.now()));
    data.append('file', file);

    return putFile(data);
}
