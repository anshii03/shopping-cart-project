import { Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import styles from './CartItem.module.css';
import { CartButton } from "./CartButton/CartButton"

export function NavBar() {
    return (
        <NavBarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" > Home </NavLink>
                    <NavLink to="/About" > About </NavLink>
                    <NavLink to="/Store"> Store </NavLink>
                </Nav>
                <CartButton />
            </Container>
        </NavBarBs>
    )
}