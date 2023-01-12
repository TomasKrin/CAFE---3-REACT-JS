import { useParams } from "react-router-dom";
import { getCar } from "../API/cars";
import TopBar from "../Components/TopBar/TopBar";

const CarPage = () => {
    const {id}= useParams();
    const car = getCar(Number(id));
    return (
        <div>
            <TopBar/>
            {car.make} {car.model} 
            <div>
                color: <span style={{ color:'white', backgroundColor: car.color}}>{car.color}</span>
            </div>
        </div>
  )
}
export default CarPage
