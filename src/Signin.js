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