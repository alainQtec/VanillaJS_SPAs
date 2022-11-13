import express from "express";
import path from "path";

const port = process.env.PORT || 5000;

const app = express();
app.use("/frontend", express.static(path.resolve("frontend")));
app.get("/*", (req, res) => {
  console.log("Request_url:", req.url);
  res.sendFile(path.resolve("frontend", "index.html"));
});

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

app.listen(port, () => console.log("Server Running at port", `${port}`));
