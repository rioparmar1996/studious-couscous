const app = Vue.createApp({
	data() {
		return {
			userInput1: "",
			userInput2: "",
		};
	},
	methods: {
		showAlert() {
			alert("You clicked Show Alert button");
		},
		showResult1(event) {
			this.userInput1 = event.target.value;
		},
		showResult2(event) {
			this.userInput2 = event.target.value;
		},
	},
});

app.mount("#assignment");
