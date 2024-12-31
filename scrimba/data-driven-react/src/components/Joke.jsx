/* eslint-disable react/prop-types */
export const Joke = (props) => {
  console.log(props);
  return (
    <>
      {/* Short circuit  */}
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p className="punchline">Punchline: {props.punchline}</p>
      <hr />
    </>
  );
};
