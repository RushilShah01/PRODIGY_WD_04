import React from 'react';
import './CardComponent.css'; // Make sure to import the CSS file

const CardComponent = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <img
            href="#"
            src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
            alt="Card Image"
          />
        </div>
        <div className="content">
          <h3>This is content</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
