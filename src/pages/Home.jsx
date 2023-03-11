import {React, useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {

    const [houses, setHouses] = useState(null);
    const [error, setError] = useState(null);

    const getHouses = async () => {
        try {
            const response = await axios.get('https://wizard-world-api.herokuapp.com/houses')
            setHouses(response.data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getHouses()
    }, [])

    return(
        <div>
            <h1>Hogwarts Houses</h1>
            {houses && houses.map(elem => {
                return (
                    <div key={elem.id}>
                        <h2>{elem.name}</h2>
                        <h3>{elem.founder}</h3>
                        <Link to={`/houses/${elem.id}`}>See more</Link>
                    </div>
                )
            })}
            {error && <p>Not found</p>}
        </div>
    )
}

export default Home;