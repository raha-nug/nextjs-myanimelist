import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/lib/api-lib";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomemdedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recomemdedAnime = { data: recomemdedAnime.slice(0, 8) };

  return (
    <>
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See all" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendations" />
        <AnimeList api={recomemdedAnime} />
      </section>
    </>
  );
};

export default Page;
