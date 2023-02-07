import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Example(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div style={{ width: "100%", backgroundColor: "rgb(245, 240, 240)" }}>
            <Navbar color="faded" light>
                <NavbarBrand className="me-auto">
                    {props.name}
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-0" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink >Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink >
                                Qualification
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;