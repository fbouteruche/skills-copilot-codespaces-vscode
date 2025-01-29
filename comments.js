// Create web server
const express = require('express');
const app = express();

// Use the comments router
const commentsRouter = require('./routes/comments');
app.use(commentsRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});