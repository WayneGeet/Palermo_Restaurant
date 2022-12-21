import React, {useState} from 'react'
import "./Search.css";

const Search = () => {

    const[foodFinder, setFoodfinder] = useState() 
  return (
    <div>
        <section className="glass">
            <article className="top-section">
                <h2>Search for a food type</h2>
            </article>

            <form className="food-finder">
                <input 
                type="text"
                placeholder="Enter Name of Food"
                value=""
                // onChange={}
            />
            </form>

        </section>
    </div>
  )
}

export default Search