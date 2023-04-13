import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import loginvalidation from "../loginvalidation"
import forgotpassvalidation from "../forgotpassvalidation";


function ForgotPass(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [errmsg,setErrmsg]=useState(null)

    const [user,setUser]=useState()
    const [errors,setErrors]=useState({})

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(forgotpassvalidation(user))
        if(Object.keys(errors).length===0)
        {
        axios.post("http://localhost:8080/api/users/forgotpass",user)
        .then(resp=>{
            alert(resp.data.data)
        })
        .catch(err=>{
            console.log("Error",err)
        })
        }   
    }


    
        
        

    return(
        <div className="forgot">
            <div className="jumbotron p-4 text-white text-center border-bottom mb-0 bg-transparent">
                <h4><b><u>VIPAT-THE PLACEMENT CELL</u></b></h4>    
            </div>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-sm-5 mx-auto">
                        <form className="card shadow mt-5"  onSubmit={handleSubmit} >
                            <div className="card-header" style={{background:"#4085c9"}}>
                                <h5 className="text-center"><b>VIPAT FORGOT PASSWORD</b></h5>
                            </div>                             
                            <div className="card-body">
                                <div className="form-group form-row">
                                    <label className="col-sm-4 col-form-label"><b>Email Id</b></label>
                                    <div className="col-sm-8">
                                    <input type="text" name="userid" required className="form-control" placeholder="User Id"  value={user?.userid} onChange={handleInput}/>
                                    </div>
                                </div>
                                <button  className="btn btn-primary mr-2 float-right">Forgot Password</button>
                                <div className="TEXT" onClick={e=>navigate('/')}><b><u>Go to HomePage?</u></b></div>
                            </div>
                            {errmsg !=null ? (
                                <div className="alert text-danger text-center font-weight-bold">
                                    {errmsg}
                                </div>
                            ): ''}
                        </form>
                        
                    </div>
                </div>

            </div>
            <footer class="text-center border-top "><b>Copyright &copy; VIT-CHENNAI</b></footer>
        </div>
    )
}

export default ForgotPass;