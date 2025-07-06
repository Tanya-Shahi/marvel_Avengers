const characters = {
  "Iron Man": {
    info: "Tony Stark, a billionaire genius in a high-tech suit.",
    movies: [
      { title: "Iron Man", link: "https://www.youtube.com/embed/8ugaeA-nMTc" },
      { title: "Avengers: Endgame", link: "https://www.youtube.com/embed/TcMBFSGVi1c" }
    ]
  },
  "Thor": {
    info: "God of Thunder and prince of Asgard.",
    movies: [
      { title: "Thor: Ragnarok", link: "https://www.youtube.com/embed/ue80QwXMRHg" },
      { title: "Avengers: Endgame", link: "https://www.youtube.com/embed/TcMBFSGVi1c" }
    ]
  },
  "Spider-Man": {
    info: "Peter Parker, a teenager with spider-like abilities.",
    movies: [
      { title: "Spider-Man: No Way Home", link: "https://www.youtube.com/embed/JfVOs4VSpmA" },
      { title: "Avengers: Infinity War", link: "https://www.youtube.com/embed/6ZfuNTqbHE8" }
    ]
  },
  "Black Widow": {
    info: "Peter Parker, a teenager with spider-like abilities.",
    movies: [
      { title: "Spider-Man: No Way Home", link: "https://www.youtube.com/embed/JfVOs4VSpmA" },
      { title: "Avengers: Infinity War", link: "https://www.youtube.com/embed/6ZfuNTqbHE8" }
    ]
  },
  "Captain America": {
    info: "Peter Parker, a teenager with spider-like abilities.",
    movies: [
      { title: "Spider-Man: No Way Home", link: "https://www.youtube.com/embed/JfVOs4VSpmA" },
      { title: "Avengers: Infinity War", link: "https://www.youtube.com/embed/6ZfuNTqbHE8" }
    ]
  },
  "Scarlet Witch": {
    info: "Peter Parker, a teenager with spider-like abilities.",
    movies: [
      { title: "Spider-Man: No Way Home", link: "https://www.youtube.com/embed/JfVOs4VSpmA" },
      { title: "Avengers: Infinity War", link: "https://www.youtube.com/embed/6ZfuNTqbHE8" }
    ]
  }
};

// Render all movie cards
window.onload = () => {
  const movieGrid = document.getElementById("movieGrid");
  let allMovies = [];
  Object.values(characters).forEach(char => allMovies.push(...char.movies));
  allMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <iframe src="${movie.link}" frameborder="0" allowfullscreen></iframe>
      <p>${movie.title}</p>`;
    movieGrid.appendChild(card);
  });

  // Create character buttons
  const charButtons = document.getElementById("characterButtons");
  Object.keys(characters).forEach(name => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.addEventListener("mouseenter", () => showCharacter(name));
    charButtons.appendChild(btn);
  });
};

function showCharacter(name) {
  const infoBox = document.getElementById("characterInfo");
  const movieBox = document.getElementById("characterMovies");
  const character = characters[name];

  infoBox.textContent = `${name}: ${character.info}`;
  movieBox.innerHTML = "";
  character.movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <iframe src="${movie.link}" frameborder="0" allowfullscreen></iframe>
      <p>${movie.title}</p>`;
    movieBox.appendChild(card);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
const images = [
  'https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a364ee04-6380-4393-a551-2199250f57bf/dbtspza-04318586-4f6e-4363-b1b9-b9f285b1d475.jpg/v1/fill/w_1024,h_626,q_75,strp/the_avengers___wallpaper_by_daviddv1202_dbtspza-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI2IiwicGF0aCI6IlwvZlwvYTM2NGVlMDQtNjM4MC00MzkzLWE1NTEtMjE5OTI1MGY1N2JmXC9kYnRzcHphLTA0MzE4NTg2LTRmNmUtNDM2My1iMWI5LWI5ZjI4NWIxZDQ3NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D1AUjxXBzPIp_-Wq458tK5qIbcHjfuIW0C7sBpyYNx4',
  'https://m.media-amazon.com/images/I/71QcIKHlf4L.jpg',
  'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

let index = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}, 5000); // every 5 seconds
