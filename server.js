const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: "Home Page" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
