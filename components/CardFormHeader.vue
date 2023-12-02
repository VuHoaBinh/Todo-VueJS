<template>
	<div class="card-header d-flex justify-space-between align-center">
		<div class="card-logo">
			<a href="#">
				<img
					src="https://wildcat-static.cgtrader.com/packs/media/Images/logo_modelry-1981f6e42b4fd608a727145de6a5aeb0.png"
					alt="Logo Modelry"
				>
			</a>
		</div>
		<div class="card-signup">
			<v-btn variant="text" class="signup-btn text-capitalize">
				Sign Up
			</v-btn>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-logo img {
  width: 134px;
}
.signup-btn {
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  color: rgba(30, 39, 50, 0.8);
  transition: all 0.5s ease-in-out;
}
.signup-btn:hover {
  background-color: rgba(30, 39, 50, 0.04);
  color: #1e2732;
}
</style>
