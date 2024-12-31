/* eslint-disable react/prop-types */
import phone from "../images/phone-icon.png";
import mail from "../images/mail-icon.png";

// export const Contact = (props) => {
//   console.log(props);
//   return (
//     <article className="contact-card">
//       <img src={props.imgCat} alt={`Photo of ${props.name}`} />
//       <h3>{props.name}</h3>
//       <div className="info-group">
//         <img src={phone} alt="phone icon" />
//         <p>{props.phoneNumber}</p>
//       </div>
//       <div className="info-group">
//         <img src={mail} alt="mail icon" />
//         <p>{props.email}</p>
//       </div>
//     </article>
//   );
// };

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

//  OR

// WE CAN DESTRUCTURING PROPS
// into exactly the prop's name

//EXAMPLE: export const Contact = ({ imgCat, name, phoneNumber, email }) => {
//   return ()
//}

// Alternative (my usual habit to utilize props)
// export const Contact = ({ imgCat, name, phoneNumber, email }) => {
//   return (
//     <article className="contact-card">
//       <img src={imgCat} alt={`Photo of ${name}`} />
//       <h3>{name}</h3>
//       <div className="info-group">
//         <img src={phone} alt="phone icon" />
//         <p>{phoneNumber}</p>
//       </div>
//       <div className="info-group">
//         <img src={mail} alt="mail icon" />
//         <p>{email}</p>
//       </div>
//     </article>
//   );
// };
