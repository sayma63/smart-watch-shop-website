import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
   
     <>
     <Navbar className='nav' expand="lg"sticky='top'>
     <Container>
 
    <Navbar.Brand ><Link to='/'className='text-decoration-none me-4 fs-4'><span className='text-color'>Smart Watch</span></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='ms-5' >
     
      <Nav.Link as={Link} to="/" className='text-decoration-none me-4 fs-4 link-hover'>
                                Home
                            </Nav.Link>
      <Nav.Link as={Link} to="/review" className='text-decoration-none me-4 fs-4 link-hover'>
                                Reviews
                            </Nav.Link>
      <Nav.Link as={Link} to="/dashboard" className='text-decoration-none me-4 fs-4 link-hover'>
                                Dashboard
                            </Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='text-decoration-none me-4 fs-4 link-hover'>
                                Blogs
                            </Nav.Link>
      <Nav.Link as={Link} to="*" className='text-decoration-none me-4 fs-4 link-hover'>
                                About
                            </Nav.Link>
      
        {/* <Link to='/' className='text-decoration-none me-4 fs-4 link-hover'>Home</Link>
 
        <Link to='/review'className='text-decoration-none me-4 fs-4 link-hover'>Reviews</Link>
        <Link to='/dashboard'className='text-decoration-none me-4 fs-4 link-hover'>Dashboard</Link>
        <Link to='/blogs' className='text-decoration-none me-4 fs-4 link-hover'>Blogs</Link>
        <Link to='*'className='text-decoration-none me-4 fs-4 link-hover'>About</Link> */}
        
       
      </Nav>
      </Navbar.Collapse>
      </Container>
    
  
</Navbar>
 
</>
  
    );
};

export default Header;