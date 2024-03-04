import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = 'XSRF-TOKEN'; // Set the default CSRF token cookie name
axios.defaults.xsrfHeaderName = 'X-CSRFToken'; // Set the default CSRF token header name

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    // const [csrfToken, setCsrfToken] = useState('');

    // const fetchCsrfToken = async () => {
    //     try {
    //         const response = await axios.get('http://127.0.0.1:8000/api/get_csrf_token/');
    //         setCsrfToken(response.data.csrfToken);
    //     } catch (error) {
    //         console.error('Failed to fetch CSRF token', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCsrfToken();
    // }, []);
    
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
        axios.get('http://localhost:8000/api/get_csrf_token/');
        const csrftoken = getCookie('XSRF-TOKEN');
        console.log('CSFR Token in CSRFTOKEN:', csrftoken);
        return (
            <input name="csrfmiddlewaretoken" value={csrftoken} type="hidden" />
        );
    };

    const AddUserDetails = async () => {
        const formData = new FormData();

        formData.append('user_name', name);
        formData.append('user_email', email);
        formData.append('user_phone', phoneNumber);
        formData.append('password', password);
        formData.append('location', location);

        try {
            const csrftoken = getCookie('XSRF-TOKEN');
            await axios.post(
                'http://localhost:8000/api/debug/users/signup/',
                formData, 
                {
                    withCredentials: true,
                    headers: {
                        'X-CSRFTOKEN': csrftoken
                    }
                },
            );
        } catch (error) {
            console.error('Error submitting user details:', error);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form method='POST'>
                <CSRFTOKEN />
                <input onChange={(e) => setName(e.target.value)} name='name' value={name} placeholder='Name' type='text' />
                <input onChange={(e) => setEmail(e.target.value)} name='email' value={email} placeholder='Email' type='email' />
                <input onChange={(e) => setPhoneNumber(e.target.value)} name='phoneNumber' value={phoneNumber} placeholder='Phone Number' type='tel' />
                <input onChange={(e) => setPassword(e.target.value)} name='password' value={password} placeholder='Password' type='password' />
                <input onChange={(e) => setLocation(e.target.value)} name='location' value={location} placeholder='Location' type='text' />
                <button type="button" onClick={AddUserDetails}>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;
