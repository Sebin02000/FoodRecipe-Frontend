/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Recipecard from "../Components/Recipecard";

function Home() {
  const [HomeRecipes, setHomeRecipes] = useState([]);
  const [quickRecipeVideos, setquickRecipeVideos] = useState([]);
  useEffect(() => {
    fetch("/src/Db.json")
      .then((response) => response.json())
      .then((data) => setHomeRecipes(data.HomeRecipes))
      .catch((error) => console.error("Error fetching Home Recipes:", error));
  }, []);
  useEffect(() => {
    fetch("/src/Db.json")
      .then((response) => response.json())
      .then((data) => setquickRecipeVideos(data.quickRecipeVideos))
      .catch((error) => console.error("Error fetching Home Recipes:", error));
  }, []);

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
          <h1>Tasty</h1>
          <p style={{ textAlign: "justify" }}>
            Tasty is your ultimate companion for exploring and creating
            delicious dishes! From quick meals to gourmet experiences, Tasty
            offers an extensive collection of recipes tailored to your taste and
            lifestyle. With step-by-step instructions, personalized
            recommendations, and a user-friendly interface, cooking has never
            been this simple and enjoyable. Whether you`re a beginner or a
            seasoned chef, Tasty helps you transform ingredients into
            masterpieces, one recipe at a time.
          </p>
          <Link to={"/login"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="col-6 ">
          <img src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg"></img>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-center">
          Simple recipes made for real, actual, everyday life.
        </h1>
        <div className="row p-5">
          {HomeRecipes.map((recipe, index) => (
            <div className="col-3" key={index}>
              <Recipecard
                title={recipe.title}
                image={recipe.image}
                link={recipe.link}
              />
            </div>
          ))}
        </div>
        <div className="row text-center">
          <Link to={"/allrecipes"}>
            <button className="btn btn-secondary">View All Recipes</button>
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-center">Quick and Easy Videos</h1>
        <div className="row justify-content-center p-3">
          {quickRecipeVideos.map((video, index) => (
            <div className="col-md-4 p-2" key={index}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={video.videoLink}
                  allowFullScreen
                  title={video.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                  }}
                ></iframe>
              </div>
              <h5 className="text-center mt-2">{video.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
