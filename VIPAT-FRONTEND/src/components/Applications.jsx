import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
function Applications() {
    const cid = sessionStorage.getItem("id")
    const uname = sessionStorage.getItem("uname")
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    const loadData = () => {
        axios.get("http://localhost:8080/api/company/applications/" + cid)
            .then(resp => {
                setdata(resp.data.data)
                console.log(data)
            })
    }
    const handleView = id => {
        navigate("/application/" + id)
    }
    useEffect(() => {
        loadData();
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
        padding: '0.5rem',
        height: 'auto',
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
    
    return (
        <>
            <nav>
                <a href="#" className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <h1>WELCOME ! {uname}</h1>
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
                    <div className="col-sm-10">
                        <h4 className="text-left p-2 border-bottom border-success">Applications</h4>
                        <table className="table table-borderless" style={mycomponent3}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Candidate Name</th>
                                    <th>Apply Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(x => (
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.student.sname}</td>
                                        <td>{x.applydate}</td>
                                        <td>{x.status}</td>
                                        <td><button onClick={e => handleView(x.id)} className="btn btn-sm btn-primary">View Details</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <nav style={mycomponent2} id='contact'>
                <h1>Connect With Us!</h1>
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

export default Applications;