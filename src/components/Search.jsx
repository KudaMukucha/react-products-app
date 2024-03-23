import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/results/" + input);
    console.log(input);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search products ..."
        value={input}
      />
    </form>
  );
}
