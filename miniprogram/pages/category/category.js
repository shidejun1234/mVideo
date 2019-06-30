wx.cloud.init()
Page({

    data: {

    },

    onLoad: function(options) {
        wx.cloud.callFunction({
            name: 'video',
            data: {
                type: 'category'
            }
        }).then(res => {
            res = JSON.parse(res.result)
            this.setData({
                categoryList: res
            });
        }).catch(err=>console.log(err))
        // request.getCategory()
        //     .then(res => {
        //         this.setData({
        //             categoryList: res
        //         });
        //     })
        //     .catch(error => console.log(error));
    },

    toDetail(e) {
        wx.navigateTo({
            url: '../category-detail/category-detail?id=' + e.currentTarget.dataset.id,
        })
    },

    onShareAppMessage: function() {

    }

})