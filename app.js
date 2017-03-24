var results = document.querySelector("#results");

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

  // a.) Write some code filter the data that starts with
  //      the provided prefix
  //
  // b.) Limit filtered to the first 10 words. Hint: lookup slice.

  renderWords(filtered);
}

// 1.) Select the "#searchWord" input element. Save it to a variable called searchWord.
// 2.) Listen for a keyup on searchWord.
// 3.) Log the value of searchWord on each keyup.
// 4.) If searchWord value has zero length renderEmpty
    // otherwise call filterWords with the value.


// What happens if you remove this?
renderEmpty();
