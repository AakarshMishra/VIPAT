function DHeader() {
    const uname = sessionStorage.getItem("uname")
    return (
        <div className="jumbotron p-2 mb-0 text-white border-bottom rounded-0" style={{ background: "#4085c9" }}>
            <h5 className="float-right m-2">Welcome ! {uname}</h5>
            <h4 className="text-center">VIPAT - THE PLACEMENT CELL</h4>
        </div>
    )
}

export default DHeader;