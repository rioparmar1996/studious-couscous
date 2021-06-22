<template>
	<section>
		<form @submit.prevent="submitData">
			<input type="text" placeholder="Name" v-model="enteredname" />
			<input type="text" placeholder="Age" v-model="enteredage" />
			<button>Set User Data</button>
		</form>
	</section>
</template>

<script>
export default {
	emits: ["set-data"],
	data() {
		return {
			enteredname: "",
			enteredage: "",
		};
	},
	methods: {
		submitData() {
			this.$emit("set-data", this.enteredname, this.enteredage);
		},
	},
};
</script>

<style scoped>
section {
	margin: 2rem auto;
	max-width: 40rem;
	border-radius: 12px;
	border: 1px solid #ccc;
	padding: 1rem;
	text-align: center;
}
</style>
