<template>
	<div class="icons-container py-3">
		<transition appear
          name="lock-transition"
          enter-active-class="animate__animated animate__fadeIn animate__delay-1s"
          >
		<div class="container-xl">
			<div class="row d-flex mx-lg-5">
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/javascript.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/react2.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/vue2.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/node2.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/php3.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/laravel2.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/bootstrap2.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/html52.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/css3.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/tailwind.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow pt-1" src="../assets/icons/mysql3.png" /></div>
				<div class="col-2 col-md-1 mt-3 mt-md-0"><img class="img-fluid icon-shadow" src="../assets/icons/linux.png" /></div>
			</div>
		</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'CodeIcons'
}
</script>

<style>
	.icons-container {
		background-color: #3399CC;
	}

	.icon-shadow {
		-webkit-filter: drop-shadow(1px 1px 1px #606060);
		filter: drop-shadow(1px 1px 1px #606060);
	}
</style>