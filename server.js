const express = require('express');
const path = require('path');
const db = require('./server/config/connection');
const routes = require("")

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

  
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    })
})