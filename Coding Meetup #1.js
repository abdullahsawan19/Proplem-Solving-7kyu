function countDevelopers(list) {
  return list
    .filter((dev) => dev.language === "JavaScript")
    .filter((dev) => dev.continent === "Europe").length;
}

function countDevelopers(list) {
  return list.filter(
    (x) => x.continent == "Europe" && x.language == "JavaScript"
  ).length;
}

console.log(
  countDevelopers([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    {
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS",
    },
  ])
);
