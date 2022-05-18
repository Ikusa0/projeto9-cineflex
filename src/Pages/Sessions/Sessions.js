import "./sessions.css";
import Header from "../../Components/Header/Header";
import SessionsCatalogue from "../../Components/SessionsCatalogue/SessionsCatalogue";

export default function Sessions() {
  return (
    <div className="sessions">
      <Header />
      <SessionsCatalogue />
    </div>
  );
}
