import React, {useState} from 'react'

function LoginForm({Login,error}){
    const [details, setDetails] = useState({name: "", email: "", password: ""})
    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }
    return (
        <form onSubmit={submitHandler} className='login-form'>
        <div className='form-inner'>
            <h1>User Login</h1>
            {(error !=="") ? (<div className='error'>{error}</div>): ""}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>

            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="emali" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>

            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>

            </div>

            <input className="btn" type="submit" value="LOGIN" />  

        </div>
        </form>
    )
}

export default LoginForm