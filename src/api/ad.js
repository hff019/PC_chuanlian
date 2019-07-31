import http from "./api";

export const adList = (options) => {
    let params= options

    return http.get(`/advertisingspace/advs`,{params}).catch(() => {})
}