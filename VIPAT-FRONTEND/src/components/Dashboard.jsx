import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
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
function Dashboard(){
    const [data,setData]=useState({})
    const uname = sessionStorage.getItem("uname")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get("http://localhost:8080/api/admin/dashboard")
        .then(resp=>{
            setData(resp.data.data)
        })
    },[])
    const mycomponent=
    {
        backgroundSize: 'cover',
        backgroundImage: `url(${MyBackgroundImage})`,
    }
    const mycomponent2=
    {
        backgroundSize: 'cover',
        backgroundColor: 'lightblue',
        padding: '0.5rem',
        height: 'auto',
    }
    const button1=
    {
        backgroundColor:"#6f42c1",
        color: "white",
        borderRadius: "20px",
        fontWeight: 'bold',
        opacity:'0.75',
        margin:'20px',
        "&:hover": {
            background: "lightblue"
          },
    }
    const button2=
    {
        backgroundColor:"#e83e8c",
        color: "white",
        borderRadius: "20px",
        fontWeight: 'bold',
        opacity:'0.75',
        margin:'20px',
        "&:hover": {
            background: "lightblue"
          },
    }
    const button3=
    {
        backgroundColor:"#ffc107",
        color: "white",
        borderRadius: "20px",
        fontWeight: 'bold',
        opacity:'0.75',
        margin:'20px',
        "&:hover": {
            background: "lightblue"
          },
    }
    const button4=
    {
        backgroundColor:"#28a745",
        color: "white",
        borderRadius: "20px",
        fontWeight: 'bold',
        opacity:'0.75',
        margin:'20px',
        "&:hover": {
            background: "lightblue"
          },
    }
    return(
        <>
         <nav>
        <a href="#" className='logo'>
            <img src={logo} alt='logo'/>
        </a>
        <h1>WELCOME ! {uname}</h1>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a onClick={e=>navigate('/')} className='active'>Home</a></li>
            
        </ul>
        
    </nav>
        <div className="container-fluid" style={mycomponent}>
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <br/>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="" onClick={e=>navigate('/students')}>
                                <div className="card-body" style={button1}>
                                    <h4><b>Students</b></h4>
                                    <br/>
                                    <h5>{data.students}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="" onClick={e=>navigate('/hods')}>
                                <div className="card-body" style={button2}>
                                    <h4><b>Proctors</b></h4>
                                    <br/>
                                    <h5>{data.hods}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="" onClick={e=>navigate('/companies')}>
                                <div className="card-body" style={button3}>
                                    <h4><b>Company</b></h4>
                                    <br/>
                                    <h5>{data.company}</h5>
                                    
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="" onClick={e=>navigate('/selections')}>
                                <div className="card-body" style={button4}>
                                    <h4><b>Selected Students</b></h4>
                                    <h5>{data.selected}</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav style={mycomponent2} id='contact'>
        <h1>Connect With Us!</h1>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='https://www.facebook.com/VITCChennai/' target='_blank'><img src={fb} alt='logo'/></a></li>
            <li><a href='https://www.instagram.com/vit.chennai/' target='_blank'><img src={insta} alt='logo'/></a></li>
            <li><a href='https://twitter.com/ChennaiVit' target='_blank'><img src={twitter} alt='logo'/></a></li>
            <li><a href='https://www.youtube.com/c/VITChennaic' target='_blank'><img src={yt} alt='logo'/></a></li>
            <li><a href='https://www.linkedin.com/company/vitchennai' target='_blank'><img src={linkedin} alt='logo'/></a></li>
        </ul>
        
    </nav>
        </>
    )
}

export default Dashboard;