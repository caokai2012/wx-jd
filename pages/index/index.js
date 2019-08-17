//index.js
//获取应用实例
const app = getApp()
// 引入本地的文件
import data from './../../data/data.js';
Page({
  data: {
     isShow:false,
     bannerList:[
       "/images/banner1.jpg",
       "/images/banner2.jpg",
       "/images/banner3.jpg",
       "/images/banner4.jpg",
       "/images/banner5.jpg",
       "/images/banner6.jpg",
       "/images/banner7.jpg",
       "/images/banner8.jpg",
     ],
     quickList:{
       page1:[
         {title:'京东超市',url:"/images/jdchaoshi.png"},
         { title: '数码电器', url:"/images/shumadianqi.png"},
         { title: '京东服饰', url:"/images/jdfushi.png"},
         { title: '京东生鲜', url:"/images/jdshengxian.png"},
         { title: '京东到家', url:"/images/jddaojia.png"},
         { title: '充值缴费', url:"/images/chongzhi.png"},
         { title: '9.9元拼', url:"/images/pingguo.png"},
         { title: '领券', url:"/images/lingjuan.png"},
         { title: '赚钱', url:"/images/zhuanqian.png"},
         { title: 'PLUS会员', url:"/images/huiyuan.png"},
       ],
       page2:[
         { title: '海囤全球', url: "/images/quanqiugou.png" },
         { title: '京东拍卖', url: "/images/jdpaimai.png" },
         { title: '唯品会', url: "/images/weipinhui.png" },
         { title: '玩3C', url: "/images/w3c.jpg" },
         { title: '沃尔玛', url: "/images/woeerma.png" },
         { title: '美妆馆', url: "/images/meizhuang.png" },
         { title: '京东旅行', url: "/images/lvxing.png" },
         { title: '拍拍二手', url: "/images/paipai.png" },
         { title: '物流查询', url: "/images/wuliu.png" },
         { title: '全部', url: "/images/all.png" },
       ],
     },
    goodList:[],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 自定义事件
  closeTips(){
    this.setData({ isShow:true});
  },
  getGoodInfo(e){
    // console.log(e.currentTarget.dataset.goods_id);
    // 页面的跳转
    wx.navigateTo({
      url: '/pages/detail/detail?goods_id=' + e.currentTarget.dataset.goods_id,
    });

  },
  // 周期函数
  onLoad: function () {
    this.setData({
      goodList: data.data
    });
  } 
})
