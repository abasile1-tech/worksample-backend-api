<template>
<div>
	<div id="hamburgerMenu" v-on:click="hamburgerWasClicked">
		<img id="hamburgerImage" src="../assets/Hamburger_icon_small.svg.png" alt="MENU">
	</div>

	<div id=hamburgerDropdown v-if="hamburgerClicked">
		<button v-on:click="returnToLoginPage()">Log Out</button> <br>
		<button v-on:click="goToAuthors()">Authors</button> <br>
		<button v-on:click="goToGenres()">Genres</button> <br>
	</div>

  <h1>Here is the list of books:</h1>

	<div v-if="!modificationPressed">
		<button v-on:click="newBook()">New Book</button>
		<button v-on:click="editBook()">Edit Book</button>
		<button v-on:click="deleteBook()">Delete Book</button>
	</div>

	<div v-if="modificationPressed&&newBookPressed">
		<input type="text" placeholder="Type the new book title:"  v-model="bookTitleInput"/> 
		<input type="text" placeholder="Type the new book isbn:"  v-model="bookIsbnInput"/>
		<input type="text" placeholder="Type the new book description:"  v-model="bookDescriptionInput" @keyup.enter="submitNewBook()"/> 
		<button v-on:click="submitNewBook()">Submit</button>
	</div>

	<div v-if="modificationPressed&&editBookPressed">
		<input type="text" placeholder="Type the book id:"  v-model="bookIdInput"/> 
		<input type="text" placeholder="Type the new book title:"  v-model="bookTitleInput"/> 
		<input type="text" placeholder="Type the new book isbn:"  v-model="bookIsbnInput"/> 
		<input type="text" placeholder="Type the new book description:"  v-model="bookDescriptionInput" @keyup.enter="submitEditedBook()"/> 
		<button v-on:click="submitEditedBook()">Submit</button>
	</div>

		<div v-if="modificationPressed&&deleteBookPressed">
		<input type="text" placeholder="Type the book id:"  v-model="bookIdInput" @keyup.enter="submitDeletedBook()"/> 
		<button v-on:click="submitDeletedBook()">Submit</button>
	</div>
  
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
			booksObjectList:[],
			modificationPressed:false,
			newBookPressed: false,
			editBookPressed:false,
			deleteBookPressed:false,
			bookTitleInput:"",
			bookIsbnInput:"",
			bookDescriptionInput:"",
			bookIdInput:"",
			hamburgerClicked:false
		}
	},
	methods: {
		async newBook() {
			this.newBookPressed = true;
			this.modificationPressed = true;
		},
		async editBook() {
			this.editBookPressed = true;
			this.modificationPressed = true;
		},
		async deleteBook() {
			this.deleteBookPressed = true;
			this.modificationPressed = true;
		},
		async submitNewBook() {
			await axios.post(urlBooks,{name:this.bookTitleInput, biography:this.bookIsbnInput, description:this.bookDescriptionInput});
			this.bookTitleInput = "";
			this.bookIsbnInput = "";
			this.bookDescriptionInput = "";
			this.newBookPressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlBooks); 
			this.booksObjectList = response.data;
		},
		async submitEditedBook() {
			await axios.put(urlBooks,{id:this.bookIdInput,name:this.bookTitleInput, biography:this.bookIsbnInput, description:this.bookDescriptionInput});
			this.bookIdInput = "";
			this.bookTitleInput = "";
			this.bookIsbnInput = "";
			this.bookDescriptionInput = "";
			this.editBookPressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlBooks); 
			this.booksObjectList = response.data;
		},
		async submitDeletedBook() {
			await axios.delete(urlBooks+`/${this.bookIdInput}`);
			this.bookIdInput = "";
			this.deleteBookPressed = false;
			this.modificationPressed = false;
			const response = await axios.get(urlBooks); 
			this.booksObjectList = response.data;
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
		goToAuthors(){
			this.$router.push({path: `/authors`});
		},
		goToGenres(){
			this.$router.push({path: `/genres`});
		}
  },
  async created() {
    const response = await axios.get(urlBooks); 
		this.booksObjectList = response.data;
  }
}
</script>

<style scoped>


</style>
