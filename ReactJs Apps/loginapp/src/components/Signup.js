import React,{ useState } from 'react';

const Signup = () => {
     //how to maintain state
     const[username,setUsername] = useState('');
     const[password,setPassword] = useState('');
     const[gender,setGender] = useState('');
     const[address,setAddress] = useState('');
     const[qualification,setQualification] = useState('');
 
     //business logic
     const SignupUser = (e) => {
        const Detais ={
            Username:username,
            password:password,
            gender:gender
        }
        e.preventDefault();
    } 
    return (
        <div>
            {
                 <center>
                 <h2>Welcome to Diet Signup!!!</h2>
                 <form onSubmit={SignupUser} method='post'>
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
                     <label>Enter Gender:</label>
                     <input type="radio"
                     name="gender" value="male"/>
                     <label>Male</label>
                     <input type="radio"
                     name="gender" value="female"/>
                     <label>Female</label><br></br><br></br>
                     <label>Enter Address:</label>
                     <textarea></textarea><br></br><br></br>
                     <label>Qualification:</label>
                     <select>
                        <option>select</option>
                        <option>B.Tech</option>
                        <option>M.Tech</option>
                        <option>MBA</option>
                     </select><br></br><br></br>
                     <input type='submit' value='Signup'/>
                 </form>
             </center>
            }
        </div>
    );
};

export default Signup;