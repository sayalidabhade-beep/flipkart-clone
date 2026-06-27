







const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/products", async (req, res) => {
  try {
    const search = req.query.search || "";

    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${search}`
    );

    res.json(response.data.products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});