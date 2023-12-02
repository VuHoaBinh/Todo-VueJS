<template>
	<div>
		<div class="wrapper-content" />
		<CardForm />
		<TestimonialCard />
	</div>
</template>

<script>
export default {
	name: "IndexPage"
};
</script>

<style scoped>
.wrapper-content {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('//wildcat-static.cgtrader.com/packs/media/Images/devise/testimonials/puma-9d5ca249898f869eba09065dececa5f0.webp');
  background-position: 50%;
  background-size: cover;
}
</style>
