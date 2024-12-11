/* eslint-disable react/prop-types */
const MyButton = ({ clicked }) => {
  return (
    <div>
      {/* Binding Data in React */}
      <button onClick={() => clicked()}>Click Me Bro</button>
    </div>
  );
};

export default MyButton;
