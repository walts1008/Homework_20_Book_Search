var mongoose = require ('mongoose'); 

const {Schema} = mongoose ;  //array desctruturing

const savedSchema = new Schema ({
    bookId: {
    type: String
    },
    title: {
        type: String

    },
    authors:{
        type: Array
    },
    description: {
        type: String
    },
    image: {
        type: String
    
    },
    link: {
        type: String
    },
})


const Book = mongoose.model("book", savedSchema); 
module.exports = Book;