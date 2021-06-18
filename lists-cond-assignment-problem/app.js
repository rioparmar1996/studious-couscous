const app = Vue.createApp({
	data() {
		return {
			enteredTask: "",
			tasks: [],
			taskVisbility: true,
		};
	},
	computed: {
		btnCaption() {
			return this.taskVisbility ? "Hide" : "Show";
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredTask);
		},
		taskBtn() {
			this.taskVisbility = !this.taskVisbility;
		},
	},
});

app.mount("#assignment");
