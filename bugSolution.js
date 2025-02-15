const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    // Check if response is already sent
    if (res.headersSent) {
      console.error('Response already sent. Error will be ignored.');
      return;
    }
    try {
      res.send('Hello World!');
    } catch (error) {
      console.error('Error sending response:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 100);
});
app.listen(3000, () => console.log('Server listening on port 3000'));