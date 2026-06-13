const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// 📦 ORDER ROUTE (THIS IS IMPORTANT)
app.post("/order", (req, res) => {
  const order = req.body;

  console.log("NEW ORDER RECEIVED:");
  console.log(order);

  res.json({
    message: "Order received successfully",
    status: "success",
  });
 });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});