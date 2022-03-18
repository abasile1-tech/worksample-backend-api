<template>
<div>
  <h1>Here is the list of genres:</h1>
	<div :key="genre" v-for="(genre) in this.genresObjectList">
		{{genre.name}} 
		<br><br>
	</div>
</div>
</template>

<script>
import axios from 'axios';
const urlGenres = 'http://localhost:5000/api/genres';

export default {
	name: 'Genres',
	components: {
		
	},
	props: {
	
	},
	data () {
		return {
			genresObjectList:[]
		}
	},
	methods: {

  },
  async created() {
    const response = await axios.get(urlGenres); 
		this.genresObjectList = response.data;
  }
}
</script>

<style scoped>


</style>
