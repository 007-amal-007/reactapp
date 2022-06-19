// import { useState } from "react";
// import axios from 'axios';

// export function Signin(props){
//         const [loading,setLoading] = useState(false)
//         const [data, setData] = useState({
//           email: "",
//           password: ""
//         });
//         const[error,setError] = useState('')
//       // handle button click of login form
//   const handleLogin = () => {
//     console.log()
//     setError(null);
//     setLoading(true);

//     axios
//       .post("https://retoolapi.dev/B13laa/getusers?user_id=?&password=?", {
//         user_id: user_id.value,
//         password: password.value,
//       })
//       .then((response) => {
//         console.log(response)
//         setUserSession(response.data.token, response.data.user);
//         console.log(response)
//         setLoading(false);
//         setUserSession(response.data.token, response.data.user);
//         props.history.push("/employee");
//       })
//       .catch((error) => {
//         setLoading(false);
//         if (error.response.status === 401)
//           setError(error.response.data.message);
//         else setError("Something went wrong. Please try again later.");
//       });
//   };
 

//     return (
//         <div>
//           Login<br /><br />
//           <div>
//             Username<br />
//             <input type="text" {...user_id} autoComplete="new-password" />
//           </div>
//           <div style={{ marginTop: 10 }}>
//             Password<br />
//             <input type="password" {...password} autoComplete="new-password" />
//           </div>
//           {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//           <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin(user_id,password)} disabled={loading} /><br />
//         </div>
//       );  
// }
import React, { useEffect,useState } from "react";

const Signin = () => {

  const [users, SetUSsers] = useState([])

  useEffect(() =>{
    fetch('https://retoolapi.dev/B13laa/getusers?',)
    .then((res) => res.json())
    .then((result) =>{
        SetUSsers(result);
        console.log(result)
    });
},[]);



  const [user_id,setUser_id] = useState('')
  const [password,setPassword] = useState('')


  const postData = ()=>{
    console.log("userid = ",user_id)
    console.log("password = ",password)
    console.log(users)
    users.forEach(item =>{
      if(item.user_id === user_id && item.password === password){
        alert("alert success");
      }
    })
  }



  return (
    <div>
      <h1>Login Account</h1>
      <form>
        <label htmlFor="user_id">
          User ID
          <input
            type="text"
            name="user_id"
            onChange={(e) => setUser_id(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={postData}>Login</button>
      </form>
    </div>
  );
};
export default Signin