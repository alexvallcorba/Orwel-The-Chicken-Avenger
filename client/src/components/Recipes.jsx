import React from 'react'
import "./Recipes.css"


function Recipes() {
  return (
    <div>
      <h1 className="title">RECIPES</h1>
      <div className="recipes-container">
        <h2 className="recipe-name">Roasted Chicken</h2>
        <div className="image1">
          <a className="anchor" target="_blank" href="https://drive.google.com/file/d/16qcBTxpKpDA5eGg6Y5V2jdLul_4IVQC_/view">
            <img className="recipe-image" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634952592/portfolio/roasted-chicken-button_o9vm6u.png" alt="roasted chicken" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Recipes
