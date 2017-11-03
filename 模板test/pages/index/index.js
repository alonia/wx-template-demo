//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModalStatus: false,
    guideInfo: {
      name: '张三',
      location: '西湖',
      gender: 1,
      verified_guide: [1, 0, 1, 1, 1],
      avatar:'../../images/index_cell_pic.png'
    },

  },
  showEvidenceTap: function () {
    // debugger
    // 显示遮罩层
    this.setData({
      showModalStatus:true
    })

  },
  hideModal: function () {
    // 隐藏遮罩层
    // debugger
    this.setData({
      showModalStatus: false
    })

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
