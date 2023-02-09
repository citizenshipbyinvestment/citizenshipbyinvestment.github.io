const languageSelector = document.getElementById("language-selector");
const title = document.getElementById("title");

const messages = {
  en: "CITIZENSHIP",
  fr: "Citoyenneté",
  jp: "市民権",
};

languageSelector.addEventListener("change", function(event) {
  const selectedLanguage = event.target.value;
  title.innerHTML = messages[selectedLanguage];
});
