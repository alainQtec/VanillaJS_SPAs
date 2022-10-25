const router = async () => {
  const routes = [
    { path: "/", view: () => console.log(`viewing dashboard`) },
    { path: "/posts", view: () => console.log(`viewing Posts`) },
    { path: "/settings", view: () => console.log(`viewing settings`) },
  ];
  // Test Each route for Potential match
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
  console.log(match);
};
document.addEventListener("DOMContentLoaded", () => {
  router();
});
