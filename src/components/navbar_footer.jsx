import { useEffect, useState } from "react"
import { STATIC_INFO } from "../../Website/STATIC_INFO"
import { Link } from "react-router-dom"
import { MenuIcon } from "lucide-react"

const Website_Clickable_Name = () => {
    return (
        <h2 onClick={() => window.location.href = "/"}>{STATIC_INFO.APP_NAME}</h2>
    )
}
const Custom_Link = ({func, link, text}) => {
    
    return (
        <Link onClick={() => {funcArr[func]()}} to={link}>{text}</Link>
    )
}

export const Navbar = () => {
    const [revealed, setRevealed] = useState(false);
    const funcArr = [
        () => {setRevealed(false)}
    ]
    const Navbar_Links = () => {
        return (
            <>
            <Link onClick={() => {funcArr[0]()}} to="/about">About</Link>
            <Link onClick={() => {funcArr[0]()}} to="/tenant">Tenant Housing</Link>
            <Link onClick={() => {funcArr[0]()}} to="/food">Food Request Form</Link>
            </>
        )
    }
    return (
        <>
        <nav>
            <div className="logo">
               <Website_Clickable_Name />
            </div>
            <button className={`dropdown_revealer ${revealed ? "open" : ""}`} onClick={() => {
                setRevealed(!revealed);
            }}>
               <MenuIcon size={40} />
            </button>
            <div className="button_row nav_btns">
               <Navbar_Links/>
            </div>
                <div className={`dropdown_btns ${revealed ? "" : "hidden"}`}>
                <Navbar_Links />
            </div>
        </nav>
        </>
    )
}
export const Footer = () => {
    return (
        <>
        <nav>
            <div className="footer">
                <div className="logo">
                    <Website_Clickable_Name />
                </div>
            </div>
        </nav>
        </>
    )
}