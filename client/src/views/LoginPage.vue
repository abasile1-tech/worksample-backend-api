<template>
	<div id="loginPage_css">
		<h1>Welcome to the administrator interface</h1>

		<div id="loginSignupDiv1">
		<input type="text" placeholder="Type your username:"  v-model="userNameInput" /> 
		<br >
		<input type="password" placeholder="Type your password:"  v-model="passwordInput" @keyup.enter="logIn"/>
		<br >
		<button class="submitButton_css" v-on:click="logIn()">Submit</button>
		</div>

		<div id="notificationPopup" v-if="!boxAcknowledged">
		<div id="notificationBox" v-if="!boxAcknowledged" >To function properly, this website stores some essential information in the browser's local storage.</div>
		<button id="notificationButton" v-if="!boxAcknowledged" v-on:click="notificationButtonClicked()">Okay</button>
		</div>
		<div class="snackbar" id="snackbar1">Incorrect Password</div>
		<div class="snackbar" id="snackbar2">User Not Found</div>
		<div class="snackbar" id="snackbar3">Please enter a valid username or password.</div>
	</div>
</template>

<script>

export default {
	name: 'LoginPage',
	components: {
		
	},
	props: {
		
	},
	data () {
		return {
			userNameInput:"",
			passwordInput:"",
			boxAcknowledged:false
		};
	},
	methods: {
		notificationButtonClicked(){
			this.boxAcknowledged=true;
		},
		async logIn () {
			if (this.userNameInput == "" || this.passwordInput == "") {
				this.showSnackBar("snackbar3");
				this.clearLogInInputs();
				return;
			}
			this.clearLogInInputs();
			this.$router.push({ path: '/welcome/' });
		},
		showSnackBar(snackBarNum) {
			// Get the snackbar DIV
			var x = document.getElementById(snackBarNum);
			// Add the "show" class to DIV
			x.classList.add("show");
			// After 3 seconds, remove the show class from DIV
			setTimeout(function(){ x.classList.remove("show"); }, 3000);
		},
		clearLogInInputs(){
			this.userNameInput = "";
			this.passwordInput = "";
		}
	}
}
</script>

<style scoped>
#loginPage_css {
	background-color:#afabd4;
	color:#010114;
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	min-height:100vh;
	/* this extends the background color when you scroll */
	overflow-y:auto; 
}

#notificationPopup{
	border:solid black;
	background-color:white;
	display:inline-flex;
	width:80%;
	max-width:30em;
	margin:auto;
	border-radius:8px;
}

#loginSignupDiv1 {
	margin:auto;
	padding: 0.7em 0em 0.7em 0em;
	margin-bottom: 0.5em;
}
</style>