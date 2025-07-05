require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Static list of sample headlines
const sampleHeadlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "{name}: The Go-To Place in {location} This Year",
  "Discover Why {name} is #1 in {location}",
  "{location}'s Hidden Gem: {name}",
  "Top Reasons to Visit {name} in {location} Today",
  "{name} is Taking {location} by Storm in 2025",
  "{location} Loves {name} - Here's Why!"
];

// Helper to pick random headline and replace placeholders
function generateHeadline(name, location) {
  const template = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
}


app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing name or location." });
  }

  const rating = (Math.random() * 1 + 4).toFixed(1); // 4.0 - 5.0
  const reviews = Math.floor(Math.random() * 200 + 20); // 20 - 220
  const headline = generateHeadline(name, location);

  return res.json({
    rating,
    reviews,
    headline
  });
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing name or location." });
  }

  const headline = generateHeadline(name, location);

  return res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
