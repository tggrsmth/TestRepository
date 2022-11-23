const lordapi = require('LordoftheRingsSDK')

lordapi.geLordBooks().then((books)=> {
   console.log(books.name);
});