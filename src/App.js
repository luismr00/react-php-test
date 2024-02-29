import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [name, setName] = useState("");
	const [result, setResult] = useState("");

	const handleChange = (e) => {
		setName(e.target.value);
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/server.php", {
      name: name
    });

    if(res.data.success) {
      console.log("Posted data successfully");
      const n = res.data.success.name;
      setResult("Hello, " + n + ". The client and server communication was succesful.");
    } else {
      console.log("Failed to post data");
    }
  }

	return (
		<div className="App">
      <form onSubmit={handleSubmit}>
				<label>Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(event) =>
						handleChange(event)
					}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<h1>{result}</h1>
		</div>
	);
}

export default App;

