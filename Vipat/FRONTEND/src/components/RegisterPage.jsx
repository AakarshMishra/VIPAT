import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import uservalidation from "../uservalidation"
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

function RegisterPage(){
    const uname = sessionStorage.getItem("uname")
    const [user,setUser]=useState(null)
    const [selectedPhoto,setSelectedPhoto]=useState(null)
    const [file,setFile]=useState(null)
    const [errors,setErrors]=useState({})    
    const [emailerr,setEmailErr]=useState(null)
    const navigate = useNavigate()
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleFileInput=e=>{
        setSelectedPhoto(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]))    
        handleInput(e)    
    }

    const handleVerify = e=>{
        axios.get("http://localhost:8080/api/users/verify?email="+e.target.value)
        .then(resp=>{
            console.log(resp.data)
            if(resp.data.status==="error"){
                alert(resp.data.error)
            }
            resp.data.status==="error" ? setEmailErr(resp.data.error) : setEmailErr(null)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user)) 
        
        if(Object.keys(errors).length===0){
            console.log(user)
            const formData=new FormData()
            formData.append("photo",selectedPhoto)
            formData.append("sname",user.name)
            formData.append("branch",user.branch)
            formData.append("address",user.address)
            formData.append("gender",user.gender)
            formData.append("phone",user.phone)
            formData.append("email",user.email)
            formData.append("dob",user.dob)
            formData.append("pwd",user.pwd)

            console.log(user)
            axios.post("http://localhost:8080/api/students",formData)
            .then(resp=>{
                console.log(resp)
                setUser(null)
                setSelectedPhoto(null)
                e.target.reset()
                alert("Student registered successfully")
            })
            .catch(error=>console.log("Error",error))            
        }    
    }

    useEffect(()=>{        
        console.log(errors)  
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
    const mycomponent3=
    {
        
        fontWeight: 'bold',
        
        borderRadius:'25px'
    }
    const mycomponent4=
    {
        fontWeight: 'bold',
        backgroundColor: 'white',
        opacity:'0.75',
        borderRadius:'25px'
    }
    return(
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
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-9">
            <div className="">
            <div className="" style={mycomponent3}>
            <h4 className="text-center p-2"style={mycomponent4}>
                Student Registration Form
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-2 offset-1">
                        <h5 className="p-2" style={mycomponent4}>Profile Photo</h5>
                        {selectedPhoto ? <img className="img-thumbnail" src={file} alt="Photo" /> : 
                        <img className="img-thumbnail" src={'images/image.png'} alt="Photo" />} 
                        <input type="file" value={user?.photo} name="photo" onChange={handleFileInput} className="form-control-file" accept=".jpg,.png" />
                        {errors?.photo && <small className="text-danger float-right">{errors?.photo}</small>}                        
                    </div>
                    <div className="col-sm-6 offset-1">
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>Student Name</label>
                            <div className="col-sm-8">
                                <input type="text" name="name" value={user?.name} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.name && <small className="text-danger float-right">{errors?.name}</small>}                            
                            </div>
                            
                        </div>
                        {/* <div className="col-sm-6 offset-1">
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label p-2" style={mycomponent4}>Registration Number</label>
                            <div className="col-sm-8">
                                <input type="text" name="name" value={user?.regnumber} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.name && <small className="text-danger float-right">{errors?.regnumber}</small>}                            
                            </div>
                            
                        </div>
                        </div> */}
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label p-2"style={mycomponent4}>Address</label>
                            <div className="col-sm-8">
                                <input type="text" name="address" value={user?.address} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.address && <small className="text-danger float-right">{errors?.address}</small>}
                            </div>                        
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label p-2"style={mycomponent4}>Gender</label>
                            <div className="col-sm-8">
                                <select name="gender" value={user?.gender} onChange={handleInput} className="form-control form-control-sm">
                                    <option value="">Select Gender</option>
                                    <option>Male</option>     
                                    <option>Female</option>     
                                </select> 
                                {errors?.gender && <small className="text-danger float-right">{errors?.gender}</small>}                      
                            </div>                        
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 p-2 form-control-label"style={mycomponent4}>Email Id</label>
                            <div className="col-sm-8">
                                <input type="email" name="email" value={user?.email} onBlur={handleVerify} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.email && <small className="text-danger float-right">{errors?.email}</small>}
                                {emailerr && <small className="text-danger float-right">{emailerr}</small>}
                            </div>
                            
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 p-2 form-control-label"style={mycomponent4}>Date of Birth</label>
                            <div className="col-sm-8">
                                <input type="date" name="dob" value={user?.dob} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.dob && <small className="text-danger float-right">{errors?.dob}</small>}
                            </div>
                            
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 p-2 form-control-label"style={mycomponent4}>Phone</label>
                            <div className="col-sm-8">
                                <input type="text" maxLength="10" name="phone" value={user?.phone} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.phone && <small className="text-danger float-right">{errors?.phone}</small>}
                            </div>
                            
                        </div>
                        {/* <div className="form-group form-row">
                            <label className="col-sm-4 p-2 form-control-label"style={mycomponent4}>Branch</label>
                            <div className="col-sm-8">
                                <input type="text" name="branch" value={user?.branch} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.branch && <small className="text-danger float-right">{errors?.branch}</small>}
                            </div>                        
                        </div> */}
                        
                        <div className="form-group form-row">
                            <label className="col-sm-4 p-2 form-control-label"style={mycomponent4}>Password</label>
                            <div className="col-sm-8">
                                <input type="password" name="pwd" value={user?.pwd} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.pwd && <small className="text-danger float-right">{errors?.pwd}</small>}
                            </div>
                        </div>                        
                        <button className="btn btn-primary  btn-sm float-right">Register Now</button>
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

export default RegisterPage;