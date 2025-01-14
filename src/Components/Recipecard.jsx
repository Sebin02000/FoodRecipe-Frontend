/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Recipecard({ title, image, recipelink }) {

  return (
    <div>
<MDBCard >
      <MDBCardImage src={image} style={{ height: "300px", objectFit: "cover" }} position='top' alt='...' />
      <MDBCardBody className='text-center'>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBBtn href={recipelink}>View</MDBBtn>
      </MDBCardBody>
    </MDBCard> 
    </div>

     )
}

export default Recipecard