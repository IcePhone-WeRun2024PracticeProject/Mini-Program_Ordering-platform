Page({
    data: {
        isClicked: false,
        account: '', // 保存账号
        password: '' // 保存密码
    },
    changeColor() {
        this.setData({
            isClicked: !this.data.isClicked
        });
    },
    accountInput: function (e) {
        this.setData({
            account: e.detail.value
        });
    },
    // 监听密码输入框内容变化
    passwordInput: function (e) {
        this.setData({
            password: e.detail.value
        });
    },
    goLogin() {
        if (this.data.isClicked) {
            var account = this.data.account;
            var password = this.data.password;
    
            // 在这里可以向服务器发送请求，进行账号密码验证等操作
            // 暂时只打印到控制台
            console.log('账号：', account);
            console.log('密码：', password);
            // 使用 wx.redirectTo 方法进行页面跳转，使用户无法返回
            wx.switchTab({
                url: '/pages/home/home'
            });
        } else {
            // 当 isClicked 为 false 时弹出提示
            wx.showToast({
                title: '请先同意用户协议',
                icon: 'none',
                mask: true
            });
        }
    }
    

})