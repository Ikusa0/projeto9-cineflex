import Page from "../../Components/Page/Page";
import SeatsCatalogue from "../../Components/SeatsCatalogue/SeatsCatalogue";
import Header from "../../Components/Header/Header";

export default function Seats() {
  return (
    <Page hasFooter={true}>
      <Header withIcon={true} />
      <SeatsCatalogue />
    </Page>
  );
}
