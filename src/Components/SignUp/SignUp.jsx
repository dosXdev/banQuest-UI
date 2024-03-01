import React , {useState} from 'react'
import axios from 'axios'

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")


    const AddUserDetails = async () => {
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

    

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input onChange={(e)=>  setName(e.target.value)} name='name' value={name}  placeholder='Name'  type='text' ></input>
                <input onChange={(e)=>  setEmail(e.target.value)} name='email' value={email}  placeholder='Email'  type='text'></input>
                <input onChange={(e)=>  setPhoneNumber(e.target.value)} name='phoneNumber' value={phoneNumber}  placeholder='Phone Number'  type='number'></input>
                <input onChange={(e)=>  setPassword(e.target.value)} name='password' value={password}  placeholder='Password'  type='password'></input>
                <input onChange={(e)=>  setLocation(e.target.value)} name='location' value={location}  placeholder='Location'  type='location'></input>
                <button onClick={AddUserDetails}>Submit</button>
            </form>
        </div>  
    )
}

export default SignUp