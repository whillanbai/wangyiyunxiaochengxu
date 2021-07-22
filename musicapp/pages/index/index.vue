<template>
	<view class="index">
		<musichead title="网易云音乐" :icon="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search" @tap="handelToSearch">
					<text class="iconfont"> &#xe617;</text>
					<input type="text" placeholder="搜索歌曲" />
				</view>
				<view class="index-list">
					<view class="index-list-item" v-for="(item,index) in topList" :key="index"
						@tap="handleToList(item.listId)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{ item.updateFrequency }}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(item ,index) in item.tracks" :key="index">{{ index + 1 }}.{{item.first}} -
								{{item.second}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musicchead/musicchead.vue'
	import {
		topList
	} from '../../common/api.js'
	export default {
		data() {
			return {
				topList: []
			}
		},
		components: {
			musichead
		},
		onLoad() {
			topList().then(res => {
				if (res.length) {
					this.topList = res
				}
			})
		},
		methods: {
			handleToList(listId) {
				uni.navigateTo({
					url:'/pages/list/list?listId=' + listId,
				})
				
			},
			handelToSearch() {
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>

<style scoped>
	/*搜索栏*/
	.index-search {
		display: flex;
		background: #f7f7f7;
		height: 73rpx;
		margin: 30rpx;
		border-radius: 50rpx;
		align-items: center;
	}

	.index-search text {
		margin: 0 27rpx;
	}

	.index-search input {
		font-size: 26rpx;
		flex: 1;
	}

	/*歌曲分类*/
	.index-list {
		margin: 0 30rpx;
	}

	.index-list-item {
		display: flex;
		margin-bottom: 34rpx;
	}

	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		margin-right: 20rpx;
		border-radius: 30rpx;
		overflow: hidden;
		position: relative;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		position: absolute;
		font-size: 20rpx;
		color: white;
		bottom: 15rpx;
		left: 12rpx;
	}

	.index-list-text {
		font-size: 22rpx;
		line-height: 28px;
		flex: 1;
	}
</style>
