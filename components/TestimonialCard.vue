<template>
	<div class="testimonial">
		<div class="testimonial-text">
			<div class="testimonial-quote">
				“
			</div>
			<p>
				A single freelancer is really good for one or two shoes, but as we were
				looking to scale-up our projects and create more digital assets, this
				can only be done with a scalable product like Modelry
			</p>
		</div>
		<div class="testimonial-footer">
			<p>Josef Trojan</p>
			<p>3D Designer Sportstyle Footwear @ PUMA</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.testimonial {
  position: fixed;
  right: 55px;
  bottom: 74px;
  width: 561px;
  z-index: 1;
  border-radius: 16px;
  background: hsla(0, 0%, 100%, 0.1);
  padding: 36px 48px;
  color: #fff;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.testimonial-text {
  margin-bottom: 24px;
}
.testimonial-text p {
  font-family: 'Source Sans Pro', sans-serif;

  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  letter-spacing: normal;
  font-style: normal;
  font-weight: 600;
}
.testimonial-footer {
  font-family: 'Source Sans Pro', sans-serif;
}
.testimonial-quote {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 60px;
}
@media (min-width: 964px) and (max-width: 1255.98px) {
  .testimonial {
    width: 300px;
  }
}
@media (max-width: 963.98px) {
  .testimonial {
    display: none;
  }
}
</style>
