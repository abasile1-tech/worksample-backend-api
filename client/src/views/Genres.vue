<template>
<div>
  <div id="hamburgerMenu" v-on:click="hamburgerWasClicked">
		<img id="hamburgerImage" src="../assets/Hamburger_icon_small.svg.png" alt="MENU">
	</div>

	<div id=hamburgerDropdown v-if="hamburgerClicked">
		<button v-on:click="returnToLoginPage()">Log Out</button> <br>
		<button v-on:click="goToBooks()">Books</button> <br>
		<button v-on:click="goToAuthors()">Authors</button> <br>
	</div>

  <h1>Here is the list of genres:</h1>

	<div v-if="!modificationPressed">
		<button v-on:click="newGenre()">New Genre</button>
		<button v-on:click="editGenre()">Edit Genre</button>
		<button v-on:click="deleteGenre()">Delete Genre</button>
	</div>

	<div v-if="modificationPressed&&newGenrePressed">
		<input type="text" placeholder="Type the new genre name:"  v-model="genreNameInput" @keyup.enter="submitNewGenre()"/> 
		<button v-on:click="submitNewGenre()">Submit</button>
	</div>

	<div v-if="modificationPressed&&editGenrePressed">
		<input type="text" placeholder="Type the genre id:"  v-model="genreIdInput"/>  
		<input type="text" placeholder="Type the new genre name:"  v-model="genreNameInput" @keyup.enter="submitEditedGenre()"/> 
		<button v-on:click="submitEditedGenre()">Submit</button>
	</div>

		<div v-if="modificationPressed&&deleteGenrePressed">
		<input type="text" placeholder="Type the genre id:"  v-model="genreIdInput" @keyup.enter="submitDeletedGenre()"/> 
		<button v-on:click="submitDeletedGenre()">Submit</button>
	</div>
	<div :key="genre" v-for="(genre) in this.genresObjectList">
		id: {{genre.id}}
		<br><br>
		name: {{genre.name}} 
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
			genresObjectList:[],
			modificationPressed:false,
			newGenrePressed: false,
			editGenrePressed:false,
			deleteGenrePressed:false,
			genreNameInput:"",
			genreIdInput:"",
			hamburgerClicked:false
		}
	},
	methods: {
		async newGenre() {
			this.newGenrePressed = true;
			this.modificationPressed = true;
		},
		async editGenre() {
			this.editGenrePressed = true;
			this.modificationPressed = true;
		},
		async deleteGenre() {
			this.deleteGenrePressed = true;
			this.modificationPressed = true;
		},
		async submitNewGenre() {
			await axios.post(urlGenres,{name:this.genreNameInput});
			this.genreNameInput = "";
			this.newGenrePressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlGenres); 
			this.genresObjectList = response.data;
		},
		async submitEditedGenre() {
			await axios.put(urlGenres,{id:this.genreIdInput,name:this.genreNameInput});
			this.genreIdInput = "";
			this.genreNameInput = "";
			this.editGenrePressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlGenres); 
			this.genresObjectList = response.data;
		},
		async submitDeletedGenre() {
			await axios.delete(urlGenres+`/${this.genreIdInput}`);
			this.genreIdInput = "";
			this.deleteGenrePressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlGenres); 
			this.genresObjectList = response.data;
		},
		hamburgerWasClicked() {
			if (!this.hamburgerClicked){
				this.hamburgerClicked=true;
			} else {
				this.hamburgerClicked=false;
			}
		},
		returnToLoginPage(){
			this.$router.push({path: `/`});
		},
		goToBooks(){
			this.$router.push({path: `/books`});
		},
		goToAuthors(){
			this.$router.push({path: `/authors`});
		}
  },
  async created() {
    const response = await axios.get(urlGenres); 
		this.genresObjectList = response.data;
  }
}
</script>

<style scoped>


</style>
