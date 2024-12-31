import "./App.css";
import { Header } from "./components/Header";
import { Entry } from "./components/Entry";
import data from "./data";
import fuji from "./assets/photo-1589308078059-be1415eab4c3.jpg";
function App() {
  const entryElements = data.map((entry) => {
    return (
      // <Entry
      //   key={entry.id}
      //   image={entry.img}
      //   country={entry.country}
      //   googleMaps={entry.googleMapsLink}
      //   entryTitle={entry.title}
      //   entryDate={entry.dates}
      //   entryText={entry.text}
      // ></Entry>
      // OR
      // Pass in one object props "entry"
      // <Entry key={entry.id} entry={entry}></Entry>
      // OR
      // Pass in with spread object
      <Entry key={entry.id} {...entry}></Entry>
    );
  });
  return (
    <>
      <Header></Header>
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
