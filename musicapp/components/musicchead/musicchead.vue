<template>
	<view class="music-head" :style="{color : color}">
		<view class="music-head-icon" v-if="icon" :class="{'music-head-iconblack':iconblack}">
			<text class="iconfont iconzuojiantou-copy" @tap="handleToBack">&#xe65d;</text> | <text class="iconfont" @tap="handleToHome">&#xe60d;</text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		name:"musicchead",
		data() {
			return {
				
			};
		},
		props:['title','icon','color','iconblack'],
		methods: {
			handleToBack() {
				uni.navigateBack()
			},
			handleToHome() {
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped>
.music-head {
	width: 100%;
	height: 75px;
	font-size: 16px;
	line-height: 80px;
	text-align: center;
	color: black;
	position: relative;
}
.music-head-icon {
	position: absolute;
	left: 8px;
	top: 26px;
	width: 90px;
	height: 30px;
	background-color: rgba(0,0,0,0.3);
	line-height: 30px;
	border-radius: 15px;
	display: flex;
	justify-content: space-evenly;
	color: white;
}
.music-head-iconblack {
	color: black;
	border: 1px #eaeaea solid;
	background: white;
}
</style>
