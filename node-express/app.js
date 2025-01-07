const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
	res.render('index', { name: 'ss' });
});
app.get('/intro', (req, res) => {
	res.render('intro/index');
});

// API
app.get('/api/name', (req, res) => {
	res.json({ name: 'test' });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
