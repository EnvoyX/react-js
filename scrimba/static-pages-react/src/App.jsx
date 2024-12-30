import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      {/* Parent */}
      <Page></Page>
    </>
  );
};

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Page() {
  return (
    <>
      {/* Child of Page components */}
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  );
}

export default App;

// Imperative Programming
// const h1 = document.createElement("h1");
// h1.textContent = "This is text content";
// h1.classList.add("header");
// document.getElementById("root").appendChild(h1);
