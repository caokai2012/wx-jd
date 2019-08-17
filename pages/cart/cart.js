// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    total:0.00,
    isAllChecked:true,
    isCheckAll:0,
  },
  // 自定义事件
  btnClick(e){
    //获取当前点击的按钮
    let type = e.target.dataset.type;
    let index = e.currentTarget.dataset.index;
    let goodsList = this.data.goodsList;
    switch (type){
      case 'jia':
        goodsList[index].goods_num++;
      break;
      case 'jian':
        let num = goodsList[index].goods_num;
        num -= 1;
        goodsList[index].goods_num = (num <= 1) ? 1 : num;
      break;
      case 'del':
        // 删除就是在缓存里面进行有关的处理
        goodsList.splice(index,1);
      break;
      default:;
    }
    wx.setStorageSync('cartGoods', goodsList);
    this.checkboxAll();
    this.setData({
      goodsList: goodsList
    });
  },
  getTotalPrice(){
     // 开始计算 总价
    let goodsList =this.data.goodsList;
    let total = 0;
    for (let item of goodsList){
      if (item.checked){
        total += parseFloat(item.goods_price) * item.goods_num;
      }
    }
    this.setData({
      total: total,
    });
  },
  checkboxChange(e){
    let index = e.currentTarget.dataset.index;
    let goodsList = this.data.goodsList;
    goodsList[index].checked = !goodsList[index].checked;
    wx.setStorageSync("cartGoods", goodsList);
    this.setData({
      goodsList,
    });
    this.checkboxAll();
  },
  checkboxAll(){
    let isAllChecked = this.data.goodsList.every((item)=>{
        return item.checked == true;
    });
    this.getTotalPrice();
    this.setData({
      isAllChecked,
    });
  },
  // 去选按钮事件
  checkAll(){
    let goodsList = this.data.goodsList;
    goodsList.find((item)=>{
      item.checked = !this.data.isAllChecked
    });
    wx.setStorageSync('cartGoods', goodsList);
    this.getTotalPrice();
    this.setData({
      goodsList,
      isAllChecked:!this.data.isAllChecked
    });

  },
  /**
   * 生命周期函数--监听页面加载 页面在使用 tabbar
   *  切换的时候是不会出现页面刷新的
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  // 生命周期函数--监听页面的显示
  onShow: function () {
    let goodsList = wx.getStorageSync("cartGoods") || [];
    // 调用函数开始计算总价
    this.setData({
      goodsList: goodsList,
    });
    this.checkboxAll();
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

  }

})