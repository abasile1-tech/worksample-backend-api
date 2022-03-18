<template>
<div>
  <h1>Welcome Administrator. Would you like to work with authors, books, or genres?</h1>
	<br>
	<button v-on:click="goAuthors">Authors</button>
	<button v-on:click="goBooks">Books</button>
	<button v-on:click="goGenres">Genres</button>
</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Welcome',
	components: {
		
	},
	props: {
	
	},
	data () {
		return {
			
		}
	},
	methods: {
		async goAuthors(){
			this.$router.push({ path: '/authors/' });
		},
		async goBooks(){
			this.$router.push({ path: '/books/' });
		},
		async goGenres(){
			this.$router.push({ path: '/genres/' });
		}
  },
  async created() {
    
  }
}
</script>

<style scoped>


</style>
