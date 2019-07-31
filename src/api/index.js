import api from "./api";
import lstore from "@/plugins/lstore/lstore";

/**
 *  api base url
 *
 * @type {string}
 */
export const baseURL =
    process.env.NODE_ENV == "production"
        ? `${process.env.VUE_APP_API_HOST}/api/${process.env.VUE_APP_API_VERSION}`
        : "http://www.clxsd.cn/api/v3";

export const socketUrl =
    process.env.NODE_ENV == "production"
    ? `${process.env.VUE_APP_API_HOST}:6001`
        :"http://192.168.1.133:6001";

/**
 * 统一接口请求数据返回数量限制
 */
export const limit = ~~(lstore.getData("BOOTSTRAPPERS") || {}).limit || 15;


/**
 * 上传文件
 * @export
 * @param {FormData} formData
 * @returns
 */
export function postFile(formData) {
    return api.post("/files", formData, { validateStatus: s => s === 201 });
}

