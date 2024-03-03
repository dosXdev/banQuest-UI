import React , {useState} from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [confirmPassword, checkPassword] = useState("")


    const AddUserDetails = async () => {

        if(password !== confirmPassword && password.length < 6 && checkPassword.length < 6)
        {
            alert("Confirmed password didn't match")
        }
        else
        {
            let formData = new FormData()

            formData.append('user_name', name)
            formData.append('user_email', email)
            formData.append('user_phone', phoneNumber)
            formData.append('password', password)
            formData.append('location', location)
            
            await axios.post({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/users/create/',
                data: formData
            }).then((response) =>{
                console.log(response.status)
            })
        }
        

    }

    

    return (
        <>
            <div class="container">
                <div className="heading">
                    <h1>Sign Up</h1>
                </div>
                <div class="formBox">
                    <form>
                        <input onChange={(e)=>  setName(e.target.value)} name='name' value={name}  placeholder='Name'  type='text' ></input>
                        <input onChange={(e)=>  setEmail(e.target.value)} name='email' value={email}  placeholder='Email'  type='text'></input>
                        <input onChange={(e)=>  setPhoneNumber(e.target.value)} name='phoneNumber' value={phoneNumber}  placeholder='Phone Number'  type='number'></input>
                        <input onChange={(e)=>  setPassword(e.target.value)} name='password' value={password}  placeholder='Password'  type='password'></input>
                        <input onChange={(e)=>  checkPassword(e.target.value)} name='confirmPassword' value={confirmPassword}  placeholder='Confirm Password'  type='password'></input>
                        <input onChange={(e)=>  setLocation(e.target.value)} name='location' value={location}  placeholder='Location'  type='location'></input>
                        <button onClick={AddUserDetails}>Submit</button>
                    </form>
                </div>
            </div>
        </>  
    )
}

export default SignUp