// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[
      {
        shop:{//店铺
          name:'京东自营',
          self:true,
          coupon:true,
          fare:true
        },
        goods:[//商品
          {
            title:'惠普（HP）24X 23.8英寸 144Hz  AMD FreeSync兼容G-Sync 窄边框升降旋转 内置音箱 低蓝光爱眼 显示器',
            count:1,//数量
            spec:2,//选中的规格
            specs:[//规格
              {
                id:0,
                name:'X27I【27英寸2K IPS 144升降】',
                price:2199.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/77253/20/13518/193424/5dae6382Ebcfb43d6/285b5a62fe26c4ab.jpg!q70.dpg.webp'
              },
              {
                id:1,
                name:'32GD【32英寸2K 数字级色域】',
                price:3299.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/131750/36/2331/187618/5ee86568Efba4863f/bb2c6f0265f52b8a.jpg!q70.dpg.webp'
              },
              {
                id:2,
                name:'27QD【27英寸2K 数字级色域】',
                price:2799.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/35408/35/3741/190644/5cb96d9bE3383953d/72eaeabfb7b208c3.jpg!q70.dpg.webp'
              },
              {
                id:3,
                name:'24X【23.8英寸升降旋转144Hz】',
                price:1199.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/127141/13/4980/155644/5ee8653eEf5859484/16cf61e89d775b0e.jpg!q70.dpg.webp'
              },
              {
                id:4,
                name:'27F【27英寸75Hz IPS微边框】',
                price:1099.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/39179/9/397/210041/5cb96d1fEe5b4b88d/e74d7a25dd409bc7.jpg!q70.dpg.webp'
              },
              {
                id:5,
                name:'24F【23.8英寸75Hz IPS微边框】',
                price:849.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/36216/17/3714/173998/5cb96b8bE73db1d71/b1596d61b2d0c694.jpg!q70.dpg.webp'
              },
              {
                id:6,
                name:'22F【21.5英寸75Hz IPS微边框】',
                price:749.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/36728/30/3703/183503/5cb96a16E6442fdbe/ec575ec2aa9bb738.jpg!q70.dpg.webp'
              },
              {
                id:7,
                name:'Omen27I【27英寸 2k IPS 165】',
                price:3199.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/126485/28/3632/183141/5ed4b4f8Ef9c715d3/3b20dfa212332363.jpg!q70.dpg.webp'
              },
            ]
          },
          {
            title:'富士（FUJIFILM）X-T30/XT30 微单相机 套机 雅墨灰（18-55mm镜头 ) 2610万像素 4K视频 蓝牙WIFI',
            count:1,
            spec:0,
            specs:[
              {
                id:0,
                name:'15-45套机+64G卡',
                price:6989.00,
                img:'//m.360buyimg.com/mobilecms/s180x180_jfs/t1/106518/8/16529/166505/5e7b04c2E514cd209/b090a86f024fed55.jpg!q70.dpg.webp'
              },
            ]
          }
        ]
      }
    ],
    total:0,//选择商品的总价格
    selectedNum:0,//选择商品的总数量
    specs:{//选择规格-弹出框
      show:false,
      data:[],
      selected:0,
      index:[0,0]//商品在data中的位置
    }
  },

  //商品数量加减
  handleCount:function(e){
    let params=e.target.dataset
    let goods=this.data.data[params.shop].goods[params.goods]
    let count=goods.count
    let data=`data[${params.shop}].goods[${params.goods}].count`
    let selectedNum=this.data.selectedNum
    let total=this.data.total
    if(params.act=='add'){
      count+=1
      if(goods.selected){
        selectedNum++
        total+=params.price
      }
    }else{
      if(count>1){
        count-=1
        if(goods.selected){
          selectedNum--
          total-=params.price
        }
      }
    }
    this.setData({
      [data]:count,
      selectedNum,total
    })
  },

  //购物车商品选择
  handleCheck:function(e){
    let total=0
    let data=this.data.data
    let selectedNum=0;
    data.map(shop=>{
      shop.goods.map(goods=>goods.selected=false)
    })
    e.detail.value.map(item=>{
      let arr=item.split(',')
      let shopIndex=parseInt(arr[0])
      let goodsIndex=parseInt(arr[1])
      let goods=data[shopIndex].goods[goodsIndex]
      goods.selected=true
      selectedNum+=goods.count
      total+=goods.specs[goods.spec].price*goods.count
    })
    this.setData({data,total,selectedNum:selectedNum})
  },
  
  //购物车全选
  selectAll:function(e){
    let total=0
    let data=this.data.data
    let selectedNum=0
    if(e.detail.value.length!==0){
      data.map(shop=>{//更新总价和数量
        shop.goods.map(goods=>{
          selectedNum+=goods.count
          goods.selected=true
          total+=goods.specs[goods.spec].price*goods.count
        })
      })
    }else{
      data.map(shop=>{
        shop.goods.map(goods=>goods.selected=false)
      })
    }
    this.setData({
      data,total,selectedNum
    })
  },

  //选择规格-弹出选项
  handleClickSpec:function(e){
    let params=e.currentTarget.dataset
    let specs={
      show:true,
      data:params.specs,
      selected:params.spec,
      index:params.index
    }
    this.setData({specs})
  },

  //选择规格-点击事件
  handleSpecClick:function(e){
    let params=e.currentTarget.dataset
    let specs=this.data.specs
    specs.selected=params.index
    this.setData({specs})
  },

  // 选择规格-确认事件
  handleChangeSpec:function(){
    let index=this.data.specs.index
    let update=`data[${index[0]}].goods[${index[1]}].spec`
    let data=this.data.data
    data[index[0]].goods[index[1]].spec=this.data.specs.selected
    let total=0
    data.map(shop=>{//更新总价格
      shop.goods.map(goods=>{
        if(goods.selected) total+=goods.specs[goods.spec].price*goods.count
      })
    })
    this.setData({ 
      [update]:this.data.specs.selected,
      'specs.show':false,
      total
    })
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
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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