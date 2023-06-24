import { Navbar, Nav } from 'react-bootstrap';
import { Container, Form, FormControl, Button} from 'react-bootstrap';

function Header(){
    return(
        <div>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="HomeUser">Final-API</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className='function'>
                        <Nav.Link href ={"/HomeUser"}>Trang chủ</Nav.Link>
                        <Nav.Link href ={'/About'}>Sản phẩm</Nav.Link>
                        <Nav.Link href ={'/About'}>Giới thiệu</Nav.Link>
                        <Nav.Link href ={"/Contact"}>Liên hệ</Nav.Link>
                       
                        </div>
                        <div className='searchs'>
                        {/* <Form inline className='research'>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form> */}
                        </div>
                        <div className='create-account ml-100px' >
                        <Nav.Link href={"/Login"}>Login </Nav.Link>
                        <Nav.Link href={"/Register"}>Register</Nav.Link>
                        </div>
                        <div className='pageuser'>
                        <Nav.Link href={'/Home'}>Trang admin</Nav.Link>
                        </div>
                        <div className='pageuser'>
                        <Nav.Link href={'/Basket'}>Giỏ hàng</Nav.Link>
                        </div>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    )
}
export default Header;