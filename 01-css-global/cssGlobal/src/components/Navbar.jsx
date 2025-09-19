import { MdBrightnessMedium } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
        <nav>
            <h1>SOBRELLI</h1>
            <ul>
                <li><a><MdBrightnessMedium /></a></li>
                <li><a><MdOutlineShoppingCart /></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;