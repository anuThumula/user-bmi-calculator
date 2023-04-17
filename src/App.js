import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser=
    {
    email: "user@user.com",
    password: "user@123"

  }
  

  const [weight,setweight]=useState(0)
  const [height,setheight]=useState(0)
  const [bmi,setbmi]=useState("")
  const [message, setmessage]=useState("")

  let calcultionbmi = (event) => {
    event.preventDefault();
    if(weight===0 || height===0){
      alert("Invalid input")
    }else{
      let bmi=(weight/(height)*2)
      setbmi(bmi.toFixed(2))

      if(bmi<18.5){
        setmessage("You are Under Weight")
      }else if(bmi>=18.5 && bmi<24.9){
        setmessage("You are Healthy Weight")
      }else if(bmi>=25 && bmi<29.9){
        setmessage("You are Over Weight")
      }else{
        setmessage("You are Obese")
      }
    }
  }


  const [user,setUser]= useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login = details => {
    console.log(details);

    if (details.email===adminUser.email && details.password===adminUser.password){
      console.log("Logged")
      setUser({
        name: details.name,
        email:details.email
      })
    }else{
      console.log("Details do not match!!")
      setError("***Details do not match!!")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({name: "", email:""})
  }

  return(
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          
            <h2 className='heading'>Welcome, <span className='user-name'>{user.name}</span></h2>
            <div className='container'>
              <h2 className='heading2'>User BMI Calcultion</h2>

              <form onSubmit={calcultionbmi} className='bmi-cont'>
                <div className='bmi-weight'>
                  <label className='weight'>Weight(kgs)</label>
                  <br/>
                  <input className='input-cont' value={weight} onChange={(event) => setweight(event.target.value)}/>
                </div>

                <div className='bmi-height'>
                  <label className='height'>Height(feets)</label>
                  <br/>
                  <input className='input-cont' value={height} onChange={(event) => setheight(event.target.value)}/>
                </div>
                <button className='sub-btn' type="submit">Submit</button>
                

              </form>
              <div className='center'>
                <h3 className='result'>Your BMI is: {bmi}</h3>
                <p>{message}</p>
              </div>
            </div>

            <button onClick={Logout} className='logout-btn'>LOGOUT</button>
          
        </div>
      ) : (
        <LoginForm  Login={Login} error={error}/>
        )}
      
      
    </div>
  );
}

export default App;
