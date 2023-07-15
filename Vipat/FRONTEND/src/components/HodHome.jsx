import axios from "axios";
import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom"
function HodHome(){
    const cid=sessionStorage.getItem("id")
    const uname = sessionStorage.getItem("uname")
    const [hodInfo,setHodInfo]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8080/api/hod/"+cid)
        .then(resp=>{
            console.log("hod Info",resp.data.data)    
            setHodInfo(resp.data.data)             
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
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

        borderRadius: '25px'
    }
    const mycomponent4 =
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity: '0.85',
        borderRadius: '25px'
    }

    return (
        <>
        <nav>
                <a href="#" className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <h1 className="p-2" style={mycomponent4}>WELCOME! {uname}</h1>
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
                <div className="col-sm-6 p-3">
                    <div className="">
                        <div className="card-header m-2" style={mycomponent4}>
                            <h5>PROCTOR Profile</h5>
                        </div>
                        <div className="">
                        <table className="table table-borderless" style={mycomponent4}>
                            <tbody>
                                <tr>
                                    <th>PROCTOR Name</th>
                                    <th>{hodInfo?.name}</th>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <th>{hodInfo?.address}</th>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <th>{hodInfo?.gender}</th>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <th>{hodInfo?.dept}</th>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <th>{hodInfo?.phone}</th>
                                </tr>
                                <tr>
                                    <th>Email Address</th>
                                    <th>{hodInfo?.email}</th>
                                </tr>                                
                            </tbody>
                        </table>
                        </div>
                    </div>
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
    )}

export default HodHome;