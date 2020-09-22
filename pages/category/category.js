// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,
    vtabs:[
      {
        title:"热门推荐",
        data:[
          {
            title:'热门分类',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
      {
        title:"手机数码",
        data:[
          {
            title:'热门品牌',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          },
          {
            title:'手机通讯',
            data:[
              {
                title:'空调',img:'//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg'
              },
              {
                title:'冰箱',img:'//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg'
              },
              {
                title:'电脑',img:'//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png'
              },
              {
                title:'手机',img:'//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
              }
            ]
          }
        ]
      },
    ]
  },
  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
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
        selected: 1
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