function Header() {
    const uname = sessionStorage.getItem("uname")
    return (
        <div className="jumbotron p-0 mb-0 text-white border-bottom rounded-0" style={{ background: "#4085c9"}}>
            <img src="images/vit2.png" className="" style={{ height: "4em" ,display: "inline"}}></img> 
            <h5 className="float-right m-3">Welcome ! {uname}</h5>
            <h4 className="gg" style={{display:"inline"}}>VIPAT - THE PLACEMENT CELL</h4>
        </div>
    )
}

export default Header;