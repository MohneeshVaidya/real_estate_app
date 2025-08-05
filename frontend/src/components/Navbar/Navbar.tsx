import { Link } from "react-router"
import s from "./styles.module.scss"

const links = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "About", to: "/about" },
    { id: 3, text: "Contact", to: "/contact" },
    { id: 4, text: "Agents", to: "/agents" },
]

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.left}>
                <Link to="/" className={s.logo}>
                    <img src="/logo.png" alt="logo" />
                    <span>LamaEstate</span>
                </Link>
                <div className={s.links}>
                    {links.map((link) => {
                        return (
                            <Link key={link.id} to={link.to}>
                                {link.text}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className={s.right}>
                <Link to="/sign-in">Sign in</Link>
                <Link to="/sign-up" className={s.signupBtn}>
                    Sign up
                </Link>
            </div>
        </nav>
    )
}
