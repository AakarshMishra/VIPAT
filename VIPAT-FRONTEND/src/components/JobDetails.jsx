import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DHeader from "./DHeader";
import SideBar from "./SideBar";

function JobDetails() {
    const cid = sessionStorage.getItem("id")
    const id = sessionStorage.getItem("id")
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
    return (
        <>
            <DHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{ height: "calc(100vh - 80px)" }}>
                        <SideBar />
                    </div>
                    <div className="col-sm-6 p-3">
                        <div className="card shadow">
                            <div className="card-header">
                                <h5>Job Profile</h5>
                            </div>
                            <div className="card-body">
                                <table className="table table-borderless table-sm">
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
                                        {role === "Student" ? (
                                            <tr>
                                                <th colSpan="2">
                                                    <button onClick={handleApply} className="btn btn-success float-right">APPLY NOW</button>
                                                    <a href="http://localhost:8501/" target="_blank" rel="noopener noreferrer"><div className="TEXT" ><u>Want to Analyze your Resume?</u></div></a>
                                                </th>
                                            </tr>
                                        ) : ""}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3">
                        <div className="card shadow">
                            <div className="card-header">
                                <h5>Company Profile</h5>
                            </div>
                            <div className="card-body">
                                <table className="table table-borderless">
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
        </>
    )
}

export default JobDetails;