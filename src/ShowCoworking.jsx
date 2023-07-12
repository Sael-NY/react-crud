

const ShowCoworking = ({ coworking }) => {
    const handleDelete = (id) => {
        console.log("coworking supprimé", id)
    }
    return (

        <div>
            <article key={coworking.id}>
                <h3>{coworking.name}</h3>
                <p>{coworking.address}</p>
                <p>{coworking.phone}</p>
                <img src={coworking.img} alt={coworking.name} />
                <button onClick={() => handleDelete(coworking.id)}>Supprimer le coworking</button>
            </article>

        </div>
    );
}

export default ShowCoworking