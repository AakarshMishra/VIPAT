function HomePage() {
    return (
        <div className="home">
            <div className="text-white p-4 text-center">
                <img src={'images/vitlogo1.png'} style={{ height: "10em" }} /> 
                <h4><b><u>VIPAT-THE PLACEMENT CELL</u></b></h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col  mt-5 mr-5 shadow p-2" onClick={() => window.location.href = '/Dlogin'}>
                        <img src={'images/dean.png'} className="img-thumbnail" style={{ height: "200px", width: "200px" }} />
                        <h5 className="p-2 text-white"><b>DEAN LOGIN</b></h5>
                    </div>
                    <div className="col  mt-5 mr-5 shadow p-2" onClick={() => window.location.href = '/Plogin'}>
                        <img src={'images/proctor.png'} className="img-thumbnail" style={{ height: "200px", width: "200px" }} />
                        <h5 className="p-2 text-white"><b>PROCTOR LOGIN</b></h5>
                    </div>
                    <div className="col  mt-5 mr-5 shadow p-2" onClick={() => window.location.href = '/Slogin'}>
                        <img src={'images/students.png'} className="img-thumbnail" style={{ height: "200px", width: "200px" }} />
                        <h5 className="p-2 text-white"><b>STUDENT LOGIN</b></h5>
                    </div>
                    <div className="col  mt-5 mr-5 shadow p-2" onClick={() => window.location.href = '/Clogin'}>
                        <img src={'images/company.avif'} className="img-thumbnail" style={{ height: "200px", width: "200px" }} />
                        <h5 className="p-2 text-white"><b>COMPANY LOGIN</b></h5>
                    </div>
                </div>
            </div>
            <footer class="text-center text-white border-top bg-transparent "><b>Copyright &copy; VIT-CHENNAI</b></footer>
        </div>
    )
}
export default HomePage;