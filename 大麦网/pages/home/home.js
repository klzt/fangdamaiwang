Page({
  data: {
    imgs: [
      "../../images/dm1.jpg",
      "../../images/dm2.jpg",
      "../../images/dm3.jpg",
      "../../images/dm4.jpg",
      "../../images/dm5.jpg"
    ],
    list: [
      { title: "eason浮夸十年深圳演唱会", date: "2017.5.10", address: "深圳湾春茧体育馆", city: "深圳", price: "￥100-600", src:"../../images/list1.jpg" } ,
      { title: "蔡琴回味往事香港演唱会", date: "2017.5.10", address: "香港红勘体育馆", city: "香港", price: "$100-600", src:"../../images/list2.jpg" },
      { title: "李健南京演唱会", date: "2017.5.10", address: "南京某地", city: "南京", price: "￥200-500", src:"../../images/list3.jpg" },
      { title: "周杰伦地表最强演唱会", date: "2017.5.10", address: "台北小巨蛋", city: "台北", price: "￥100-600", src:"../../images/list4.jpg" },
      { title: "峰暴超级巡回演唱会", date: "2017.5.10", address: "深圳湾春茧体育馆", city: "深圳", price: "￥100以下", src:"../../images/list5.jpg" },
      { title: "张杰为爱逆战广州演唱会", date: "2017.5.10", address: "广州天河体育馆", city: "广州", price: "￥100以下", src:"../../images/list6.jpg" }
    ]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // String2
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    // String6
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    // String8
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})