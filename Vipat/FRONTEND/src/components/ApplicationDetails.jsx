import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DHeader from "./DHeader";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom"
import MyBackgroundImage from '../images/background.jpg'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import linkedin from '../images/linkedlin.png'
import logo from '../images/vitlogo.png'
import { Link } from "react-scroll";

function ApplicationDetails() {
    const navigate = useNavigate()
    const uname = sessionStorage.getItem("uname")
    const id = sessionStorage.getItem("id")
    const cid = sessionStorage.getItem("id")
    const { aid } = useParams("aid")
    console.log(aid)
    const [info, setInfo] = useState({
        "jid": aid,
        "sid": id,
        "status": ""
    })
    const downloadResume = id => {
        console.log(user?.resume)
        window.location.href = "http://localhost:8080/" + user?.resume;
    }
    const [user, setUser] = useState(null)
    const [selectedResume, setSelectedResume] = useState(null)

    const [data, setData] = useState()
    const handleApply = e => {
        axios.post("http://localhost:8080/api/students/apply", data?.job)
            .then(resp => {
                alert(resp.data.job.data?.job)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }

    const handleUpdate = (status) => {
        info.status = status
        console.log(info)
        axios.post("http://localhost:8080/api/company/applications/update", info)
            .then(resp => {
                alert(resp.data.data)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }
    useEffect(() => {
        axios.get("http://localhost:8080/api/company/applications/details/" + aid)
            .then(resp => {
                console.log("student Info", resp.data.data?.job.data?.job)
                setData(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get("http://localhost:8080/api/students/" + cid)
            .then(resp => {
                console.log("Student Info", resp.data.data)
                setUser(resp.data.data)
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
                <h1 className="p-2" style={mycomponent4} >WELCOME ! {uname}</h1>
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
                    <div className="col-sm-4 p-3">
                        <div className="">
                            <div className="card-header m-2" style={mycomponent4}>
                                <h5>Job Profile</h5>
                            </div>
                            <div className="">
                                <table className="table table-borderless" style={mycomponent4}>
                                    <tbody>
                                        <tr>
                                            <th>Designation</th>
                                            <th>{data?.job?.designation}</th>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <th>{data?.job?.description}</th>
                                        </tr>
                                        <tr>
                                            <th>Experience</th>
                                            <th>{data?.job?.experience}</th>
                                        </tr>
                                        <tr>
                                            <th>12th Percentage</th>
                                            <th>{data?.job?.xiithpercent}%</th>
                                        </tr>
                                        <tr>
                                            <th>Graduation GPA</th>
                                            <th>{data?.job?.gradgpa}</th>
                                        </tr>
                                        <tr>
                                            <th>No of seats</th>
                                            <th>{data?.job?.nos}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 p-3">
                        <div className="">
                            <div className="card-header m-2" style={mycomponent4}>
                                <h5>Candidate Profile</h5>
                            </div>
                            <div className="">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src={"http://localhost:8080/" + data?.student?.photo} style={{borderRadius:"20px"}} className="img-thumbnail float-left" />
                                    </div>
                                    <div className="col-sm-9">
                                        <table className="table table-borderless" style={mycomponent4}>
                                            <tbody>
                                                <tr>
                                                    <th>Candidate Name</th>
                                                    <th>{data?.student?.sname}</th>
                                                </tr>
                                                <tr>
                                                    <th>Address</th>
                                                    <th>{data?.student?.address}</th>
                                                </tr>
                                                <tr>
                                                    <th>Gender</th>
                                                    <th>{data?.student?.gender}</th>
                                                </tr>
                                                <tr>
                                                    <th>Phone</th>
                                                    <th>{data?.student?.phone}</th>
                                                </tr>
                                                <tr>
                                                    <th>Email Address</th>
                                                    <th>{data?.student?.email}</th>
                                                </tr>
                                                <tr>
                                                    <th>10th Percent</th>
                                                    <th>{data?.student?.xthpercent}%</th>
                                                </tr>
                                                <tr>
                                                    <th>12th Percent</th>
                                                    <th>{data?.student?.xiithpercent}%</th>
                                                </tr>
                                                <tr>
                                                    <th>Graduation GPA</th>
                                                    <th>{data?.student?.gradgpa}</th>
                                                </tr>
                                                <tr>
                                                    <th colSpan="3">
                                                        <button onClick={e => downloadResume(user?.resume)} type="button" className="btn btn-primary btn-sm float-right mr-2">Download Resume</button>
                                                        <button onClick={e => handleUpdate('Approved')} className="btn btn-success ml-2 mr-2 btn-sm float-right">Approve</button>
                                                        <button onClick={e => handleUpdate('Rejected')} className="btn btn-danger btn-sm float-right">Reject</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


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

export default ApplicationDetails;