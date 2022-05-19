import Header from "../../Components/Header/Header";
import MovieCatalogue from "../../Components/MovieCatalogue/MovieCatalogue";
import Page from "../../Components/Page/Page";

export default function Home() {
  return (
    <Page>
      <Header />
      <MovieCatalogue />
    </Page>
  );
}
