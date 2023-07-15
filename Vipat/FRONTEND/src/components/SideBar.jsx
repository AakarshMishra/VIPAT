import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
var classNames = require('classnames');

function SideBar(){    
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation()
    const role=sessionStorage.getItem("role")
    const navclass="list-group-item list-group-item-action p-2 text-left";
    console.log(location.pathname)
    const logout=()=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        navigate("/");
    }
    const button1=
    {
        backgroundColor:"#007bff",
        color: "white",
        textAlign: "center",
        borderRadius: "20px",
        fontWeight: 'bold',
        opacity:'0.85',
        "&:hover": {
            background: "lightblue"
          },
    }
    return(
<div className="list-group list-group-flush" >
    {role==="DEAN" ? (<>
    <br/>
        <Link to="/dashboard" className={classNames(navclass,{"active":location.pathname=="/dashboard"})}style={button1}><b>Dashboard</b></Link><br/>                                                                                                
        <Link to="/students" className={classNames(navclass,{"active":location.pathname=="/students"})} style={button1}>Students</Link><br/>   
        <Link to="/hods" className={classNames(navclass,{"active":location.pathname=="/hods"})}style={button1}>Proctors</Link><br/>   
        <Link to="/companies" className={classNames(navclass,{"active":location.pathname=="/companies"})}style={button1}>Companies</Link><br/>   
        <Link to="/jobs" className={classNames(navclass,{"active":location.pathname=="/jobs"})}style={button1}>Openings</Link><br/>   
        <Link to="/selections" className={classNames(navclass,{"active":location.pathname=="/selections"})}style={button1}>Selected Students</Link><br/>   
        <Link to="/settings" className={classNames(navclass,{"active":location.pathname=="/settings"})}style={button1}>College Info</Link><br/>   
        </>): role==="Student" ? (
            <>
            <br/>
        <Link to="/shome" className={classNames(navclass,{"active":location.pathname=="/shome"})}style={button1}>Home</Link><br/> 
        <Link to="/uploadinfo" className={classNames(navclass,{"active":location.pathname=="/uploadinfo"})}style={button1}>Upload Info</Link><br/> 
        <Link to="/jobs" className={classNames(navclass,{"active":location.pathname=="/jobs"})}style={button1}>Openings</Link><br/> 
        <Link to="/appliedjobs" className={classNames(navclass,{"active":location.pathname=="/appliedjobs"})}style={button1}>Applied Jobs</Link><br/> 
    </>) : role==="Proctor" ? (<>
    <br/>
        <Link to="/hhome" className={classNames(navclass,{"active":location.pathname=="/hhome"})}style={button1}>Home</Link><br/> 
        <Link to="/students" className={classNames(navclass,{"active":location.pathname=="/students"})}style={button1}>Students</Link><br/> 
        <Link to="/selections" className={classNames(navclass,{"active":location.pathname=="/selections"})}style={button1}>Selected Students</Link><br/> 
        <Link to="/jobs" className={classNames(navclass,{"active":location.pathname=="/jobs"})}style={button1}>Placement Drive</Link><br/> 
    </>) :role==="Company" ?(<>
    <br/>
        <Link to="/chome" className={classNames(navclass,{"active":location.pathname=="/chome"})}style={button1}>Home</Link><br/> 
        <Link to="/jobs" className={classNames(navclass,{"active":location.pathname=="/jobs"})}style={button1}>Jobs</Link><br/> 
        <Link to="/applications" className={classNames(navclass,{"active":location.pathname=="/applications"})}style={button1}>Applications</Link> <br/>        
        </>) : (<>      
            </>)
        
    }
    <Link to="/changepwd" className={classNames(navclass,{"active":location.pathname=="/changepwd"})}style={button1}>Change Password</Link><br/>   
    <button onClick={()=>logout()} className={classNames(navclass,"btn-link")}style={button1}>Logout</button>
</div>
    )
}

export default SideBar;