import React, {useState}from 'react'
import {connect} from "react-redux"
import {login} from "../actions/auth"
import {Redirect} from "react-router-dom"
import PropTypes from "prop-types"
function Login({login, isAuthenticated, isStudent}) {
    const [user, setUser]=useState({
        username:"",
        password:""
    })

    const {username, password}=user

    const loginChange=(e)=>setUser({...user, [e.target.name]:e.target.value})
     const handleLoginSubmit=(e)=>{
         e.preventDefault();
         login({username, password})
     }
    
     if (isAuthenticated && isStudent){
        return <Redirect to="/student/dashboard" />
    }else if(isAuthenticated && !isStudent){
        return<Redirect to="/tm/dashboard" />
    }else{  
    return (
        <div className='container mb-5'>
            
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                <h2>Sign In</h2>
                    <form onSubmit={(e)=>handleLoginSubmit(e)}>
                    <div className="form-group mb-3">
                        <label>Username</label>
                        <input type="text" 
                        className="form-control"
                        onChange={ e =>loginChange(e)} 
                        placeholder="username..." 
                        name="username"  value={username}/>
                    </div>
                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input type="text" 
                        className="form-control"
                        onChange={ e =>loginChange(e)} 
                        placeholder="username..." 
                        name="password"  value={password}/>
                    </div>
                    <button className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
    }
}

Login.propTypes={
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isStudent:PropTypes.bool
}

const mapStateToProps =state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isStudent:state.auth.isStudent
})

export default connect(mapStateToProps, {login})(Login)
