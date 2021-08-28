const btn = document.getElementById("form");
btn.addEventListener("submit", loadJokes);

// function to get jokes and add to list
function displayJokes(jokes) {
  let output = "";
  jokes.forEach((element) => {
    output += `<li>${element.joke}<hr/></li>`;
  });
  const jokesList = document.getElementById("Output");

  jokesList.innerHTML = output;
}

function loadJokes(e) {
  e.preventDefault();
  let numberJokes = "";

  numberJokes = Number(document.getElementById("no-jokes").value);

  if (numberJokes === 0) {
    alert("PLZ enter Number Above Zero");
    document.getElementById("no-jokes").focus();
    return;
  }

  fetch(`http://api.icndb.com/jokes/random/${numberJokes}`)
    .then((res) => res.json())
    .then((data) => (res = displayJokes(data.value)));
}
