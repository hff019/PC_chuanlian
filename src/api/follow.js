/**
 * New node file
 */
import http from './api'

/*厂家收藏*/
// 关注列表
export const getFollowList = (params) => {
    return http.get('hippo-shop/supplier/factory/follows',{params}).catch(() => resArray)
}
//取消关注
export function deleteFollow(id) {
    return http.delete(`hippo-shop/supplier/factory/follows/${id}`, { validateStatus: s => s > 200 })
}

//关注
export function SaveFollow(params) {
    return http.post(`hippo-shop/supplier/factory/follows`,params, { validateStatus: s => s > 200 })
}

/*商品收藏*/
// 关注列表
export const getCollectionList = (params) => {
    return http.get('hippo-shop/supplier/factory/entity/follows',{params}).catch(() => resArray)
}
//取消关注
export function deleteCollection(id) {
    return http.delete(`hippo-shop/supplier/factory/entity/follows/${id}`, { validateStatus: s => s > 200 })
}

//关注
export function SaveCollection(params) {
    return http.post(`hippo-shop/supplier/factory/entity/follows`,params, { validateStatus: s => s > 200 })
}

/*商业公司商品收藏*/