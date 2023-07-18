import requests from "@/utils/requests";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

async function movieList(genre) {
  const data = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const movieData = await data.json();
  return movieData;
}

export default async function Home({ searchParams }) {
  const data = await movieList(searchParams.genre);
  const movieData = data.results;

  return (
    <div>
      <Header />
      <Navbar />
      <Results data={movieData} />
    </div>
  );
}
