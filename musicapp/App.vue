<script>
	export default {
		onLaunch: function() {

		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: calc(100vh - 70px);
		overflow: hidden;
	}

	.container scroll-view {
		height: 100%;
	}

	.fixbg {
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-image: url(static/logo.png);
		background-size: cover;
		background-position: center 0;
		filter: blur(20px);
		transform: scale(1.2);
	}
</style>
