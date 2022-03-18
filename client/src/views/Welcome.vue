<template>
  <h1>Welcome Administrator. Would you like to work with authors, books, or genres?</h1>
</template>

<script>
import axios from 'axios';
const urlAuthors = 'http://localhost:5000/api/authors';

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

  },
  async created() {
    const response = await axios.get(urlAuthors); 
		console.log ("response.data: ", response.data);
  }
}
</script>

<style scoped>


</style>
