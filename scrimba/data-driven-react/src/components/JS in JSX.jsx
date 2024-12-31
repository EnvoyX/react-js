export const SomeDate = () => {
  const firstName = `Joe`;
  const lastName = "Schmoe";
  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }
  return (
    <>
      <h1>
        {/* JS Inside JSX */}
        Hello {firstName} {lastName}, welcome to React!
      </h1>
      <h2>Good {timeOfDay}</h2>
      <h2>
        It is currently {new Date().getHours()}:{new Date().getMinutes()}{" "}
        o`clock
      </h2>
      <h3>
        Today&apos;s date is {new Date().getMonth() + 1}/{new Date().getDate()}/
        {new Date().getFullYear()}
      </h3>
    </>
  );
};
