/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { MdRestaurantMenu } from "react-icons/md";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,MDBInput
  } from 'mdb-react-ui-kit';
function ViewYourRecipe() {
    const [staticModal, setStaticModal] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeImage, setRecipeImage] = useState("");
    const [recipeFile, setRecipeFile] = useState(null);
  const toggleAddRecipe = () => setStaticModal(!staticModal);
  const handleSave = () => {
    console.log("Recipe Title:", recipeTitle);
    console.log("Recipe Image URL:", recipeImage);
    console.log("Recipe File:", recipeFile);

    toggleAddRecipe();
  };
  return (
    <div className="container p-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
        <h1> <MdRestaurantMenu/>Your Recipes</h1>
        <div>
          <button className="btn btn-success me-2" onClick={toggleAddRecipe}>Add Recipe</button>
        </div>
      </div>
      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Recipe</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleAddRecipe}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBInput
                label="Recipe Title"
                id="recipeTitle"
                type="text"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
                className="mb-4"
              />
              <MDBInput
                label="Recipe Image URL"
                id="recipeImage"
                type="text"
                value={recipeImage}
                onChange={(e) => setRecipeImage(e.target.value)}
                className="mb-4"
              />
              <MDBInput
                label="Browse File"
                id="recipeFile"
                type="file"
                onChange={(e) => setRecipeFile(e.target.files[0])}
                className="mb-4"
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleAddRecipe}>
                Close
              </MDBBtn>
              <MDBBtn>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default ViewYourRecipe