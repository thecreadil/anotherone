const API_TOKEN = "f11adb5f3496d19b0369e49bf7d64496";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// API/TMDBApi.js

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }