import './App.css';
import {Navbar,Container,Nav,NavDropdown,Carousel,Button} from 'react-bootstrap';
import LoginModal from './login/loginModal'
import React,{useState} from 'react';
function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{
            padding: "5px"
          }}
            src={"logo.png"}
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
              <NavDropdown.Item href="#action/3.2">Virtual Job Fair</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engagement Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Clinic Application</NavDropdown.Item>
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
