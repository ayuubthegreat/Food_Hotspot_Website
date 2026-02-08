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
    const funcArr = [
        () => {setRevealed(false)}
    ]
    return (
        <Link onClick={() => {funcArr[func]()}} to={link}>{text}</Link>
    )
}

export const Navbar = () => {
    const [revealed, setRevealed] = useState(false);
    const Navbar_Links = () => {
        return (
            <>
            <Custom_Link func={0} link={"/about"} text={"About"} />
                <Custom_Link func={0} link={"/tenant"} text={"Tenant Housing"}/>
                <Custom_Link func={0} link={"/food_request"} text={"Food Request Form"}/>
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