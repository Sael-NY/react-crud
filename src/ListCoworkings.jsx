import { useState } from "react";

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
            address: "Toronto",
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
            address: "Saint-Etienne (miskine)",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
    ];

    const [filter, setFilter] = useState("New York")

    const handleFilterClickNewYork = () => {
        setFilter("New York")
    }

    const handleFilterClickToronto = () => {
        setFilter("Toronto")
    }

    const handleFilterClickLosAngeles = () => {
        setFilter("Los Angeles")
    }

    const handleFilterClickSaintEtienne = () => {
        setFilter("Saint-Etienne (miskine")
    }



    const filteredCoworkings = coworkings.filter((coworking) => {
        return coworking.address === filter;
    })
    return (
        <section>
            <h2>Les listes des viilles</h2>
            <button onClick={handleFilterClickNewYork}>New York</button>
            <button onClick={handleFilterClickToronto}>Toronto</button>
            <button onClick={handleFilterClickLosAngeles}>Los Angeles</button>
            <button onClick={handleFilterClickSaintEtienne}>Saint Etienne(miskine)</button>


            {filteredCoworkings.map((coworking) => {
                return (
                    <article key={coworking.id}>
                        <h3>{coworking.name}</h3>
                        <p>{coworking.address}</p>
                        <p>{coworking.phone}</p>
                        <img src={coworking.img} alt={coworking.name} />
                    </article>
                )

            })}
        </section>
    );
};

export default ListCoworkings;