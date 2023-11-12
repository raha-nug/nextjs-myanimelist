import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./lib/api-lib";

const Page = async () => {
const topAnime = await getAnimeResponse('top/anime','limit=8')

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
