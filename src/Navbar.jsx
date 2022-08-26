import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

import { Button, Container, Row,Col } from 'react-bootstrap';
const Navbar = () => {
    return (


        <nav className = "navbar" style={{ position: 'fixed', top:'10px',width:'100%',left:'1px',right:'2px'}}>
          <Link to="/" style={{fontSize: '14px',textDecoration: 'none',color:'gray'}}>
          <Spline style={{width:'60px',height:'auto'}} scene="https://prod.spline.design/uUaxIE8WEGyhXe3x/scene.splinecode" />
         
                </Link>
         <Container>       <div className="links">

                <Col>
                <Row>
            
                <Link to="/api" style={{fontSize: '14px',textDecoration: 'none',color:'gray'}} > Home</Link>
                <Link to="/" style={{fontSize: '14px',textDecoration: 'none',color:'gray'}}> Inicio</Link>
                
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius: "5px",
                    fontSize: '14px'
                }}>Novo Blog</Link>
                </Row>
            </Col>
            </div>
            </Container>
        </nav>
        
      );
}
 

export default Navbar;