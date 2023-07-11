const CreateCoworking = () => {
    const handleSubmit = (event) =>

        event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const address = event.target.address.value;

    console.log(title + " " + description + " " + address);
};

return (
    <form onSubmit={handleSubmit}>
        <label>C'est moi Sael !</label>
        <input type="text" name="title" />

        <label>C'est encore moi Sael !</label>
        <textarea name="description" cols="30" rows="10"></textarea>

        <label>2 Rue à droite tu trouveras mon ...</label>
        <input type="text" />

        <button type="submit">Créer</button>

    </form>
)


export default CreateCoworking;