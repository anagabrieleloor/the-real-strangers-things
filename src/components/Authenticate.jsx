import { useState } from "react";


const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(token);
      console.log(result);
      setSuccessMessage(`${result.data.username} is ${result.message}`);
      console.log();
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}

      {error && <p>{error}</p>}
      <button className="button" onClick={handleClick}>
        Authenticate Token
      </button>
    </>
  );
}