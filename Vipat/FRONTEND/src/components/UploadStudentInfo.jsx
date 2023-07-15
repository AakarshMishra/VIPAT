import axios from "axios"
import { useEffect, useState } from "react"
import uservalidation from "../uploadinfovalidation"
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import SideBar from "./SideBar"
import MyBackgroundImage from '../images/background.jpg'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import linkedin from '../images/linkedlin.png'
import logo from '../images/vitlogo.png'
import { Link } from "react-scroll";

function UploadStudentInfo() {
    const uname = sessionStorage.getItem("uname")
    const cid = sessionStorage.getItem("id")
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8080/api/students/" + cid)
            .then(resp => {
                console.log("Student Info", resp.data.data)
                setUser(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const downloadResume = id => {
        console.log(user?.resume)
        window.location.href = "http://localhost:8080/" + user?.resume;
    }
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState({})
    const [selectedResume, setSelectedResume] = useState(null)

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleFileInput = e => {
        setSelectedResume(e.target.files[0])
        handleInput(e)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(uservalidation(user))
        console.log("User Info", user)

        if (Object.keys(errors).length === 0) {
            const formData = new FormData()
            if (selectedResume != null) {
                formData.append("resume", selectedResume)
            }
            else {
                alert("Upload resume")
            }
            formData.append("xthyear", user.xthyear)
            formData.append("xthpercent", user.xthpercent)
            formData.append("xiithyear", user.xiithyear)
            formData.append("xiithpercent", user.xiithpercent)
            formData.append("gradyear", user.gradyear)
            formData.append("gradgpa", user.gradgpa)
            formData.append("regnumber", user.regnumber)
            formData.append("id", cid)
            axios.post("http://localhost:8080/api/students/upload", formData)
                .then(resp => {
                    console.log(resp)
                    setUser(null)
                    e.target.reset()
                    alert(resp.data.data)
                    window.location.href = "uploadinfo"
                })
                .catch(error => console.log("Error", error))
        }

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
        
        borderRadius: '25px'
    }
    const mycomponent4=
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity:'0.75',
        borderRadius:'25px'
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
                    <div className="col-sm-9">
                        <div className="">
                            <div className="">
                                <h4 className="text-center p-2" style={mycomponent4}>
                                    Upload Student Info
                                </h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6 mx-auto">
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>10th Pass Year</label>
                                                <div className="col-sm-8">
                                                    <input type="number" min="2000" name="xthyear" value={user?.xthyear} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.xthyear && <small className="text-danger float-right">{errors?.xthyear}</small>}
                                                </div>
                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2"style={mycomponent4}>10th Percentage</label>
                                                <div className="col-sm-8">
                                                    <input type="number" name="xthpercent" value={user?.xthpercent} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.xthpercent && <small className="text-danger float-right">{errors?.xthpercent}</small>}
                                                </div>
                                            </div>

                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2"style={mycomponent4}>12th Pass Year</label>
                                                <div className="col-sm-8">
                                                    <input type="number" min="2000" name="xiithyear" value={user?.xiithyear} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.xiithyear && <small className="text-danger float-right">{errors?.xiithyear}</small>}
                                                </div>
                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>12th Percentage</label>
                                                <div className="col-sm-8">
                                                    <input type="number" name="xiithpercent" value={user?.xiithpercent} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.xiithpercent && <small className="text-danger float-right">{errors?.xiithpercent}</small>}
                                                </div>
                                            </div>

                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>Graduation Year</label>
                                                <div className="col-sm-8">
                                                    <input type="number" min="2000" name="gradyear" value={user?.gradyear} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.gradyear && <small className="text-danger float-right">{errors?.gradyear}</small>}
                                                </div>
                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>Graduation GPA</label>
                                                <div className="col-sm-8">
                                                    <input type="number" name="gradgpa" value={user?.gradgpa} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.gradgpa && <small className="text-danger float-right">{errors?.gradgpa}</small>}
                                                </div>
                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>Reg Number</label>
                                                <div className="col-sm-8">
                                                    <input type="name" name="regnumber" value={user?.regnumber} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.regnumber && <small className="text-danger float-right">{errors?.regnumber}</small>}
                                                </div>
                                            </div>
                                            {/* <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2"style={mycomponent4}>Register Number</label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="regnumber" value={user?.branch} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.regnumber && <small className="text-danger float-right">{errors?.regnumber}</small>}
                                                </div>
                                            </div>  */}

                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>Resume</label>
                                                <div className="col-sm-8">
                                                    <input type="file" name="resume" accept=".doc,.docx" onChange={handleFileInput} className="form-control-file form-control-sm" />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-sm float-right .enabled ">Submit</button>
                                            {user?.resume != null ? <button onClick={e => downloadResume(user?.resume)} type="button" className="btn btn-primary btn-sm float-right mr-2">Download Resume</button> : ""}
                                        </div>
                                    </div>
                                </form>
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

export default UploadStudentInfo;