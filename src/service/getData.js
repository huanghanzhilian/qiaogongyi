import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'



/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});


/**
 * 获取首页热门城市
 */

export const hotcity = () => fetch('/v1/cities', {
	type: 'hot'
});


/**
 * 获取首页所有城市
 */

export const groupcity = () => fetch('/v1/cities', {
	type: 'group'
});


/**
 * 获取当前所在城市
 */

export const currentcity = number => fetch('/v1/cities/' + number);


/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});


/**
 * 获取msite页面地址信息
 */

export const msiteAdress = geohash => fetch('/v2/pois/' + geohash);


/**
 * 获取msite页面食品分类列表
 */

export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
	geohash,
	group_type: '1',
	'flags[]': 'F'
});


/**
 * 获取msite商铺列表
 */

export const shopList = (tagId='',pageName,querySize='') => {
	let userId=getStore('userId')?getStore('userId'):'';
	let data = {
		userId,
		tagValueId:tagId,
		authorId:'',
		pageNum: pageName,
		querySize:querySize,
		keyword:''
	};
	return fetch('/qgy/get/potList', data);
};


/**
 * 获取推荐列表
 */

export const shopListas = (tagId='',pageName,querySize='',excludeGoodsId='') => {
	let userId=getStore('userId')?getStore('userId'):'';
	let data = {
		userId,
		tagValueId:tagId,
		authorId:'',
		pageNum: pageName,
		querySize:querySize,
		keyword:'',
		excludeGoodsId
	};
	return fetch('/qgy/get/potList', data);
};






/**
 * 获取shareGoods分享权限和图片
 */

export const shareGoodss = ( goodsId) => fetch('/qgy/public/shareGoods', {
	userId:getStore('userId')?getStore('userId'):'',
	goodsId
});


/**
 * 获取search页面搜索结果
 */

export const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
	'extras[]': 'restaurant_activity',
	geohash,
	keyword,
	type: 'search'
});


/**
 * 获取food页面的 category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category', {
	latitude,
	longitude
});


/**
 * 获取food页面的配送方式
 */

export const foodDelivery = (latitude, longitude) => fetch('/shopping/v1/restaurants/delivery_modes', {
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取food页面的商家属性活动列表
 */

export const foodActivity = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取shop页面商铺详情
 */

export const shopDetails = (goodsId,shareId='') => fetch('/qgy/get/potDetail', {
	userId:getStore('userId')?getStore('userId'):'',
	goodsId:goodsId,
	shareId:shareId
});


/**
 * 发送关注匠人
 */

export const shopDetailspo = (userId,authorId,type) => fetch('qgy/add/followAuthor', {
	userId,
	authorId,
	type
});



/**
 * 获取shop页面菜单列表
 */

export const foodMenu = restaurant_id => fetch('/shopping/v2/menu', {
	restaurant_id
});


/**
 * 获取商铺评价列表
 */

export const getRatingList = (shopid, offset, tag_name = '') => fetch('/ugc/v2/restaurants/' + shopid + '/ratings', {
	has_content: true,
	offset,
	limit: 10,
	tag_name
});





/**
 * 获取商铺评价分数
 */

export const ratingScores = shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/scores');


/**
 * 获取商铺评价分类
 */

export const ratingTags = shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/tags');


/**
 * 获取短信验证码
 */

export const mobileCode = phone => fetch('/qgy/get/registercaptcha', {
	userPhone: phone
});


/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {},'POST');


/**
 * 检测帐号是否存在
 */

export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
	[type]: checkNumber,
	type
});


/**
 * 发送帐号
 */

export const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
	action: "send",
	captcha_code,
	[type]: sendData,
	type: "sms",
	way: type,
	password,
}, 'POST');


/**
 * 确认订单
 */

export const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
	come_from: "web",
	geohash,
	entities,
	restaurant_id: shopid,
}, 'POST');


/**
 * 获取快速备注列表
 */

export const getRemark = (id, sig) => fetch('/v1/carts/' + id + '/remarks', {
	sig
});


/**
 * 获取地址列表
 */

export const getAddress = (id, sig) => fetch('/v1/carts/' + id + '/addresses', {
	sig
});


/**
 * 搜索地址
 */

export const searchNearby = keyword => fetch('/v1/pois', {
	type: 'nearby',
	keyword
});


/**
 * 添加地址
 */

export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => fetch('/v1/users/' + userId + '/addresses', {
	address,
	address_detail,
	geohash,
	name,
	phone,
	phone_bk,
	poi_type,
	sex,
	tag,
	tag_type,
}, 'POST');


/**
 * 下订单
 */

export const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
}, 'POST');


/**
 * 重新发送订单验证码
 */

export const rePostVerify = (cart_id, sig, type) => fetch('/v1/carts/' + cart_id + '/verify_code', {
	sig,
	type,
}, 'POST');



