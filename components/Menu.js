import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container

} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" className="fixed-top custom-navbar">
                <Container>
                    <NavbarBrand href="/">NEXT</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sobre">Sobre</NavLink>
                            </NavItem>
                           
                            <NavItem>
                                <NavLink href="/contato">Contato</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contato">Parceiros</NavLink>
                            </NavItem>


                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Menu;