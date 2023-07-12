import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
    const [coworkings, setCoworkings] = useState([]);

    // je créé une fonction qui va faire un appel fetch
    // sur mon api
    const fetchCoworkings = async () => {
        // je fais un appel fetch sur mon api
        if (coworkings.length === 0) {
            const coworkingsResponse = await fetch("/coworkings.json");
            const coworkingsData = await coworkingsResponse.json();

            // si la variable coworkings est vide
            // je stocke dans la variable coworkings
            // les coworkings récupérés depuis l'api
            // ça provoque un rechargement du composant

            setCoworkings(coworkingsData);
        }
    };


    fetchCoworkings()

    const [city, setCity] = useState("New York");

    const handleClick = (value) => {
        setCity(value);
    };



    const coworkingsFiltered = coworkings.filter((coworking) => {
        if (city === null) {
            return true;
        }

        return coworking.address === city;
    });

    return (
        <section>
            <h2>Liste des coworkings</h2>

            <button onClick={() => handleClick("New York")}>Bordeaux</button>
            <button onClick={() => handleClick("Chicago")}>Mérignac</button>
            <button onClick={() => handleClick("Los Angeles")}>Lormont</button>
            <button onClick={() => handleClick("Washington")}>Eysines</button>

            <button onClick={() => handleClick(null)}>Tous</button>

            {coworkingsFiltered.map((coworking) => {
                return (
                    <article>
                        <ShowCoworking coworking={coworking} />
                    </article>
                );
            })}
        </section>
    );
};

export default ListCoworkings;