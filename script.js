const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
const copyBtn = document.querySelector("#copyBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);

  const data = await response.json();

  jokeEl.innerHTML = data.joke;
}

copyBtn.addEventListener("click", copyJoke);

function copyJoke() {
  navigator.clipboard.writeText(jokeEl.innerText);
}
