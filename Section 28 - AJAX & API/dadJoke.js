const genBtn = document.querySelector("#genBtn");
const jokeBox = document.querySelector("#jokeBox");

const getDadJoke = async () => {
  const configHeader = { headers: { Accept: "application/json" } };
  const req = await axios.get("https://icanhazdadjoke.com/", configHeader);
  console.log(req.data);
  jokeBox.textContent = req.data.joke;
};

genBtn.addEventListener("click", function () {
  console.log("Clicked");
  getDadJoke();
});
