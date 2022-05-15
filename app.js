const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const songsContainer = document.querySelector("#songs-container");
const prevAndNextContainer = document.querySelector("#prev-and-next-container");

const apiURL = `https://api.lyrics.ovh`;

const insertSongsIntoPage = songsInfo => {
    songsContainer.innerHTML = songsInfo.data.map()
}

const fetchSongs = async (term) => {
  const response = await fetch(`${apiURL}/suggest/${term}`);
  const data = await response.json();

  insertSongsIntoPage(data);
//   fetch(`${apiURL}/suggest/${term}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);
//     });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    songsContainer.innerHTML = `<li class="warning-message">Sorry, the content area wat not found</li>`;
    return;
  }

  fetchSongs(searchTerm);
});
