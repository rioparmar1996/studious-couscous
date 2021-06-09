const app = Vue.createApp({
	data() {
		return {
			myName: "Ritesh",
			myAge: 24,
			urlName: "https://source.unsplash.com/collection/190727/1600x900",
		};
	},
	methods: {
		outputFiveAge() {
			const ageAfterFive = this.myAge + 5;
			return ageAfterFive;
		},
		outputRandomNumber() {
			const randNum = Math.random(0, 1);
			return randNum;
		},
	},
});
app.mount("#assignment");
