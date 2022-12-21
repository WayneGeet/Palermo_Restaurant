import React, {useState, useEffect, useRef}from 'react';
import Recipes from "../Recipes/Recipes"
import "./Recipe.css"
import Form from "../Form/Form";
import {motion} from "framer-motion"

const Recipe = () => {

    const [recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState("");
    const [submit, setSubmit] = useState("ugali")
    const [width, setWidth] = useState(0)

    const carousel_width = useRef();

    useEffect(() =>{
      getRecipe()
      
    }, [submit])

    const getRecipe = async ()=>{
      let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=ec28ca4a&app_key=0989749593260158b2b4eccd3f104f5e`)
      let data = await response.json()
      setRecipe(data.hits)
      setSearch("")
      console.log(carousel_width.current.scrollWidth, carousel_width.current.offsetWidth)
      setWidth(carousel_width.current.scrollWidth)
    }

    const handleChange = (e)=>{
      setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      setSubmit(search)
    }
    
  
  return (
    <div className='recipe'>

      <article className="search">
        <Form find={search} function1={handleChange} form_function={handleSubmit}   />
      </article>
      
      {/* <article className="foods">
        {recipe.map((item)=>(
          <Recipes 
          key = {item.recipe.label}
          title={item.recipe.label}
          image={item.recipe.image}
          calories={item.recipe.calories}
          />
        ))}
      </article> */}

      <motion.div className="foods carousel" ref={carousel_width}>
        <motion.div drag="x" dragConstraints={{right:0, left:-width}} className="inner-carousel">
          {recipe.map(images=>{
            return(
              <motion.div className="item_food" key={images.recipe.label}>
                <img src={images.recipe.image} alt="This is an image of a food" className="food_image" />
              </motion.div>
              
            )
          })}
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Recipe;