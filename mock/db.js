// db.js
var Mock = require('mockjs');

module.exports = {
  getComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  }),
  //匠人详情页
  authorDetail: Mock.mock({
    "success": true,
    "object": {
        "authorHeadPic": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/顾景舟2.jpg",
        "author": {
            "base": {
                "recordStatus": "0",
                "createTime": "2017-07-26 09:41:51",
                "updateTime": "2017-08-01 20:12:36.0"
            },
            "id": "1",
            "authorName": "顾景舟",
            "authorLevel": "6",
            "photoUrl": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/顾景舟1.jpg",
            "authorHeadUrl": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/顾景舟2.jpg",
            "memo": "师承xxx",
            "address": "宜兴",
            "followCount": "2",
            "goodsCount": "2"
        },
        "authorPic": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/顾景舟1.jpg"
    }
}),
  //匠人列表
  myStatisticslist: Mock.mock({
    "success": true,
    "object|14": [
	        {
	            "photoUrl": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/顾景舟1.jpg",
	            "address": "@city",
	            "followCount": "0",
	            "authorName": "@cname",
	            "authorLevel": "6",
	            "memo": "师承xxx",
	            "authorHeadUrl": "https://p3.pstatp.com/list/2c6700137fe773231e96",
	            "id|1-100": 100
	        }
	    ]
	}),
  //夺宝详情
  duobaoDetail: Mock.mock({
    "success": true,
    "object": {
        "goodsInfo": {
            "goodsId": "6",
            "goodsName": "【扁腹仿古壶】陶纹山屋",
            "description": "宜兴纯手工紫砂壶仿古，名家全手工原矿段泥茶壶",
            "price": "688",
            "picUrl": [
                "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_1.png",
                "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_1.png",
                "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/12_1.png"
            ]
        },
        "winGoodsInfo": {
            "winGoodsStatus": "10",
            "periodNo": "DB201701010005",
            "totalCnt": "100",
            "remainCnt": "50",
            "endTime": "2017-01-01:20:00:00",
            "nowTime": "2017-01-01:19:00:00",
            "unitMoney": "0"
        },
        "luckyUser": {
            "luckyUserId": "2",
            "luckyNum": "030",
            "userHead": "http://meiyuefu.oss-cn-beijing.aliyuncs.com/%E9%A1%BE%E6%99%AF%E8%88%9F1.jpg",
            "userName": "张三"
        },
        "selectNumList": [
            "001",
            "090"
        ]
    }
}),
  //删除我的喜欢
  favorite: Mock.mock({
    "success": true,
    "message": "操作成功"
}),
  //我喜欢/收藏的商品
  myFavorites: Mock.mock({
    "success": true,
    "object|10": [
        {
            "shape": "如意",
            "goodsId": "5",
            "authorId": "9",
            "material": "紫泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "18888",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/qgy/shareGoods/10.png",
            "goodsName": "龙凤呈详",
            "favoriteCount": "4"
        }
    ]
}),
  //删除 或者关注我的匠人
  followAuthor: Mock.mock({
    "success": true,
    "message": "操作成功"
}),
  //我关注的匠人 列表接口
  myAuthors: Mock.mock({
    "success": true,
    "object|2": [
        {
            "isFollow": "1",
            "goodsCount": "15",
            "followCount": "1",
            "authorName": "陈立功",
            "authorLevel": "大师级高级工艺美术师",
            "authorHeadUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorId": "9"
        }
    ]
}),
  //我的，喜欢，关注数据展示
  myStatistics: Mock.mock({
    "success": true,
    "object": {
        "followCount": "10",
        "favoriteCount": "14"
    }
}),
  //详情页接口
  potDetail: Mock.mock({
    "success": true,
    "object": {
        "garyHeadTagList": [
            {
                "tagId": "102",
                "tagValue": "古铜泥",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao-grey.png",
                "tagName": "泥料"
            },
            {
                "tagId": "213",
                "tagValue": "350CC",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang-grey.png",
                "tagName": "容量"
            },
            {
                "tagId": "210",
                "tagValue": "全国包邮",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei-grey.png",
                "tagName": "运费"
            },
            {
                "tagId": "211",
                "tagValue": "7天无理由退货",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou-grey.png",
                "tagName": "售后"
            }
        ],
        "goodsId": "45",
        "description": "这是一把绝世好壶",
        "authorId": "9",
        "remainCount": "1",
        "capacity": "350CC",
        "tagList": [
            {
                "tagId": "201",
                "tagValue": "5.2cm",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/koujing.png",
                "tagName": "口径"
            },
            {
                "tagId": "202",
                "tagValue": "8cm",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/hugao.png",
                "tagName": "壶身高度"
            },
            {
                "tagId": "203",
                "tagValue": "15cm",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/huchang.png",
                "tagName": "壶身长度"
            },
            {
                "tagId": "204",
                "tagValue": "8孔",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/chushui.png",
                "tagName": "出水"
            },
            {
                "tagId": "205",
                "tagValue": "宜兴",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/chandi.png",
                "tagName": "产地"
            },
            {
                "tagId": "206",
                "tagValue": "178g",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/maozhong.png",
                "tagName": "毛重"
            },
            {
                "tagId": "207",
                "tagValue": "纯手工",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/gongyi.png",
                "tagName": "工艺"
            },
            {
                "tagId": "208",
                "tagValue": "顺丰快递",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/fahuo.png",
                "tagName": "发货"
            },
            {
                "tagId": "209",
                "tagValue": "江浙沪1~3天，其他4~5天",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/huoyunsudu.png",
                "tagName": "货运速度"
            }
        ],
        "material": "古铜泥",
        "goodsStatus": "0",
        "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
        "authorName": "陈立功",
        "authorLevel": "6",
        "picList": [
            "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_11.png",
            "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_12.png",
            "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_13_1.png",
            "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_13_2.png",
            "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_13_3.png",
            "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_13_4.png"
        ],
        "price": "1000",
        "authorLevelName": "大师级高级工艺美术师",
        "goodsName": "「牛壶」",
        "headTagList": [
            {
                "tagId": "102",
                "tagValue": "古铜泥",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/niliao-grey.png",
                "tagName": "泥料"
            },
            {
                "tagId": "213",
                "tagValue": "350CC",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/rongliang-grey.png",
                "tagName": "容量"
            },
            {
                "tagId": "210",
                "tagValue": "全国包邮",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/yunfei-grey.png",
                "tagName": "运费"
            },
            {
                "tagId": "211",
                "tagValue": "7天无理由退货",
                "tagIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou.png",
                "tagGrayIconUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/icon/tagName/shouhou-grey.png",
                "tagName": "售后"
            }
        ],
        "extraInfo": {
            "isFollow": "0",
            "goodsCount": "8",
            "address": "宜兴",
            "followCount": "9",
            "authorName": "陈立功",
            "authorLevel": "6",
            "authorHeadUrl": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "isFavorite": "0"
        }
    }
}),
  //赛选数据
  condition: Mock.mock({
    "success": true,
    "object": {
        "101": {
            "subTagList": [
                {
                    "tagId": "1",
                    "tagName": "西施"
                },
                {
                    "tagId": "2",
                    "tagName": "石瓢"
                },
                {
                    "tagId": "3",
                    "tagName": "仿古"
                },
                {
                    "tagId": "7",
                    "tagName": "如意"
                },
                {
                    "tagId": "10",
                    "tagName": "汉瓦"
                },
                {
                    "tagId": "23",
                    "tagName": "汉锋"
                },
                {
                    "tagId": "37",
                    "tagName": "南瓜"
                },
                {
                    "tagId": "13",
                    "tagName": "潘壶"
                },
                {
                    "tagId": "19",
                    "tagName": "半月"
                }
            ],
            "tagId": "101",
            "tagName": "壶型"
        },
        "102": {
            "subTagList": [
                {
                    "tagId": "101",
                    "tagName": "段泥"
                },
                {
                    "tagId": "102",
                    "tagName": "朱泥"
                },
                {
                    "tagId": "103",
                    "tagName": "绿泥"
                },
                {
                    "tagId": "104",
                    "tagName": "红泥"
                },
                {
                    "tagId": "105",
                    "tagName": "红皮龙"
                },
                {
                    "tagId": "112",
                    "tagName": "紫泥"
                },
                {
                    "tagId": "110",
                    "tagName": "天青泥"
                },
                {
                    "tagId": "118",
                    "tagName": "古铜泥"
                }
            ],
            "tagId": "102",
            "tagName": "泥料"
        },
        "103": {
            "subTagList": [
                {
                    "tagId": "201",
                    "tagName": "福"
                },
                {
                    "tagId": "202",
                    "tagName": "梅"
                },
                {
                    "tagId": "213",
                    "tagName": "寿"
                },
                {
                    "tagId": "219",
                    "tagName": "钟鼎"
                },
                {
                    "tagId": "212",
                    "tagName": "福"
                },
                {
                    "tagId": "227",
                    "tagName": "山水"
                },
                {
                    "tagId": "208",
                    "tagName": "瓜"
                },
                {
                    "tagId": "106",
                    "tagName": "小煤窑"
                },
                {
                    "tagId": "230",
                    "tagName": "如意"
                }
            ],
            "tagId": "103",
            "tagName": "主题"
        },
        "104": {
            "tagId": "104",
            "subTagMap": {
                "141": {
                    "subTagList": [
                        {
                            "tagId": "304",
                            "tagName": "送师长"
                        },
                        {
                            "tagId": "305",
                            "tagName": "送领导"
                        },
                        {
                            "tagId": "307",
                            "tagName": "送男性"
                        },
                        {
                            "tagId": "309",
                            "tagName": "赠友"
                        },
                        {
                            "tagId": "306",
                            "tagName": "送情侣"
                        }
                    ],
                    "tagId": "141",
                    "tagName": "功能"
                },
                "142": {
                    "subTagList": [
                        {
                            "tagId": "404",
                            "tagName": "201-250CC"
                        },
                        {
                            "tagId": "405",
                            "tagName": "251-300CC"
                        },
                        {
                            "tagId": "406",
                            "tagName": "301-400CC"
                        }
                    ],
                    "tagId": "142",
                    "tagName": "容量区间"
                },
                "143": {
                    "subTagList": [
                        {
                            "tagId": "505",
                            "tagName": "10000元以上"
                        },
                        {
                            "tagId": "504",
                            "tagName": "5000-10000元"
                        }
                    ],
                    "tagId": "143",
                    "tagName": "价格区间"
                }
            },
            "tagName": "更多"
        }
    }
}),
  //列表页面数据
  potList: Mock.mock({
    "success": true,
    "object": [
        {
            "shape": "半月",
            "goodsId": "45",
            "authorId": "9",
            "material": "古铜泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/45_10.png",
            "goodsName": "「牛壶」"
        },
        {
            "shape": "潘壶",
            "goodsId": "44",
            "authorId": "9",
            "material": "段泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/44_10.png",
            "goodsName": "「绿蚁红泥」"
        },
        {
            "shape": "西施",
            "goodsId": "43",
            "authorId": "9",
            "material": "段泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/43_10.png",
            "goodsName": "「牛盖壶」"
        },
        {
            "shape": "西施",
            "goodsId": "42",
            "authorId": "9",
            "material": "段泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/42_10.png",
            "goodsName": "「龙井神壶」西施段泥精品"
        },
        {
            "shape": "南瓜",
            "goodsId": "41",
            "authorId": "9",
            "material": "天青泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/41_10.png",
            "goodsName": "「大西瓜」"
        },
        {
            "shape": "汉锋",
            "goodsId": "40",
            "authorId": "9",
            "material": "紫泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/40_10.png",
            "goodsName": "「虎啸山林」"
        },
        {
            "shape": "汉瓦",
            "goodsId": "39",
            "authorId": "9",
            "material": "红皮龙",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/39_10.png",
            "goodsName": "「归去」"
        },
        {
            "shape": "如意",
            "goodsId": "38",
            "authorId": "9",
            "material": "红泥",
            "goodsStatus": "0",
            "author_head_url": "http://qgy-offline.oss-cn-beijing.aliyuncs.com/as.jpg",
            "authorName": "陈立功",
            "authorLevel": "6",
            "price": "1000",
            "authorLevelName": "大师级高级工艺美术师",
            "pot_item_bg_url": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/38_10.png",
            "goodsName": "「葫芦娃」"
        }
    ]
}),
  //首页
  firstPage: Mock.mock({
    "success": true,
    "object": {
        "goodsNewestList": [
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "44",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "42",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "42",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "41",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "41",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "40",
                "price": "1000"
            }
        ],
        "activity": [
            {
                "activityUrl": "http://www.baidu.com",
                "activityPic": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png"
            },
            {
                "activityUrl": "http://www.baidu.com",
                "activityPic": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png"
            }
        ],
        "goodsPopularList": [
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "44",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "43",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "39",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "39",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "37",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "37",
                "price": "1000"
            },
            {
                "attachmentUrl": "http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/120.png",
                "goodsId": "38",
                "price": "1000"
            }
        ]
    }
}),






};