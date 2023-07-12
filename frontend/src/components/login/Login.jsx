import React from 'react';
import './login.scss';

const InputBar= ({name})=>{
    return (
        <div className='input-element'>
            <label htmlFor="">{name}</label>
            <input type="text" placeholder={name} />
        </div>
    );
}

export default function Login() {
  return (
    <div className='login'>
        <form className='main'>
            <h1 className='item'>Login Now</h1>
            <InputBar name={"Email id"}/>        
            <InputBar name={"Password"}/> 
            <button className='btn'>Login</button>  
        </form>
    </div>
  )
}
