import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import uservalidation from "../cmpvalidation"
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

function AddCompany() {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState({})
    const [emailerr, setEmailErr] = useState(null)
    const navigate = useNavigate()
    const uname = sessionStorage.getItem("uname")

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleVerify = e => {
        axios.get("http://localhost:8080/api/users/verify?email=" + e.target.value)
            .then(resp => {
                console.log(resp.data)
                if (resp.data.status === "error") {
                    alert(resp.data.error)
                }
                resp.data.status === "error" ? setEmailErr(resp.data.error) : setEmailErr(null)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(uservalidation(user))

        if (Object.keys(errors).length === 0) {
            console.log(user)

            axios.post("http://localhost:8080/api/company", user)
                .then(resp => {
                    console.log(resp)
                    setUser(null)
                    e.target.reset()
                    alert("Company registered successfully")
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
    const mycomponent4 =
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity: '0.75',
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
                    <div className="col-sm-9">
                        <div className="" style={mycomponent3}>
                            <div className="">
                                <h4 className="text-center p-2" style={mycomponent4}>
                                    <b>Add Company</b>
                                </h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6 mx-auto">
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}><b>Company Name</b></label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="cname" value={user?.cname} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.cname && <small className="text-danger float-right">{errors?.cname}</small>}
                                                </div>

                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 form-control-label p-2" style={mycomponent4}><b>Address</b></label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="address" value={user?.address} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.address && <small className="text-danger float-right">{errors?.address}</small>}
                                                </div>
                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 p-2 form-control-label" style={mycomponent4}><b>Website</b></label>
                                                <div className="col-sm-8">
                                                    <input type="text" name="website" value={user?.website} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.website && <small className="text-danger float-right">{errors?.website}</small>}
                                                </div>
                                            </div>
                                            <div className="form-group form-row">
                                                <label className="col-sm-4 p-2 form-control-label" style={mycomponent4}><b>Email Id</b></label>
                                                <div className="col-sm-8">
                                                    <input type="email" name="email" value={user?.email} onBlur={handleVerify} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.email && <small className="text-danger float-right">{errors?.email}</small>}
                                                    {emailerr && <small className="text-danger float-right">{emailerr}</small>}
                                                </div>

                                            </div>

                                            <div className="form-group form-row">
                                                <label className="col-sm-4  p-2 form-control-label" style={mycomponent4}><b>Phone</b></label>
                                                <div className="col-sm-8">
                                                    <input type="text" maxLength="10" name="phone" value={user?.phone} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.phone && <small className="text-danger float-right">{errors?.phone}</small>}
                                                </div>

                                            </div>

                                            <div className="form-group form-row">
                                                <label className="col-sm-4 p-2 form-control-label" style={mycomponent4}><b>Password</b></label>
                                                <div className="col-sm-8">
                                                    <input type="password" name="pwd" value={user?.pwd} onChange={handleInput} className="form-control form-control-sm" />
                                                    {errors?.pwd && <small className="text-danger float-right">{errors?.pwd}</small>}
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-sm float-right"><b>Submit</b></button>
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
                <input className='menu-btn' type='checkbox' id='menu-btn' />
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

export default AddCompany;