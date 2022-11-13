var apisList = [
  {
    name: "publicapis",
    url: "https://api.publicapis.org/entries",
    description: "Get list of public apis.",
  },
  {
    name: "Cat Facts",
    url: "https://catfact.ninja/fact",
    description: "Get random cat facts via text message every day.",
  },
  {
    name: "CoinDesk",
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    description: "View the Bitcoin Price Index (BPI) in real-time.",
  },
  {
    name: "Bored?",
    url: "https://www.boredapi.com/api/activity",
    description:
      "Find something to do by getting suggestions for random activities.",
  },
  {
    name: "Agify.io",
    url: "https://api.agify.io?name=alain",
    description: "Predict the age of a person based on their name.",
  },
  {
    name: "Genderize.io",
    url: "https://api.genderize.io?name=alain",
    description: "Predict the gender of a person based on their name.",
  },
  {
    name: "Nationalize.io",
    url: "https://api.nationalize.io?name=alain",
    description: "Predict the nationality of a person based on their name.",
  },
  {
    name: "Data USA",
    url: "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
    description: "Get US public data (e.g., population data, etc.).",
  },
  {
    name: "Dogs",
    url: "https://dog.ceo/api/breeds/image/random",
    description: "Cheer yourself up with random dog images.",
  },
  {
    name: "IPify",
    url: "https://api.ipify.org?format=json",
    description: "Get your current IP address.",
  },
  {
    name: "IPinfo",
    url: "https://ipinfo.io/161.185.160.93/geo",
    description: "Get information about a specified IP address",
  },
  {
    name: "Jokes",
    url: "https://official-joke-api.appspot.com/random_joke",
    description: "Get random jokes",
  },
  {
    name: "Random User",
    url: "https://randomuser.me/api/",
    description: "Get a random fake user info.",
  },
  {
    name: "Universities List",
    url: "http://universities.hipolabs.com/search?country=Rwanda",
    description: "Get a list of universities in a specified country.",
  },
  {
    name: "Zippopotam",
    url: "https://api.zippopotam.us/us/33162",
    description: "Get information about a specified ZIP code.",
  },
];

export default apisList;
