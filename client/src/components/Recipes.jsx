import React from 'react'
import "./Recipes.css"


function Recipes() {
  return (
    <div>
      <h1 className="title">RECIPES</h1>
      <div className="recipes-container">
        
        <div className="image1">
          <a className="anchor" target="_blank" href="https://drive.google.com/file/d/1Sy49E8yEx5B710hD9NP3mtFmMKhh1qJS/view?usp=sharing">
            <img className="recipe-image" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634953557/portfolio/fried-chicken_button_lowqg2.png" alt="fried chicken" />
          </a>
        </div>
        <div className="image1">
          <a className="anchor" target="_blank" href="https://drive.google.com/file/d/16qcBTxpKpDA5eGg6Y5V2jdLul_4IVQC_/view">
            <img className="recipe-image" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634952592/portfolio/roasted-chicken-button_o9vm6u.png" alt="roasted chicken" />
          </a>
        </div>
        <div className="image1">
          <a className="anchor" target="_blank" href="https://drive.google.com/file/d/1dFtdS6VLKq13wFzEsFb3RtxkxKuAM2mD/view?usp=sharing">
            <img className="recipe-image" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634954191/portfolio/chicke-soup-button_jq340l.png" alt="chicken noodles soup" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Recipes
