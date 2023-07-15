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
function CompJobs(){
    const navigate=useNavigate()
    const uname = sessionStorage.getItem("uname")
    const [job,setjob]=useState([])
    const role=sessionStorage.getItem("role")
    const cid=sessionStorage.getItem("id")
    const loadData=()=>{
        let url="http://localhost:8080/api/company/jobs"
        if(role==="Company")
            url="http://localhost:8080/api/company/jobs/"+cid
        axios.get(url)
        .then(resp=>{
            setjob(resp.data.data)
            console.log(job)
        })
    }
    const handleDelete=id=>{
        let result=window.confirm('Are you sure to delete this record ?');
        if(result){
            axios.delete("http://localhost:8080/api/company/jobs/"+id)
            .then(resp=>{
                alert(resp.data.data)
                console.log(resp.data)
                loadData()
            })
            .catch(error=>{
                console.log(error)
            })
        }        
    }

    const handleView=id=>{
         navigate("/jobs/"+id)     
    }
    useEffect(()=>{
        loadData();
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
        backgroundColor: 'white',
        opacity:'0.75',
        borderRadius:'25px'
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
                <div className="col-sm-10">
                    {role==="Company"?(
                        <a href="/addjob" className="float-right btn btn-sm btn-primary m-2">Add New</a>
                    ):""}
                    <h4 className="text-left p-2 border-bottom border-success">All Jobs</h4>
                    <table className="table table-hover" style={mycomponent3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Designation</th>
                        <th>12th Percentage</th>
                        <th>Graduation GPA</th>
                        <th>Salary Package</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {job.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.company.cname}</td>
                        <td>{x.designation}</td>
                        <td>{x.xiithpercent}</td>
                        <td>{x.gradgpa}</td>
                        <td>{x.salpackage}</td>
                        <td>
                            {role==="Company"?(<button onClick={e=>handleDelete(x.id)} className="btn btn-danger btn-sm mr-2">Delete</button>):""}
                            <button onClick={e=>handleView(x.id)} className="btn btn-primary btn-sm">View</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
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

export default CompJobs;