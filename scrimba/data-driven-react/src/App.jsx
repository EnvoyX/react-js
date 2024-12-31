/* eslint-disable react/jsx-key */
import whiskerson from "./images/mr-whiskerson.png";
import fluffykins from "./images/fluffykins.png";
import felix from "./images/felix.png";
import pumpkin from "./images/pumpkin.png";
import { Contact } from "./components/Contact";
import { Joke } from "./components/Joke";
import jokesData from "./jokesData";
// import { SomeDate } from "./components/JS in JSX";
import "./App.css";

/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

function App() {
  const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];
  const jokeElements = jokesData.map((joke, i) => {
    return (
      <Joke key={i} setup={joke.question} punchline={joke.punchline}></Joke>
    );
  });
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
      <main>
        {/* <Joke
          setup={"I got my daughter a fridge for her birthday."}
          punchline={"I can't wait to see her face light up when she opens it."}
          isPun={true}
          comments={[
            { author: "123", text: "some comments", title: "some title" },
            { author: "679", text: "some comments", title: "some title" },
          ]}
        />
        <Joke
          setup={"How did the hacker escape the police?"}
          punchline={"He just ransomware!"}
          isPun={true}
          comments={[
            { author: "123", text: "some comments", title: "some title" },
            { author: "679", text: "some comments", title: "some title" },
          ]}
        />
        <Joke
          setup={"Why don't pirates travel on mountain roads?"}
          punchline={"Scurvy."}
          isPun={true}
          comments={[
            { author: "123", text: "some comments", title: "some title" },
            { author: "679", text: "some comments", title: "some title" },
          ]}
        />
        <Joke
          setup={"Why do bees stay in the hive in the winter?"}
          punchline={"Swarm."}
          isPun={true}
          comments={[
            { author: "123", text: "some comments", title: "some title" },
            { author: "679", text: "some comments", title: "some title" },
          ]}
        />
        <Joke
          setup={"What's the best thing about Switzerland?"}
          punchline={"I don't know, but the flag is a big plus!"}
          isPun={false}
        /> */}
        {jokeElements}
      </main>
      <article>
        {ninjaTurtles.map((ninja, i) => {
          return <h2 key={i}>{ninja}</h2>;
        })}
      </article>
      {/* <SomeDate></SomeDate> */}
    </div>
  );
}

export default App;
