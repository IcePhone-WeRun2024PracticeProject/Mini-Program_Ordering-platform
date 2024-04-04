Page({
    data: {
      value: '' ,// 保存搜索框输入的内容,
      imageUrls: [] // 图片地址数组
    },
    onLoad() {
        // 从后端获取图片数据
        this.fetchImageData();
      },
      fetchImageData() {

        // wx.request({
        //   url: '',
        //   success: (res) => {
        //     const imageData = res.data;
        //     if (Array.isArray(imageData) && imageData.length > 0) {
        //       const imageUrls = imageData.map(item => item.url);
        //       this.setData({
        //         imageUrls: imageUrls
        //       });
        //     } else {
        //       console.error('图片数据格式错误或为空');
        //     }
        //   },
        //   fail: (error) => {
        //     console.error('请求图片数据失败：', error);
        //   }
        // });
      
      },
    onSearch(event) {
      // event.detail 为输入框的值
      const keyword = event.detail;
      if (keyword.trim() !== '') {
        // 执行搜索操作
        console.log('搜索内容：', keyword);
        // 清空搜索框内容
        this.setData({
          value: ''
        });
      } else {
        wx.showToast({
          title: '请输入搜索内容',
          icon: 'none'
        });
      }
    }
  });
  