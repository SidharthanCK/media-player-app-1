import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
       <Navbar className="bg-dark">
        <Container>
          
          <Navbar.Brand href="/">
          <Link to={'/'} style={{textDecoration:'none',fontWeight:"20px" }}>
          <i class="fa-solid fa-circle-play fa-bounce me-3"></i>
          Media Player 
          </Link>
         
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </div> 
  ) 
}

export default Header
