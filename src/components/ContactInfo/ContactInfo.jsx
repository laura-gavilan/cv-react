import "./ContactInfo.css"
import emailIcon from "../../media/images/emailIcon.png"
import phoneIcon from "../../media/images/phoneIcon.png"
import locationIcon from "../../media/images/locationIcon.png"
import github from "../../media/images/github.png"
import linkedin from "../../media/images/linkedin.png"


export const ContactInfo = ({ summary, location, email, phone }) => {
    return (
        <div className="contact-info">
            
            <p><img src={emailIcon} alt="icono de email"/>{email}</p>
            <p><img src={phoneIcon} alt="icono de teléfono" />{phone}</p>
            <p><img src={locationIcon} alt="icono de localización" />{location}</p>

            <div>
                <a href="https://github.com/laura-gavilan">
                    <img src={github} alt="icono de GitHub" />
                </a>

                <img src={linkedin} alt="icono de Linkedin" />
            </div>

            <div className="summary">
                <p>{summary}</p>
            </div>
        </div>
    );
};