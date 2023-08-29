import { useState } from "react";
import Authenticate from "./Authenticate";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const result = await response.json();
    //   setToken(result.data.token); // Update the token state
    console.log(result);
    // return result
    navigate("/posts");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>
          <p>Username: {""}</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password: {""}</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <Authenticate token={token} setToken={setToken}/>
      </div>
    </div>
  );
}