const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			userClasses: true,
			userChoice: "",
		};
	},

	computed: {
		paragrahClass() {
			return {
				user1: this.userInput === "user1",
				user2: this.userInput === "user2",
				hidden: !this.userClasses,
				visible: this.userClasses,
			};
		},
	},

	methods: {
		addUser(event) {
			this.userInput = event.target.value;
		},
		addClasses() {
			this.userClasses = !this.userClasses;
		},
	},
});

app.mount("#assignment");
