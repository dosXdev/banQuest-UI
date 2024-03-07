import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {

    const [email, checkEmail] = useState("")
    const [password, checkPassword] = useState("")

    function getCookie(name) {
        let cookieValue = null;
    
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
    
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    
                    break;
                }
            }
        }
    
        return cookieValue;
    }
    
    const CSRFTOKEN = () => {
        // set csrf token cookie
        axios.get('http://localhost:8000/api/set_csrf_token/');
        const csrftoken = getCookie('XSRF-TOKEN');
        console.log('CSFR Token in CSRFTOKEN:', csrftoken);
        return (
            <input name="csrfmiddlewaretoken" value={csrftoken} type="hidden" />
        );
    };
    const navigate = useNavigate(); 

    const handleSignInClick = (e) => {
        e.preventDefault()
        navigate('/SignUp'); 
    };

    const CheckUserDetails = async () => {
    
        let formData = new FormData()

        formData.append('user_email', email)
        formData.append('password', password)

        try {
            const csrftoken = getCookie('XSRF-TOKEN');
            await axios.post(
                'http://localhost:8000/api/test/signin/',
                formData, 
                {
                    withCredentials: true,
                    headers: {
                        'X-CSRFTOKEN': csrftoken
                    }
                },
            );
        } catch (error) {
            console.error('Error submitting user login details:', error);
        }

        // await axios.post({
        //     method: 'post',
        //     url: 'api/test/login/',
        //     data: formData
        // }).then((response) =>{
        //     console.log(response.status)
        // })
    }


    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>Sign In</h1>
                </div>
                <div className="formBox">
                    <form>
                        <CSRFTOKEN />
                        <input onChange={(e)=>  checkEmail(e.target.value)} name='email' value={email}  placeholder='Email'  type='text'></input>
                        <input onChange={(e)=>  checkPassword(e.target.value)} name='password' value={password}  placeholder='Password'  type='password'></input>
                        <section className="formButton">
                        <button className="submitButton" onClick={handleSignInClick}>Create Account</button>
                            <button className="submitButton" onClick={CheckUserDetails}>Submit</button>
                        </section>    
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn