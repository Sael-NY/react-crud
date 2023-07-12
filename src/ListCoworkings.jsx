import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
    const coworkings = [
        {
            id: 1,
            name: "Coworking 1",
            address: "New York",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Coworking 2",
            address: "Chicago",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 3,
            name: "Coworking 3",
            address: "New York",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 4,
            name: "Coworking 4",
            address: "Los Angeles",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 5,
            name: "Coworking 5",
            address: "Washington",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
    ];

    // on a ajouté un bouton sous chaque coworking pour le supprimer
    // au click sur le bouton, on récupère l'id du coworking cliqué
    // on fait un appel fetch pour supprimer le coworking

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