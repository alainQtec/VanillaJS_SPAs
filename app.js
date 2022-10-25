import express from "express";
import path from "path";

const app = express();
app.use("/static", express.static(path.resolve("frontend", "static")));
const port = process.env.PORT || 5000;
app.get("/*", (req, res) => {
  console.log("Request_url:", req.url);
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(port, () => console.log("server Running at port", `${port}`));
