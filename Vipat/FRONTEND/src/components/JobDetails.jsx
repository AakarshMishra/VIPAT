import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DHeader from "./DHeader";
import SideBar from "./SideBar";
import MyBackgroundImage from '../images/background.jpg'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import linkedin from '../images/linkedlin.png'
import logo from '../images/vitlogo.png'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
function JobDetails() {
    const cid = sessionStorage.getItem("id")
    const navigate=useNavigate()
    const id = sessionStorage.getItem("id")
    const status=sessionStorage.getItem("status");
    const role = sessionStorage.getItem("role")
    const [job, setJob] = useState()
    const { jid } = useParams("jid")
    const [data, setData] = useState({
        "jid": jid,
        "sid": id
    })
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState({})
    const [selectedResume, setSelectedResume] = useState(null)
    const handleApply = e => {
        if (user?.resume!= null) {
            axios.post("http://localhost:8080/api/students/apply", data)
                .then(resp => {
                    alert(resp.data.data)
                }) 
                .catch(err => {
                    console.log("Error", err)
                })
            
        }
        else {
            alert("Resume Missing")
        }
    }
    const uname = sessionStorage.getItem("uname")
    useEffect(() => {
        axios.get("http://localhost:8080/api/students/" + cid)
            .then(resp => {
                console.log("Student Info", resp.data.data)
                setUser(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get("http://localhost:8080/api/company/jobs/details/" + jid)
            .then(resp => {
                console.log("company Info", resp.data.data)
                setJob(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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
                <h1 className="p-2" style={mycomponent4}>WELCOME ! {uname}</h1>
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
                    <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{ height: "calc(100vh - 80px)" }}>
                        <SideBar />
                    </div>
                    <div className="col-sm-6 p-3">
                        <div className="">
                            <div className="card-header m-2" style={mycomponent4}>
                                <h5>Job Profile</h5>
                            </div>
                            <div className="card-body p-2">
                                <table className="table table-borderless  " style={mycomponent4}>
                                    <tbody>
                                        <tr>
                                            <th style={{ width: "200px" }}>Designation</th>
                                            <th>{job?.designation}</th>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <th>{job?.description}</th>
                                        </tr>
                                        <tr>
                                            <th>Experience</th>
                                            <th>{job?.experience}</th>
                                        </tr>
                                        <tr>
                                            <th>12th Percentage</th>
                                            <th>{job?.xiithpercent}%</th>
                                        </tr>
                                        <tr>
                                            <th>Graduation GPA</th>
                                            <th>{job?.gradgpa}</th>
                                        </tr>
                                        <tr>
                                            <th>No of Seats</th>
                                            <th>{job?.nos}</th>
                                        </tr>
                                        <tr>
                                            <th>Salary Package</th>
                                            <th>{job?.salpackage}</th>
                                        </tr>
                                        {role === "Student" ?
        
                                            <tr>
                                                <th colSpan="2">
                                                    <button onClick={handleApply} className="btn btn-success float-right">APPLY NOW</button>
                                                    <a href="http://localhost:8501/" target="_blank" rel="noopener noreferrer"><div className="TEXT" ><u>Want to Analyze your Resume?</u></div></a>
                                                </th>
                                            </tr>
                                        : ""}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3">
                        <div className="">
                            <div className="card-header m-2" style={mycomponent4}>
                                <h5>Company Profile</h5>
                            </div>
                            <div className="card-body p-2">
                                <table className="table table-borderless" style={mycomponent4}>
                                    <tbody>
                                        <tr>
                                            <th>Company Name</th>
                                            <th>{job?.company?.cname}</th>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <th>{job?.company?.address}</th>
                                        </tr>
                                        <tr>
                                            <th>Website</th>
                                            <th>{job?.company?.website}</th>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <th>{job?.company?.phone}</th>
                                        </tr>
                                        <tr>
                                            <th>Email Address</th>
                                            <th>{job?.company?.email}</th>
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
    )
}

export default JobDetails;