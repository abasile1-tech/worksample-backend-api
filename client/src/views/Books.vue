<template>
<div>
  <h1>Here is the list of books:</h1>
	<div :key="book" v-for="(book) in this.booksObjectList">
		id: {{book.id}}
		<br><br>
		title: {{book.title}} 
		<br><br>
		isbn: {{book.isbn}}
		<br><br>
		description: {{book.description}}
		<br><br>
	</div>
</div>
</template>

<script>
import axios from 'axios';
const urlBooks = 'http://localhost:5000/api/books';

export default {
	name: 'Books',
	components: {
		
	},
	props: {
	
	},
	data () {
		return {
			booksObjectList:[]
		}
	},
	methods: {

  },
  async created() {
    const response = await axios.get(urlBooks); 
		this.booksObjectList = response.data;
  }
}
</script>

<style scoped>


</style>
