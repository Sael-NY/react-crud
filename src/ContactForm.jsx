import { useState } from "react";

const ContactForm = () => {
    const [monContact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        setContact({
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            message: event.target.message.value,
        });
    };

    return (

        <section>


            <h3>Formulaire</h3>
            <form onSubmit={handleSubmit}>


                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" />

                <label htmlFor="lastName">Nom</label>
                <input type="text" name="lastName" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea name="message" />
                <button type="submit">Envoyer</button>

                <p>
                    C'est bien !
                    {monContact.firstName} {monContact.lastName}
                </p>
            </form>
        </section>
    )
}
export default ContactForm;