const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	watch: {
		counter() {
			const that = this;
			setTimeout(function () {
				that.counter = 0;
			}, 5000);
		},
	},
	computed: {
		calculate() {
			if (this.counter === 37) {
				return this.counter;
			} else if (this.counter === 0) {
				return "";
			} else if (this.counter > 37) {
				return "Too much";
			} else if (this.counter < 37) {
				return "Not there Yet";
			} else {
				return "Out of bound";
			}
		},
	},
	methods: {
		addFive(num) {
			this.counter = this.counter + num;
			console.log(this.counter);
		},
		addOne(num) {
			this.counter = this.counter + num;
			console.log(this.counter);
		},
	},
});

app.mount("#assignment");
