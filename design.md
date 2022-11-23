This is a the documentation for the Lord of the Rings SDK.

The built SDK should be imported into a test node.js file for testing purpose.

The SDK queries 6 Lord of the Rings url endpoints off the main endpoint 'https://the-one-api.dev/v2'.

      .get('${API_URL}/book')
      .get('${API_URL}/book/${id},{ headers: 'token $ {access_token}'}})
      .get('${API_URL}/movie,{ headers:{'Authorization': 'token $ {access_token}'}})
      .get('${API_URL}/movie/${id},{ headers:{'Authorization': 'token $ {access_token}'}})
      .get('${API_URL}/character,{ headers:{'Authorization': 'token $ {access_token}'}})
      .get('${API_URL}/character/${id},{ headers:{'Authorization': 'token $ {access_token}'}})


The function names in the SDK to be used for testing are getLordBooks,getLordOneBook,getLordMovies,
getLordOneMovie,getLordCharacters,getLordOneCharacter.


To test the SDK, create a clone from git, install axios, and then run npm install -y.  Go to the
https://the-one-api.dev/ and create a key.  Lastly, update the test.js file with your key and update it
to test the function that you want output for.

