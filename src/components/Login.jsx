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
    <div id="login">
      <form onSubmit={loginUser}>
        <h3>log in</h3>
        <label>Username:</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
       
        {/* <Authenticate token={token} setToken={setToken}/> */}
      </div>
    </div>
  );
}