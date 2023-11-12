import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  // console.log(anime)

  return (
    <>
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See all" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
