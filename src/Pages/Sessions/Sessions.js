import Header from "../../Components/Header/Header";
import Page from "../../Components/Page/Page";
import SessionsCatalogue from "../../Components/SessionsCatalogue/SessionsCatalogue";

export default function Sessions() {
  return (
    <Page hasFooter={true}>
      <Header />
      <SessionsCatalogue />
    </Page>
  );
}
