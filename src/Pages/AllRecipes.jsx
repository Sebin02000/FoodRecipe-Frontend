/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/Db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center">
          <MdRestaurantMenu /> All Recipes
        </h1>
        <Link to="/yourrecipes">
          <button className="btn btn-primary">Your Recipes</button>
        </Link>
      </div>{" "}
      <div className="row py-4">
        {recipes.map((recipe, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="card-img-top"
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{recipe.title}</h5>
                <p className="text-center text-muted">
                  {recipe.reviews} Reviews / {recipe.rating} Average
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
