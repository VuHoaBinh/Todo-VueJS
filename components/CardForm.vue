<template>
	<div class="card-form pt-8 px-6">
		<CardFormHeader />
		<CardContent />
	</div>
</template>

<script>
export default {
	name: "CardForm"
};
</script>

<style scoped>
.card-form {
  width: 100%;
  /* height: 400px; */
  max-width: 646px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 99;
  overflow: hidden;
}
@media (max-width: 963.98px) {
  .card-form {
    max-width: 100%;
  }
}
</style>
