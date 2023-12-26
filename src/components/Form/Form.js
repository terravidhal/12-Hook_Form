import React, { useState } from  'react';
import PropTypes from 'prop-types';
import './Form.css';



const Form = () => {

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [PasswordConfirm, setPasswordConfirm] = useState("");  
    
    const createUser = (e) => {
      // we must prevent the default refresh of the browser to keep our state from being reset
      e.preventDefault();
      // shorthand ES6 syntax for building an object - see notes above
      const newUser = { Firstname, Lastname, email, password,PasswordConfirm }; // ici les clès ont les mêmes noms q ls valeurs
      console.log("Welcome", newUser);
      // clear Form
    	setFirstname("");
    	setLastname("");
    	setEmail("");
    	setPassword("");
    	setPasswordConfirm("");
    };
    
    return(
        <div className="Form">
          <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" value={Firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" value={Lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={PasswordConfirm} onChange={ (e) => setPasswordConfirm(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
          </form>
          <div className="form-data">
            <div className="firstname">Firstname: {Firstname}</div>
            <div className="lasttname">Lastname: {Lastname}</div>
            <div className="email">email: {email}</div>
            <div className="password">password: {password}</div>
            <div className="PasswordConfirm">PasswordConfirm: {PasswordConfirm}</div>
          </div>
        </div>
    );

};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
