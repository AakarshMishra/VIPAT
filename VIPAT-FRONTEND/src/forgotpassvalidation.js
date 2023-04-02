const forgotpassvalidation=(values)=>{
    let errors={}
    if(!values.userid){
        errors.userid="User id is required"
    }   
    return errors;
}

export default forgotpassvalidation;