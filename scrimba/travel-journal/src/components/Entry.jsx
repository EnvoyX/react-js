/* eslint-disable react/prop-types */
import markerLogo from "../assets/marker.png";
/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 *
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 *
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export const Entry = (props) => {
  console.log(props);
  return (
    // Pass in a lot of props
    // <article className="journal-entry">
    //   <div className="main-image-container">
    //     <img
    //       className="main-image"
    //       src={props.image.src}
    //       alt={props.image.alt}
    //     />
    //   </div>
    //   <div className="info-container">
    //     <img className="marker" src={markerLogo} alt="" />
    //     <span className="country">{props.country}</span>
    //     <a href={props.googleMaps}>View on Google Maps</a>
    //     <h2 className="entry-title">{props.entryTitle}</h2>
    //     <p className="entry-date">{props.entryDate}</p>
    //     <p className="entry-text">{props.entryText}</p>
    //   </div>
    // </article>

    // OR

    // Pass in as one object prop "entry"
    // <article className="journal-entry">
    //   <div className="main-image-container">
    //     <img
    //       className="main-image"
    //       src={props.entry.img.src}
    //       alt={props.entry.img.alt}
    //     />
    //   </div>
    //   <div className="info-container">
    //     <img className="marker" src={markerLogo} alt="" />
    //     <span className="country">{props.entry.country}</span>
    //     <a href={props.entry.googleMapsLink}>View on Google Maps</a>
    //     <h2 className="entry-title">{props.entry.title}</h2>
    //     <p className="entry-date">{props.entry.dates}</p>
    //     <p className="entry-text">{props.entry.text}</p>
    //   </div>
    // </article>

    // OR
    // PASS in with spread object {...entry} / or {...objectName}
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={markerLogo} alt="" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-date">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
};
