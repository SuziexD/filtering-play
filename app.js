var results, searchWord;

results = document.querySelector("#results");

function renderWords(words) {
  var wordDivs = words.map(function (word) {
    return "<div>" + word + "<div>";
  });

  results.innerHTML = wordDivs.join("");
}

function renderEmpty() {
  renderWords(["Please type a word..."]);
}

function filterWords(prefix) {
  var filtered;

  filtered = data
    .filter(function (word) { return word.startsWith(prefix); })
    .slice(0, 9);

  renderWords(filtered);
}

searchWord = document.querySelector("#searchWord");

searchWord.addEventListener("keyup", function () {
  if (searchWord.value.length === 0) {
    renderEmpty();
  } else {
    filterWords(searchWord.value);
  }
});

renderEmpty();
