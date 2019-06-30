// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

let rp = require('request-promise')

let api = 'http://baobab.kaiyanapp.com/api';

// 云函数入口函数
exports.main = async(event, context) => {

    let res = ''
    let url = ''
    let id = ''
    let strategy = ''

    switch (event.type) {
        case 'feed':
            res = rp(`${api}/v2/feed`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'next':
            url = event.query.url
            res = rp(`${url}`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'video':
            id = event.query.id
            res = rp(`${api}/v1/video/${id}`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'related':
            id = event.query.id
            res = rp(`${api}/v4/video/related?id=${id}`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'category':
            res = rp(`${api}/v4/categories/`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'categoryDetail':
            id = event.query.id
            res = rp(`${api}/v4/categories/detail/tab?id=${id}`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'videoList':
            id = event.query.id
            res = rp(`${api}/v3/categories/videoList?id=${id}`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
        case 'rankList':
            strategy = event.query.strategy
            res = rp(`${api}/v3/ranklist?strategy=${strategy}`)
                .then(function(res) {
                    console.log(res)
                    return res
                })
                .catch(function(err) {
                    console.log(err)
                });
            break;
    }

    return res
}