// let app = getApp();
// let api = app.globalData.api;
// let api2 = app.globalData.api2;
// let getFeed = () => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v2/feed`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     });
// }

// let getNext = url => {
//     return new Promise((resolve, reject) => {
//         url = url.replace('http://baobab.kaiyanapp.com/api/',api2)
//         wx.request({
//             url: `${url}`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     });
// }

// let getVideo = id => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v1/video/${id}`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     })
// }

// let getRelated = id => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v4/video/related?id=${id}`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     })
// }

// let getCategory = () => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v4/categories/`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     })
// }

// let getCategoryDetail = id => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v4/categories/detail/tab?id=${id}`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     })
// }

// let getVideoList = id => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v3/categories/videoList?id=${id}`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     })
// }

// let getRankList = strategy => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: `${api2}v3/ranklist?strategy=${strategy}`,
//             success: res => {
//                 if (res.data.code == 200) {
//                     resolve(res.data.data);
//                 } else {
//                     reject('error');
//                 }
//             }
//         })
//     })
// }

// module.exports = {
//     getFeed: getFeed,
//     getNext: getNext,
//     getVideo: getVideo,
//     getRelated: getRelated,
//     getCategory: getCategory,
//     getCategoryDetail: getCategoryDetail,
//     getVideoList: getVideoList,
//     getRankList: getRankList
// }