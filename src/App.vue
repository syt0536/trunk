<template>
	<div class="warry">
		<div id="app">
			<router-view/>  
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '@/components/Footer'
	export default {
		name: 'App',
		components:{
	      Footer
	    }
	}
</script>

<style>
.warry{
    min-height: 100vh;
}
#app{
	min-height: 100vh;
	padding-bottom:60px;
	background:#fcfcfc;
}
</style>
