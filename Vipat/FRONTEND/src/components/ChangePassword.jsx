import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import MyBackgroundImage from '../images/background.jpg'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import linkedin from '../images/linkedlin.png'
import logo from '../images/vitlogo.png'
import { Link } from "react-scroll";
function ChangePassword(){
    const navigate = useNavigate()
    const uname = sessionStorage.getItem("uname")
    const [user,setUser]=useState({
        "userid":sessionStorage.getItem("userid"),
        "pwd":"",
        "old":"",
        "cpwd":""
    })
    const [errmsg,setErr]=useState(null)
    const [success,setSuccess]=useState(null)

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        console.log("info",user)
        axios.post("http://localhost:8080/api/users/changepwd",user)
        .then(resp=>{
            console.log(resp.data) 
            if(resp.data.status=='error'){
                setErr(resp.data.error)
                setSuccess(null)
            }else{
                setSuccess("Password updated successfully") 
                setErr(null)  
                setUser({
                    "userid":sessionStorage.getItem("userid"),
                    "pwd":"",
                    "old":"",
                    "cpwd":""
                })                            
            }
        })
        .catch(error=>{
            console.log("Error",error);
        }) 
    }
    const mycomponent =
    {
        backgroundSize: 'cover',
        backgroundImage: `url(${MyBackgroundImage})`,
    }
    const mycomponent2 =
    {
        backgroundSize: 'cover',
        backgroundColor: 'lightblue',
        padding: '0.32rem',
        height: '100%',
    }
    const mycomponent3 =
    {

        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1rem',

        borderRadius: '25px'
    }
    const mycomponent4 =
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity: '0.75',
        borderRadius: '25px'
    }

    return(
        <>
        <nav>
                <a href="#" className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <h1 className="p-2" style={mycomponent4}> WELCOME ! {uname}</h1>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><a onClick={e => navigate('/')} className='active'>Home</a></li>

                </ul>

            </nav>

        <div className="container-fluid" style={mycomponent}>
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-5 offset-2">
                    <div className="" style={mycomponent3}>
                        <div className="text-center p-2 m-4" style={mycomponent4}>
                            <h5>Change Password</h5>
                        </div>
                        <div className="">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 col-form-label p-2 "style={mycomponent4}>Current Password</label>
                                    <div className="col-sm-8">
                                    <input type="password" required name="old" value={user.old} onChange={handleInput} className="form-control"
                                        placeholder="Current Password"/>
                                    </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 col-form-label p-2"style={mycomponent4}>New Password</label>
                                    <div className="col-sm-8">
                                    <input type="password" required name="pwd" value={user.pwd} onChange={handleInput} className="form-control"
                                        placeholder="New Password"/>
                                        </div>
                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 col-form-label p-2"style={mycomponent4}>Confirm Password</label>
                                    <div className="col-sm-8">
                                    <input type="password" required name="cpwd" value={user.cpwd} onChange={handleInput} className="form-control"
                                        placeholder="Repeat Password"/>
                                        </div>
                                </div>
                                <input type="submit" value="Change Password" className="btn btn-primary float-right"/>
                            </form>  
                        </div>
                    </div>
                    {errmsg !=null ? (
                        <div className="alert text-danger text-center font-weight-bold">
                            {errmsg}
                        </div>
                    ): ''}
                    {success !=null ? (
                        <div className="alert text-success text-center font-weight-bold">
                            {success}
                        </div>
                    ): ''}
                </div>
            </div>
        </div>
        <footer style={mycomponent2} id='contact'>
        <h1 className="p-2" style={mycomponent4}>Always aim high!</h1>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
        <p className="p-2"><b>&copy; 2023 All rights reserved | Design & Developed By VIPAT Team</b></p>
            {/* <li><a href='https://www.facebook.com/VITCChennai/' target='_blank'><img src={fb} alt='logo'/></a></li>
            <li><a href='https://www.instagram.com/vit.chennai/' target='_blank'><img src={insta} alt='logo'/></a></li>
            <li><a href='https://twitter.com/ChennaiVit' target='_blank'><img src={twitter} alt='logo'/></a></li>
            <li><a href='https://www.youtube.com/c/VITChennaic' target='_blank'><img src={yt} alt='logo'/></a></li>
            <li><a href='https://www.linkedin.com/company/vitchennai' target='_blank'><img src={linkedin} alt='logo'/></a></li> */}
        </ul>
        
    </footer>
        </>
    )
}

export default ChangePassword;