/**
 * 下订单
 */

export const validateOrders = ({
	user_id,
	cart_id,
	address_id,
	description,
	entities,
	geohash,
	sig,
	validation_code,
	validation_token
}) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
	address_id,
	come_from: "mobile_web",
	deliver_time: "",
	description,
	entities,
	geohash,
	paymethod_id: 1,
	sig,
	validation_code,
	validation_token,
}, 'POST');


/**
 * 重新发送订单验证码
 */

export const payRequest = (merchantOrderNo, userId) => fetch('/payapi/payment/queryOrder', {
	merchantId: 5,
	merchantOrderNo,
	source: 'MOBILE_WAP',
	userId,
	version: '1.0.0',
});



/**
 * 获取服务中心信息
 */

export const getService = () => fetch('/v3/profile/explain');



/**
*兑换会员卡
*/

export const vipCart = (id, number, password) => fetch('/member/v1/users/' + id + '/delivery_card/physical_card/bind',{
	number,
	password
}, 'POST')



/**
 * 获取红包
*/

export const getHongbaoNum = id => fetch('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0');



/**
 * 获取过期红包
*/


export const getExpired = id => fetch('/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0');


/**
 * 兑换红包
*/

export const exChangeHongbao = (id, exchange_code, captcha_code) => fetch('/v1/users/' + id + '/hongbao/exchange',{
	exchange_code,
	captcha_code,
}, 'POST');


/**
 * 获取用户信息
 */

export const getUser = () => fetch('/qgy/get/user', {userId: getStore('userId')});


/**
 * 手机号登录
 */

export const sendLogin = (userphone, captcha,code='') => fetch('/qgy/checklogin', {
	userPhone:userphone,
	captcha:captcha,
	code:code
});


export const sendLogins = (code,shareId='') => fetch('/qgy/checklogin', {
	code,
	shareId:shareId
});

/**
 * 收藏商品
 */

export const favoRite = (goodsId,type) => fetch('/qgy/update/favorite', {
	userId:getStore('userId')?getStore('userId'):'',
	goodsId,
	type
});





/**
 * 获取订单列表
 */

export const getOrderList = (user_id, offset) => fetch('/bos/v2/users/' + user_id + '/orders', {
	limit: 10,
	offset,
});


/**
 * 获取订单详情
 */

export const getOrderDetail = (user_id, orderid) => fetch('/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot');


/**
*个人中心里编辑地址
*/

export const getAddressList = (user_id) => fetch('/v1/users/'+user_id+'/addresses')

/**
*个人中心里搜索地址
*/

export const getSearchAddress = (keyword) => fetch('v1/pois',{
	keyword:keyword,
	type:'nearby'
})

/**
* 删除地址
*/

export const deleteAddress = (userid, addressid) => fetch( '/v1/users/' + userid + '/addresses/' + addressid, {}, 'DELETE')



/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST');


/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout');


/**
 * 改密码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');



/**
 * 列表数据
 */

export const getWarelist = () => fetch('/qgy/get/condition',{
	userId:getStore('userId')?getStore('userId'):'',
});




/**
 * 首页获取推荐数据
 */

export const getRecommendInfo = () => fetch('/qgy/get/firstPage');


/**
 * 我的收藏数接口
 */

export const getMyCollection = () => fetch('/qgy/get/myStatistics',{
	userId:getStore('userId')?getStore('userId'):'',
});

/**
 * 我的关注
 */

export const getmyAuthors = (pageNum,querySize) => fetch('/qgy/get/myAuthors',{
	userId:getStore('userId')?getStore('userId'):'',
	pageNum,
	querySize
});


/**
 * 我的关注匠人 删除
 */

export const deleteFollow = (authorId) => fetch('/qgy/add/followAuthor', {
	userId:getStore('userId')?getStore('userId'):'',
	authorId,
	type:'-1'
});



/**
 * 获取我喜欢的商品详情列表
 */

export const mylikeList = (pageName,querySize='') => {
	let userId=getStore('userId')?getStore('userId'):'';
	let data = {
		userId,
		pageNum: pageName,
		querySize:querySize,
	};
	return fetch('/qgy/get/myFavorites', data);
};

/**
 * 夺宝详情
 */

export const duobaoDetail = (winGoodsId) => fetch('/qgy/get/duobaoDetail', {
	userId:getStore('userId')?getStore('userId'):'',
	winGoodsId
});


/**
 * 匠人列表
 */

export const artisansList = (pageNum,querySize) => fetch('/qgy/get/myStatisticslist', {
	pageNum,
	querySize
});



/**
 * 匠人详情
 */

export const getauthorDetail = (authorId) => fetch('/qgy/get/authorDetail', {
	authorId
});