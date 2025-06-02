const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://1cinevood.online/");
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
