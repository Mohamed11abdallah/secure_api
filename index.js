const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
