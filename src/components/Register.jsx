import { useState } from "react"
import { registerUser } from "../API";


export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

        console.log({username, password});
        // authenticate();
     try {
        const { successMessage, error } = await registerUser({ username, password });

        if (successMessage) {
            console.log(successMessage);

        } else if (error) {
            console.error(error);
        }
        

    } catch (error) {
        console.error(error);
    }
}

    // function resetForm() {
    //     setUsername("");
    //     setPassword("");
    // }

    return (
        <div id="form">
        <form onSubmit={handleSubmit}>
           <h3>sign up</h3> 
           <label>username:</label>
           <input
           value={username}
           onChange={(e) => {
            setUsername(e.target.value);
           }}
           /> {" "}
           <br />
           <label>password:</label>
           <input
           type="password"
           value={password}
           onChange={(e) => {
            setPassword(e.target.value);
           }}
           /> {" "}
           <br />
           
           <button type="submit">submit</button>
        </form>
        </div>
    );
    }