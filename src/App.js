// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Filename - App.js

import { useState } from "react";
import $ from "jquery";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [result, setResult] = useState("");

	const handleChange = (e) => {
		setName(e.target.value);
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const form = $(e.target);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: form.attr("action"),
	// 		data: form.serialize(),
	// 		success(data) {
	// 			setResult(data);
	// 		},
	// 	});
	// };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/server.php", {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'credentials': 'include'
      },
      body: JSON.stringify({
        first_name: "first name",
        last_name: "last name"
      })
    })
    // .then((response) => {
    //   console.log(response);
    // })
    // .then((data) => console.log(data))
  //   .then(resp => {
  //     console.log(resp);
  //     if(resp.ok){
  //         const err = new Error("Error response");
  //         err.resp = resp;
  //         throw err;
  //     }
  //     console.log("OK");
  //     // return resp.text();
  // }).catch(err => {
  //     console.error(err);
  // }).then(bodyUsed => {
  //     // document.getElementById('name').innerText = body;
  //     // console.log(data);
  //     setResult(bodyUsed);
  // });
    const data = await res.json();
    console.log(data);
    // if(data.success) {
    //   console.log("Data served successfully");
    // } else {
    //   console.log("Failed sending data: ", data.err);
    // }

  }


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const requestOptions = {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'React POST Request Example' })
//   };
//   const res = fetch('http://localhost:8000/server.php', requestOptions)
//         // .then(response => response.json());
//         // .then(data => console.log(data));

//   const data = await res.json();
//   if(data) {
//     console.log("success");
//   }

// }; 



	return (
		<div className="App">
			{/* <form
				action="http://localhost:8000/server.php"
				method="post"
				onSubmit={(event) => handleSubmit(event)}
			> */}
      <form onSubmit={handleSubmit}>
				<label htmlFor="name">Name: </label>
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

