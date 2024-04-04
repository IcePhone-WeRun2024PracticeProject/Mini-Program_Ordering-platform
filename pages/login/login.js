Page({
    data: {
        isClicked: false
    },
    changeColor() {
        this.setData({
            isClicked: !this.data.isClicked
        });
    },
    goOther() {
        if (this.data.isClicked) {
            // 当 isClicked 为 true 时执行跳转操作
            wx.navigateTo({
                url: '/pages/otherTel_login/otherTel_login'
            });
        } else {
            // 当 isClicked 为 false 时弹出提示
            wx.showToast({
                title: '请先同意用户协议',
                icon: 'none',
                mask: true
            });
        }
    },
    getPhoneNumber(e) {
        if (this.data.isClicked) {
            // 当 isClicked 为 true 时执行跳转操作
            wx.switchTab({
                url: '/pages/home/home'
            });
            console.log(e.detail.code) // 动态令牌
            console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）
            console.log(e.detail.errno) // 错误码（失败时返回）
        } else {
            // 当 isClicked 为 false 时弹出提示
            wx.showToast({
                title: '请先同意用户协议',
                icon: 'none',
                mask: true
            });
        }
    },
    goPassword()
    {
        wx.navigateTo({
          url: '/pages/a_p_login/a_p_login',
        })
    }
});