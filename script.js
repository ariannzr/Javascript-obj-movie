const films = [
  { title: "God fother", releaseDate: "2024-05-25" },
  { title: "Hobit", releaseDate: "2023-11-15" },
  { title: "Leon", releaseDate: "2024-01-20" },
];
films.sort((a, b) => {
  const FristDate = new Date(a.releaseDate);
  const secoundDate = new Date(b.releaseDate);

  return FristDate - secoundDate;
});
console.log("Sorted films by release date:");
films.forEach((film) => {
  console.log(`${film.title} - Release Date: ${film.releaseDate}`);
});
