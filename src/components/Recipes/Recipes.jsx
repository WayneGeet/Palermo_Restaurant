import React from 'react';
import "./Recipes.css"


const Recipes = ({title, image, calories}) => {
  return (
    <div className="Recipes">
      <section className="card">
          <h1 className="title">{title}</h1>
          <div className="image-wrapper">
              <img src={image} alt="" />
          </div>
          <p className="recipes">{calories}</p>
          
        </section>  
      
    </div>
  )
}

export default Recipes;