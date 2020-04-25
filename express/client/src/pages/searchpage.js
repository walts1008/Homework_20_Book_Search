import React, {useState} from 'react';
import axios from 'axios'; 
function Searchpage() {
    const [searchTerm, setTerm]= useState('');
    let [booklist, setBooklist]= useState([]); 
     // function searchFunction (e) {e.preventDefault(); console.log (searchTerm) }
 const searchBooks = term => {
     return axios.get("https://www.googleapis.com/books/v1/volumes", {
         params:{
             q: term
         }
     })
 }

 function handleSubmit( event ) {

     event.preventDefault()
     searchBooks(searchTerm)
     .then (  //async portion
         (
             {
                 data: {items: booklist}
             }
         ) => {
          const thisBooklist = booklist.map(book => {
              return {
                  bookId: book.id, 
                  title: book.volumeInfo.title, 
                  authors: book.volumeInfo.authors,
                  description: book.volumeInfo.description, 
                //   image: book.volumeInfo.imageLinks.thumbnail, 

              }
          } )
           return setBooklist(thisBooklist);
         }
     )

 }

    function (smart)

    return (
        <div>
            <p>Google Books Search</p>
            <p>Enter the searched item below:</p>
            <button onClick = {handleSubmit}> Search Enumeration </button>
            <input onChange={e => {setTerm(e.target.value)}}></input>
          <div className = "container">
              {
                  booklist.map(book => {
                      return( 
                          <div>
                              {
                                  book.bookId

                              }
                              {
                                  book.title
                              }
                              {
                                  book.authors
                              }
                              {
                                  book.description
                              }
                              {
                                  book.image
                              }
                              <button onClick = {smart} >Saved Book</button>
                              </div>
                      )
                  })
              }
              
              
              </div>       
            

    
        </div>
    )
}

export default Searchpage;