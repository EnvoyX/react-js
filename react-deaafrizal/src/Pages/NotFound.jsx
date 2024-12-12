import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>PAGE NOT FOUND!</h1>
      <button onClick={() => navigate("/")}>BACK TO HOME</button>
    </>
  );
};
