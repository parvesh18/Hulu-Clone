import Thumbnail from "./Thumbnail";

export default function Results({ data }) {
  return (
    <main className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center overflow-hidden">
      {data.map((result) => (
        <Thumbnail key={result.key} result={result} />
      ))}
    </main>
  );
}
