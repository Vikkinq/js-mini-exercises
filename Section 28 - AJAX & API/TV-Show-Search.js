const form = document.querySelector("#search");
const searchInput = document.querySelector("#searchInput");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchText = searchInput.value;
  const req = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchText}`
  );
  console.log(req.data);
  generateImage(req.data);
});

const generateImage = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
