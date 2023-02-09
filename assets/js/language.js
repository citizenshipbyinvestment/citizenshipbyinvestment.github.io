(function($) {
  
const urlParams = new URLSearchParams(window.location.search);
const selectedLanguage = urlParams.get("lang") || "en";
const languageSelector = document.getElementById("language-selector");
const title = document.getElementById("title");

const messages = {
  en: "CITIZENSHIP",
  fr: "Citoyenneté",
  jp: "市民権",
};
  
languageSelector.value = selectedLanguage;
title.innerHTML = messages[selectedLanguage];

languageSelector.addEventListener("change", function(event) {
  const selectedLanguage = event.target.value;
  title.innerHTML = messages[selectedLanguage];
  window.location = `?lang=${event.target.value}`;
});
 
})(jQuery);
