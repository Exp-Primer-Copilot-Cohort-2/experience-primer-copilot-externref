// Create web server 
// Create a route for POST /comments
// Parse the JSON body
// Create a new comment object with the following properties:
// id: number, unique identifier
// username: string, the username of the commenter
// comment: string, the comment
// timestamp: string, the current date and time
// Add the comment to the comments array
// Send the comment object as a JSON response

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    const commentObject = {
        id: comments.length + 1,
        username,
        comment,
        timestamp: new Date().toString()
    };
    comments.push(commentObject);
    res.json(commentObject);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





