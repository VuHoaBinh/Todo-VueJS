<template>
	<div class="wrapper d-flex align-center">
		<div class="card-content">
			<h1 id="title" class="mb-4 ml-15">
				Welcome back
			</h1>
			<p id="subtitle" class="mb-6 ml-5">
				Please enter your details, to log into your account
			</p>

			<form class="form-group" @submit.prevent="onSubmit">
				<div class="form-control mb-4">
					<label for="email">Email</label>
					<input
						id="email"
						v-model="enteredValue.email"
						type="email"
						class="form-control"
					>
				</div>
				<div class="form-control relactive">
					<label for="password">Password</label>
					<div class="password-group">
						<input
							id="password"
							ref="passwordInput"
							v-model="enteredValue.password"
							type="password"
							class="form-control"
						>
						<v-icon
							class="passwordToggle"
							:icon="iconPassword"
							@click="togglePassword"
						/>
					</div>
				</div>
				<div
					class="login-action mt-4 d-flex align-center justify-space-between"
				>
					<a
						href="#"
						class="forgot-password text-decoration-none text-capitalize"
					>Forgot password?</a>
					<div class="checkbox-group d-flex align-center">
						<v-checkbox
							label="Remember me"
							class="custom-checkbox"
							color="#00E5FF"
							hide-details
						/>
					</div>
				</div>
				<v-btn
					class="text-white text-capitalize text-subtitle-2 text-subtitle-1 mb-5"
					color="#19bcc9"
					block
					rounded="xs"
					size="large"
					type="submit"
				>
					Login
				</v-btn>
				<v-btn
					class="text-black text-capitalize text-subtitle-2 text-subtitle-1 mb-5 custom-btn"
					color="#fff"
					block
					rounded="xs"
					size="large"
				>
					<div class="custom-icon">
						<svg
							height="24"
							width="24"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								fill="#4285F4"
							/>
							<path
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								fill="#34A853"
							/>
							<path
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								fill="#FBBC05"
							/>
							<path
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								fill="#EA4335"
							/>
							<path d="M1 1h22v22H1z" fill="none" />
						</svg>
					</div>
					Log in with Google
				</v-btn>
				<v-btn
					class="text-black text-capitalize text-subtitle-2 text-subtitle-1 custom-btn"
					color="#fff"
					block
					rounded="xs"
					size="large"
				>
					<div class="custom-icon">
						<svg
							height="24"
							width="24"
							viewBox="0 0 48 48"
							xmlns="http://www.w3.org/2000/svg"
						>
							<linearGradient
								id="Ld6sqrtcxMyckEl6xeDdMa"
								x1="9.993"
								x2="40.615"
								y1="9.993"
								y2="40.615"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stop-color="#2aa4f4" />
								<stop offset="1" stop-color="#007ad9" />
							</linearGradient>
							<path
								fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
								d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
							/>
							<path
								fill="#fff"
								d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
							/>
						</svg>
					</div>
					Log in with Facebook
				</v-btn>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			enteredValue: {
				email: "",
				password: ""
			},
			passwordShow: false,
			iconPassword: "fa-solid fa-eye"
		};
	},
	methods: {
		togglePassword () {
			this.passwordShow = !this.passwordShow;
			this.iconPassword = this.passwordShow
				? "fa-solid fa-eye-slash"
				: "fa-solid fa-eye";
			this.$refs.passwordInput.type = this.passwordShow ? "text" : "password";
		},
		onSubmit () {
			console.log(this.enteredValue.email, this.enteredValue.password);
		}
	}
};
</script>

<style>
.wrapper {
  height: 100%;
}
.card-content {
  width: 100%;
  max-width: 371px;
  margin: 0 auto;
}

#title {
  font-size: 38px;
  line-height: 48px;
  font-weight: 500;
}

#subtitle {
  color: #1e2732;
  font-size: 15px;
}

.form-control {
  display: flex;
  flex-direction: column;
}
.form-control label {
  color: #1e2732;
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin: 0 8px 8px;
}
.password-group {
  position: relative;
  display: flex;
  align-items: center;
}
.form-control input {
  width: 100%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(30, 39, 50, 0.12);

  padding: 8px 10px;
}
#password {
  color: #1e2732;
  font-style: normal;
}
.passwordToggle {
  position: absolute;
  /* top: 50%;
  transform: translateY(-50%); */
  right: 10px;
  color: #1e273299 !important;
}
.passwordToggle:hover {
  color: #1e2732 !important;
}
.form-control input:hover {
  box-shadow: 0 0 0 4px rgba(30, 39, 50, 0.06),
    inset 0 0 0 1px rgba(30, 39, 50, 0.16);
}
.form-control input:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(25, 188, 201, 0.2), inset 0 0 0 1px #19bcc9;
}

.forgot-password {
  color: #19bcc9;
  height: 24px;
  padding: 0 8px;
  font-size: 11px;
  line-height: 14px;
  font-weight: 600;
}

.custom-checkbox {
  transform: translateY(-5px);
}
.custom-checkbox i {
  transform: scale(0.6) translateY(-2px);
}

.custom-checkbox label {
  color: #000000;
  font-weight: 600;
  font-size: 12px;
}

.custom-btn {
  position: relative;
}
.custom-icon {
  position: absolute;
  left: 15px;
}
</style>
