import React, { useState } from 'react';

const Login = () => {

    //how to maintain state
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    //business logic
     const loginUser = (e) => {
        if((username==="admin")&&(password==="admin123"))
        {
            alert("login success");
        }
        else{
            alert("sorry boss..please enter correct details");
        }
        e.preventDefault();
     }
    return (
        <div>
            <center>
                <h2>Welcome to Diet login!!!</h2>
                <form onSubmit={loginUser} method='post'>
                    <label>Enter UserName:</label>
                    <input type='text' 
                    name='username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <label>Enter Password:</label>
                    <input type='password' 
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <input type='submit' value='Login'/>
                </form>
            </center>
        </div>
    );
};

export default Login;