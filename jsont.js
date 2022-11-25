function getFact() {
  try {
    var fact = fetch(`https://catfact.ninja/fact`).then((response) =>
      response.json()
    );
    return fact;
  } catch (e) {
    console.log("Error:", e);
    return;
  }
}

console.log(getFact());
