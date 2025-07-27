export const ContactInfo = ({ summary, location, email, phone }) => {
    return (
        <div className="contact-info">
            <h2>{summary}</h2>
            <p>Localización: {location}</p>
            <p>Email:{email}</p>
            <p>Teléfono:{phone}</p>

            <div>
                <img src="./src/media/images/github.png" alt="icono de GitHub" />

                <img src="./src/media/images/linkedin.png" alt="icono de Linkedin" />
            </div>
        </div>
    );
};