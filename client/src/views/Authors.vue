<template>
<div>
  <h1>Here is the list of authors:</h1>

	<div v-if="!modificationPressed">
		<button v-on:click="newAuthor()">New Author</button>
		<button v-on:click="editAuthor()">Edit Author</button>
		<button v-on:click="deleteAuthor()">Delete Author</button>
	</div>

	<div v-if="modificationPressed&&newAuthorPressed">
		<input type="text" placeholder="Type the new author name:"  v-model="authorNameInput"/> 
		<input type="text" placeholder="Type the new author biography:"  v-model="authorBioInput" @keyup.enter="submitNewAuthor()"/> 
		<button v-on:click="submitNewAuthor()">Submit</button>
	</div>

	<div v-if="modificationPressed&&editAuthorPressed">
		<input type="text" placeholder="Type the author id:"  v-model="authorIdInput"/> 
		<input type="text" placeholder="Type the new author name:"  v-model="authorNameInput"/> 
		<input type="text" placeholder="Type the new author biography:"  v-model="authorBioInput" @keyup.enter="submitEditedAuthor()"/> 
		<button v-on:click="submitEditedAuthor()">Submit</button>
	</div>

		<div v-if="modificationPressed&&deleteAuthorPressed">
		<input type="text" placeholder="Type the author id:"  v-model="authorIdInput" @keyup.enter="submitDeletedAuthor()"/> 
		<button v-on:click="submitDeletedAuthor()">Submit</button>
	</div>

	<div :key="author" v-for="(author) in this.authorsObjectList">
		id: {{author.id}}
		<br><br>
		name: {{author.name}} 
		<br><br>
		biography: {{author.biography}}
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
			authorsObjectList:[],
			modificationPressed:false,
			newAuthorPressed: false,
			editAuthorPressed:false,
			deleteAuthorPressed:false,
			authorNameInput:"",
			authorBioInput:"",
			authorIdInput:""
		}
	},
	methods: {
		async newAuthor() {
			this.newAuthorPressed = true;
			this.modificationPressed = true;
		},
		async editAuthor() {
			this.editAuthorPressed = true;
			this.modificationPressed = true;
		},
		async deleteAuthor() {
			this.deleteAuthorPressed = true;
			this.modificationPressed = true;
		},
		async submitNewAuthor() {
			await axios.post(urlAuthors,{name:this.authorNameInput, biography:this.authorBioInput});
			this.authorNameInput = "";
			this.authorBioInput = "";
			this.newAuthorPressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlAuthors); 
			this.authorsObjectList = response.data;
		},
		async submitEditedAuthor() {
			await axios.put(urlAuthors,{id:this.authorIdInput,name:this.authorNameInput, biography:this.authorBioInput});
			this.authorIdInput = "";
			this.authorNameInput = "";
			this.authorBioInput = "";
			this.editAuthorPressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlAuthors); 
			this.authorsObjectList = response.data;
		},
		async submitDeletedAuthor() {
			await axios.delete(urlAuthors+`/${this.authorIdInput}`);
			this.authorIdInput = "";
			this.deleteAuthorPressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlAuthors); 
			this.authorsObjectList = response.data;
		}

  },
  async created() {
    const response = await axios.get(urlAuthors); 
		this.authorsObjectList = response.data;
  }
}
</script>

<style scoped>


</style>
