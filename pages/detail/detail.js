// pages/detail/detail.js
// 开始引入信息
   import goodsInfo from './../../data/data.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail:{},
    goods_id:'',
  },
  // 自定义事件
  addToCart(){
    //利用本地的数据缓存来实现，购物车的添加
    let cartGoods = wx.getStorageSync('cartGoods') || [];
    let goods_id = this.data.goods_id, goodsDetail = this.data.goodsDetail;
    
    // 首先判断原来的购物出中是否已经添加了该商品
    let index = cartGoods.findIndex((item)=>{
      return item.goods_id == goods_id;
    }); 
    if(index != -1){
      cartGoods[index].goods_num += 1;
    }else{
      // 添加新的goods_num的属性
      goodsDetail.goods_num = 1;
      goodsDetail.checked = true;
      //开始添加数据到本地的缓存
      cartGoods.push(goodsDetail);
    }
    console.log(cartGoods);
    wx.setStorageSync('cartGoods', cartGoods);
  },
  buyGoods(e){
    console.log("进入立即购买的页面");
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id} = options;
    // 遍历查询 获取相应的信息
    let goodsDetail = goodsInfo.data.find((item)=>{
      return item.goods_id == goods_id;
    });
    this.setData({
      goodsDetail: goodsDetail,
      goods_id: goods_id
    });
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