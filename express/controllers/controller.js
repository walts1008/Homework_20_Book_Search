const Book  = require ('../models');

const savedBooks = ( req, res) => {  //api route is hit
    Book.find({

    })
    .then( data => res.json(data))    //request 
    .catch( error => res.json (error))


}




module.exports = {
    savedBooks
}