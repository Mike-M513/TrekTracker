import ListVisitedParks from "../components/ListVisitedParks";

export default function Tracker() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Tracker</h1>
                        <h2>User Activity</h2>
                    </div>
                </div>
                <div className="row">
                    <ListVisitedParks />
                </div>
            </div>
            
        </>
    )
}