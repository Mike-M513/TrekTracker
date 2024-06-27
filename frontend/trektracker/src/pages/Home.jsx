import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h1>Home</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <Link to="/tracker">
                            <Button type="button" className="btn btn-primary btn-lg btn-block">    
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                                <br></br>
                                Manage Tracker
                            </Button>
                        </Link>
                    </div>
                    <div className="col">
                        <Button type="button" className="btn btn-primary btn-lg btn-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                        </svg>
                        <br></br>
                        Explore Parks
                        </Button>
                    </div>
                </div>
            </div>
            
        </>
    )
}