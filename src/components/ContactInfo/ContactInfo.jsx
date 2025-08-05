import "./ContactInfo.css"
import emailIcon from "../../media/images/emailIcon.png"
import phoneI from "../../media/images/phoneI.png"
import locationI from "../../media/images/locationi.png"
import github from "../../media/images/github.png"
import linkedinI from "../../media/images/linkedinI.png"


export const ContactInfo = ({ summary, location, email, phone }) => {
    return (
        <div className="contact-info">

            <div className="info">
                <p><img src={emailIcon} alt="icono de email" />{email}</p>
                <p><img src={phoneI} alt="icono de teléfono" />{phone}</p>
                <p><img src={locationI} alt="icono de localización" />{location}</p>
            </div>

            <div className="info-img-summary">
                <div>
                    <a href="https://github.com/laura-gavilan">
                        <img src={github} alt="icono de GitHub" />
                    </a>

                    <img src={linkedinI} alt="icono de Linkedin" />
                </div>

                <div>
                    <p>{summary}</p>
                </div>
            </div>
        </div>

    );
};