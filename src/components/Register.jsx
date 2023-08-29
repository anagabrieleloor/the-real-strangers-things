import { useState } from "react";
import { registerUser } from "../API";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await registerUser(username, password);

            if (response.success) {
                console.log(response.data.message);
            } else if (response.error) {
                console.error(response.error);
            }
            navigate("/posts");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id="home">
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}