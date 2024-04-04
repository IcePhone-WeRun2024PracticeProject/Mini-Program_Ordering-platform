// pages/otherTel_login/otherTel_login.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
     sendTime: '获取验证码',
     sendColor: '#363636',
     snsMsgWait: 60
   },
 
  // 获取验证码
   sendCode: function() {  
  // 60秒后重新获取验证码
     var inter = setInterval(function() {
       this.setData({
         smsFlag: true,
         sendColor: '#b6b6b6',
         sendTime: this.data.snsMsgWait + 's后重发',
         snsMsgWait: this.data.snsMsgWait - 1
       });
       if (this.data.snsMsgWait < 0) {
         clearInterval(inter)
         this.setData({
           sendColor: '#363636',
           sendTime: '获取验证码',
           snsMsgWait: 60,
           smsFlag: false
         });
       }
     }.bind(this), 1000);
   },

    goLogin() {
        wx.switchTab({
            url: '/pages/home/home',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})