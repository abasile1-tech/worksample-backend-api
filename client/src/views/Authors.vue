<template>
<div>
  <h1>Here is the list of authors:</h1>
	<div :key="author" v-for="(author) in this.authorsObjectList">
		{{author.name}} 
		<br><br>
		{{author.biography}}
		<br><br>
	</div>
</div>
</template>

<script>
import axios from 'axios';
const urlAuthors = 'http://localhost:5000/api/authors';

export default {
	name: 'Authors',
	components: {
		
	},
	props: {
	
	},
	data () {
		return {
			authorsObjectList:[]
		}
	},
	methods: {

  },
  async created() {
    const response = await axios.get(urlAuthors); 
		this.authorsObjectList = response.data;
  }
}
</script>

<style scoped>


</style>
