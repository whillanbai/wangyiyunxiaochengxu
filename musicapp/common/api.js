import {baseUrl} from './config.js';

export function topList(){
	// 修改前，以前的接口依赖idx 
	// var listIds = ['3' , '0' , '2' , '1' ];
	// 修改后，id是不同版单的唯一值
	var listIds = ['19723756' , '3779629' , '2884035' , '3778678'];
	return new Promise(function(resolve,reject){
		uni.request({
			// 首页分类接口
			url: `${baseUrl}/toplist/detail`,
			// 请求方式
			method: 'GET',
			data: {},
			// 成功之后的结果
			success: res => {
				// 得到数组前四项
				console.log(res)
				let result = res.data.list;
				result.length = 4;	
				// 遍历一遍，把结果返回出去
				for(var i=0;i<result.length;i++){
					result[i].listId = listIds[i];
				} 
				resolve(result);
			},
			fail: (err) => {
				console.log(err);
			},
			complete: () => {}
		});
	});
}
// 飙升歌曲列表接口
export function list(listid){
	return uni.request({
		// 旧接口，idx已经废弃了
		// url: `${baseUrl}/top/list?idx=${listId}`,
		// 新接口，后台做了登录拦截！
		url: `${baseUrl}/playlist/detail?id=${listid}`,
		method: 'GET'
	});
}
// 获取所有歌曲详情
export function songDetail(songId){
	return uni.request({
		url : `${baseUrl}/song/detail?ids=${songId}`,
		method : 'GET'
	})
}
// 获取音频地址
export function songUrl(songId){
	return uni.request({
		url : `${baseUrl}/song/url?id=${songId}`,
		method : 'GET'
	})
}
// 获取歌词
export function songLyric(songId){
	return uni.request({
		url : `${baseUrl}/lyric?id=${songId}`,
		method : 'GET'
	})
}
// 获取相似音乐
export function songSimi(songId){
	return uni.request({
		url : `${baseUrl}/simi/song?id=${songId}`,
		method : 'GET'
	})
}
// 歌曲评论
export function songComment(songId){
	return uni.request({
		url : `${baseUrl}/comment/music?id=${songId}`,
		method : 'GET'
	})
}
// 热搜列表(详细)
export function searchHot(){
	return uni.request({
		url : `${baseUrl}/search/hot/detail`,
		method : 'GET'
	})
}
// 搜索结果
export function searchWord(word){
	return uni.request({
		url : `${baseUrl}/search?keywords=${word}`,
		method : 'GET'
	})
}
// 搜索建议
export function searchSuggest(word){
	return uni.request({
		url : `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method : 'GET'
	})
}