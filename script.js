const meaningContainer = document.querySelector(".meaning-container");
const infoText = document.querySelector(".info-text");
const searchBtn = document.getElementById("enter");
const inputEl = document.querySelector(".input");

const title = document.getElementById("title");
const meaning = document.getElementById("meaning");

async function getMeaning(word) {
  if (word === "" || word === null) {
    meaningContainer.style.display = "none";

    infoText.style.display = "block";
    infoText.innerHTML = "<strong>Enter a word</strong>";

    return;
  }

  try {
    meaningContainer.style.display = "none";
    infoText.textContent = `Searching the meaning of "${word}" `;

    const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const response = await fetch(apiURL);
    const data = await response.json();

    const definition = data[0].meanings[0].definitions[0].definition;
    // console.log(definition);

    // console.log(data);

    infoText.style.display = "none";
    meaningContainer.style.display = "block";

    title.textContent = word;
    meaning.textContent = definition;
  } catch (error) {
    // console.log(error);

    infoText.style.display = "block";

    infoText.innerHTML = "<strong>Not a valid word</strong>";
  }
}

searchBtn.addEventListener("click", () => {
  const searchText = inputEl.value;
//   console.log(searchText);

  getMeaning(searchText);
});
