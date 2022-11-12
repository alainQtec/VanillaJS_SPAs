import DashBoard from "./views/DashBoard";

const router = async () => {
  const routes = [
    { path: "/", view: () => DashBoard },
    { path: "/posts", view: () => console.log(`viewing Posts`) },
    { path: "/settings", view: () => console.log(`viewing settings`) },
  ];
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((pMatch) => pMatch.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();

  console.log(match.route.view());
};

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
