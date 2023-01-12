import TopBar from "../Components/TopBar/TopBar";
import { getCars } from "../API/cars";
import { Link } from "react-router-dom";
const HomePage = () => {
    const cars = getCars();
  return (
    <div>
        <TopBar></TopBar>
        <h1>Mano pagrindinis puslapis</h1>
        <ul>
            {cars.map(car => 
            <Link key={car.id} to={`/cars/${car.id}`}>
                <li style={{marginBottom:'16px'}} key={car.id} >{car.make} {car.model}</li>
            </Link>
            )}
        </ul>
    </div>
  )
}

export default HomePage