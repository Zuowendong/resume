// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    name: "旗木·卡卡西",
    spell: "qimu·wuwukai",
    job: "木叶上忍",
    exp: "20年工作经验",
    tel: "17326195691",
    sex: "男",
    age: "27",
    email: "17326195691@qq.com",
    address: "火之国木叶村",
    skill: [
      {name: "火遁", percent: 50},
      {name: "水遁", percent: 60},
      {name: "雷遁", percent: 90},
      {name: "土遁", percent: 50},
      {name: "风遁", percent: 30},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const width = wx.getSystemInfoSync().windowWidth;
    const height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      width: width,
      height: height,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})