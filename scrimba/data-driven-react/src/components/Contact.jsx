/* eslint-disable react/prop-types */
import phone from "../images/phone-icon.png";
import mail from "../images/mail-icon.png";

export const Contact = ({ imgCat, name, phoneNumber, email }) => {
  return (
    <article className="contact-card">
      <img src={imgCat} alt={`Photo of ${name}`} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phone} alt="phone icon" />
        <p>{phoneNumber}</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>{email}</p>
      </div>
    </article>
  );
};
