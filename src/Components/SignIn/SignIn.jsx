import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {

    const [email, checkEmail] = useState("")
    const [password, checkPassword] = useState("")

    const navigate = useNavigate(); 

    const handleSignInClick = () => {
        navigate('/SignUp'); 
    };

    const CheckUserDetails = async () => {
    
        let formData = new FormData()

        formData.append('user_email', email)
        formData.append('password', password)

        await axios.post({
            method: 'post',
            url: 'api/forms/user/signin/?user-deets=example',
            data: formData
        }).then((response) =>{
            console.log(response.status)
        })
    }


    return (
        <>
            <div class="container">
                <div className="heading">
                    <h1>Sign In</h1>
                </div>
                <div class="formBox">
                    <form>
                        <input onChange={(e)=>  checkEmail(e.target.value)} name='email' value={email}  placeholder='Email'  type='text'></input>
                        <input onChange={(e)=>  checkPassword(e.target.value)} name='password' value={password}  placeholder='Password'  type='password'></input>
                        <section class="formButton">
                        <button className="submitButton" onClick={handleSignInClick}>Create Account</button>
                            <button class="submitButton" onClick={CheckUserDetails}>Submit</button>
                        </section>    
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn