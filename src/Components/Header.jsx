/* eslint-disable no-unused-vars */
import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { SiIfood } from "react-icons/si";
function Header() {
  return (
<MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <SiIfood className='fs-1 me-1 ms-4'/>
            <span className='fw-bolder fs-1'>Tasty</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>  )
}

export default Header