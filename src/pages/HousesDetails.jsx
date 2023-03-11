import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HouseDetails = () => {

    const { housesId } = useParams();
    const [house, setHouse] = useState(null);
    const [error, setError] = useState(null);

    const getHouse = async () => {
        try {
            const response = await axios.get(`https://wizard-world-api.herokuapp.com/houses/${housesId}`)
            console.log(response)
            setHouse(response.data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getHouse()
        // eslint-disable-next-line
    },[])

    return (
        <div>
           {house && 
           <div>
           <h1>{house.name}</h1>
           <h2>Founded by: {house.founder}</h2>
           <p>Colors: {house.houseColours}</p>
           <p>Element: {house.element} | Animal: {house.animal}</p>
           <p>Traits of Student:</p> 
           <ul>
           {house.traits.map(elem => {

            return (
                    <li key={elem.id}>{elem.name}</li>   
            )
           })}
           </ul>
           </div>}
           {error && <h1>Not found</h1>}         
        </div>
    )
}

export default HouseDetails;