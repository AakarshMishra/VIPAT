import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import loginvalidation from "../loginvalidation"
import Contact from "./Contact";
import Navbar from "./Navbar"
import MyBackgroundImage from '../images/background.jpg'
import fb from '../images/facebook.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import linkedin from '../images/linkedlin.png'
import logo from '../images/vitlogo.png'
import { Link } from "react-scroll";
import videobg from '../assets/background.mp4'

function LoginDean() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errmsg, setErrmsg] = useState(null)

    const [user, setUser] = useState()
    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setErrors(loginvalidation(user))
        if (Object.keys(errors).length === 0) {
            console.log(user)
            axios.post("http://localhost:8080/api/users/validate", user)
                .then(resp => {
                    let result = resp.data.data;
                    console.log(resp.data.data)
                    sessionStorage.setItem("userid", result.userid)
                    sessionStorage.setItem("uname", result.uname)
                    sessionStorage.setItem("role", result.role)
                    sessionStorage.setItem("id", result.cid)
                    dispatch({ type: 'IsLoggedIn' })
                    if (result.role === "DEAN")
                        navigate("/dashboard")
                    else {
                        alert("Not a DEAN Login!")
                    }
                })
                .catch(error => {
                    console.log("Error", error);
                    setErrmsg("Invalid Crediantials");
                })
        }




    }
    const mycomponent =
    {
        width: "100%",
        height: "78vh",
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${MyBackgroundImage})`,
    }
    const mycomponent2 =
    {
        backgroundSize: 'cover',
        backgroundColor: 'lightblue',
        padding: '0.5rem',
        height: 'auto',
    }
    const mycomponent3 =
    {
        position: "absolute",
        width: "100%",
        hieght: "100%",
        top: "0%",
        left: "13%"

    }
    const mycomponent4 =
    {
        width: "100%",
        height: "100%",
        objectFit:"cover",
    }
    const mycomponent5 =
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity: '0.85',
        borderRadius: '25px',
    }


    return (
        <>
            <nav>
                <a href="#" className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <h1 className="p-2" style={mycomponent5}>VIPAT-THE PLACEMENT CELL</h1>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><a onClick={e => navigate('/')} className='active'>Home</a></li>

                </ul>

            </nav>


            <div className="login" style={mycomponent}>
                <div className="overlay"></div>
                <video autoPlay loop muted style={mycomponent4}>
                    <source src={videobg} type='video/mp4' />
                </video>

                <div className="container pt-4" style={mycomponent3} >
                    <div className="row">
                        <div className="col-sm-5 mx-auto">

                            <form className="card shadow mt-5" style={{ borderRadius: "20px", fontWeight: 'bold' }} onSubmit={handleSubmit} >
                                <div className="card-header" style={{ background: "#4085c9", borderRadius: "20px", fontWeight: 'bold' }}>
                                    <h5 className="text-center"><b>VIPAT DEAN LOGIN</b></h5>
                                </div>
                                <div className="card-body">
                                    <div className="form-group form-row">
                                        <label className="col-sm-4 col-form-label"><b>User Id</b></label>
                                        <div className="col-sm-8">
                                            <input type="text" name="userid" required className="form-control" placeholder="User Id" value={user?.userid} onChange={handleInput} />
                                        </div>
                                    </div>
                                    <div className="form-group form-row">
                                        <label className="col-sm-4 col-form-label"><b>Password</b></label>
                                        <div className="col-sm-8">
                                            <input type="password" required className="form-control" name="pwd" placeholder="Password" value={user?.pwd} onChange={handleInput} />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary float-right" onClick={handleSubmit}>Login</button>
                                    <div className="TEXT" onClick={e => navigate('/')}><b><u>Go to HomePage?</u></b></div>
                                </div>
                                {errmsg != null ? (
                                    <div className="alert text-danger text-center font-weight-bold">
                                        {errmsg}
                                    </div>
                                ) : ''}
                            </form>

                        </div>
                    </div>

                </div>
            </div>
            <nav style={mycomponent2} id='contact'>
                <h1 className="p-2" style={mycomponent5}>Connect With Us!</h1>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><a href='https://www.facebook.com/VITCChennai/' target='_blank'><img src={fb} alt='logo' /></a></li>
                    <li><a href='https://www.instagram.com/vit.chennai/' target='_blank'><img src={insta} alt='logo' /></a></li>
                    <li><a href='https://twitter.com/ChennaiVit' target='_blank'><img src={twitter} alt='logo' /></a></li>
                    <li><a href='https://www.youtube.com/c/VITChennaic' target='_blank'><img src={yt} alt='logo' /></a></li>
                    <li><a href='https://www.linkedin.com/company/vitchennai' target='_blank'><img src={linkedin} alt='logo' /></a></li>
                </ul>

            </nav>
        </>
    )
}

export default LoginDean;