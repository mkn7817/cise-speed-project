import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateSearch = () => navigate("/search");

  const navigateSubmit = () => navigate("/CreateBook.js");


  const navigateModeratorPage = () => navigate("/moderator");
 

  return (
    <div className="titleContainer">
      <h1 className="title-text">SPEED</h1>
      <div className="buttonContainer">
        <button id="homeSearchButton" onClick={navigateSearch}>
          <h6 className="text">Search Articles</h6>
        </button>
        <button id="homeSubmitButton" onClick={navigateSubmit}>
          <h6 className="text">Submit Article</h6>
        </button>
        <button id="moderatorButton" onClick={navigateModeratorPage}>
          <h6 className="text">Moderate Articles</h6>
        </button>
      </div>
    </div>
  );
};
export default HomePage;