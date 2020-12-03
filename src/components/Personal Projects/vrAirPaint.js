import React from "react";

const VRAirPaint = () => {
  return (
    <div className="work">
      <img
        className="workImage"
        src="https://i.pinimg.com/originals/8f/ad/12/8fad125b8f6082bdb7deb0aa593dfb49.jpg"
        alt="coastGuard"
      />
      <div className="workDescription">
        <h2>Virtual Air Paint</h2>
        <h3>Description</h3>
        <ul>
          <li>
            This python application allows people to draw object in air. The
            application uses image processing algorithms to find the HSV colour
            model of the captured image to isolate green objects in a frame. The
            cordinates of the contours is used to draw lines on the frame,
            making the illusion that the user is drawing in air.
          </li>
          <h3>Future Work</h3>
          <li>
            Impliment in a web/ mobile app which could allow users to draw
            objects in a virtual meeing.
          </li>
          <li>
            Use the application in camera application to easily allow users to
            make long exposure light painting like in the image below
          </li>
        </ul>
        <div className="logoImage">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKE5n8kjLnZiVXM1neqyYWilJ2F-ka9V3duw&usqp=CAU"
            alt="coastGuard"
          />
          <img
            className="logo"
            src="https://3.bp.blogspot.com/-yvrV6MUueGg/ToICp0YIDPI/AAAAAAAAADg/SYKg4dWpyC43AAfrDwBTR0VYmYT0QshEgCPcBGAYYCw/s1600/OpenCV_Logo.png"
            alt="coastGuard"
          />
        </div>
      </div>
    </div>
  );
};

export default VRAirPaint;
