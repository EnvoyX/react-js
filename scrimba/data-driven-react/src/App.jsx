import { Test } from "./components/JS in JSX";
import whiskerson from "./images/mr-whiskerson.png";
import fluffykins from "./images/fluffykins.png";
import felix from "./images/felix.png";
import pumpkin from "./images/pumpkin.png";
import { Contact } from "./components/Contact";
import "./App.css";

/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

function App() {
  return (
    <div className="contacts">
      <Contact
        name={"Mr. Whiskerson"}
        phoneNumber={"(212) 555-1234"}
        email={"mr.whiskaz@catnap.meow"}
        imgCat={whiskerson}
      ></Contact>
      <Contact
        name={"Fluffykins"}
        phoneNumber={"(212) 555-2345"}
        email={"fluff@me.com"}
        imgCat={fluffykins}
      ></Contact>
      <Contact
        name={"Felix"}
        phoneNumber={"(212) 555-4567"}
        email={"thecat@hotmail.com"}
        imgCat={felix}
      ></Contact>
      <Contact
        name={"Pumpkin"}
        phoneNumber={"(0800) CAT KING"}
        email={"pumpkin@scrimba.com"}
        imgCat={pumpkin}
      ></Contact>
    </div>
  );
}

export default App;
