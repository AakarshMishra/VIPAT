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
function Students() {
    const uname = sessionStorage.getItem("uname")
    const [Students, setStudents] = useState([])
    const navigate = useNavigate()
    const loadData = () => {
        axios.get("http://localhost:8080/api/students")
            .then(resp => {
                setStudents(resp.data.data)
                console.log(Students)
            })
    }
    const handleDelete = id => {
        let result = window.confirm('Are you sure to delete this record ?');
        if (result) {
            axios.delete("http://localhost:8080/api/students/" + id)
                .then(resp => {
                    alert(resp.data.data)
                    console.log(resp.data)
                    loadData()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    const handleEdit = id => {
        navigate("/students/" + id)
    }

    const handleView = id => {
        navigate("/sview/" + id)
    }

    useEffect(() => {
        loadData()
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
    const mycomponent3=
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
                        <a href="/addstudent" className="float-right btn btn-sm btn-primary m-2">Add New</a>
                        <h4 className="text-left p-2 border-bottom border-success">All Students</h4>
                        <table className="table  table-hover" style={mycomponent3}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                    <th>Date of Birth</th>
                                    <th>Phone</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Students.map(x => (
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td><img src={"http://localhost:8080/" + x.photo} style={{ width: "60px", height: "60px" }} /> {x.sname}</td>
                                        <td>{x.address}</td>
                                        <td>{x.gender}</td>
                                        <td>{x.dob}</td>
                                        <td>{x.phone}</td>
                                        <td>{x.branch}</td>
                                        <td>
                                            <b><button onClick={e => handleView(x.id)} className="btn btn-info btn-sm mr-2">View</button></b>
                                            {/* <button onClick={e=>handleDelete(x.id)} className="btn btn-danger btn-sm">Delete</button> */}
                                            <button onClick={e => handleEdit(x.id)} className="btn btn-success ml-2 btn-sm">Edit</button>
                                        </td>
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

export default Students;