import './App.css';
import {Navbar,Container,Nav,NavDropdown,Carousel,Button} from 'react-bootstrap';
import LoginModal from './login/loginModal'
import opLogo from '../resources/op_logo.png';
import React,{useState} from 'react';
function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={"data:image/png;base64,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"}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="OP Logo"
          />
          Kent Vincent's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginRight:"auto"}}>
            <Nav.Link href="#features">Experience</Nav.Link>
            <Nav.Link href="#pricing">About me</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Library Automation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Virtual Job Fair</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Engagement Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clinic Application</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="primary" className="m-1" onClick={() => setModalShow(true)}>Login</Button>
            <Button variant="primary" className="m-1">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="container-fluid mt-2">
        <LoginModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:"90vh"}}
              src="https://deih43ym53wif.cloudfront.net/coron-palawan-philippines-shutterstock_329793749_e5794636b7.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>It's more fun in the Philippines</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:"90vh"}}
              src="https://www.state.gov/wp-content/uploads/2019/04/Philippines-2196x1406.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>More than the Usual</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:"90vh"}}
              src="https://dsvsbigncb06y.cloudfront.net/site/diving/philippines/liveaboard-philippines-coron-palawan-xxl.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Wow Philippines</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
