import express from "express";
import path from "path";
import routes from "./frontend/assets/js/routes.js";
if (process.browser) {
  console.log(process.browser && window.location.pathname);
}
return;

const port = process.env.PORT || 5000;
function route(event = window.event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  console.log(event.target);
  // routes.find()
}
function navigateTo(url) {
  history.pushState(null, null, url);
  route();
}

window.addEventListener("popstate", route);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    } else {
      console.log("ClikedonTarget:", e.target);
    }
  });
  route();
});

app.listen(port, () => console.log("Server Running at port", `${port}`));
