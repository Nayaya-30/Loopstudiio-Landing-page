// import { useState } from "react";

// const [isAlive, setIsAlive] = useState(false);
// const toggleIsActive = () => {
//     setIsAlive(!isAlive);
// }

export const Footer = () => {
   return (
        <footer className='footer'>
            <Nav />
            <div className={'media'}>
                <ul className={'media_list'}>
                   {['facebook', 'twitter', 'pinterest', 'instagram'].map(name => (
                        <Media key={name} logo={name} />
                     ))}
                </ul>

                <p>© 2021 LoopStudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export const Nav = () => {
    const linkTexts = ["About", "Careers", "Events", "Products", "Support"];
    return (
        <div className={'nav'}>
            <img className={'nav_logo'} src={'./images/logo.svg'} alt={'Logo'} />

            <ul className="nav_list">
                {linkTexts.map((txt) => (
                    <NavLink key={txt} text={txt} />
                ))}
            </ul>
        </div>
    )
}
const NavLink = (props) => {
    return (
            <li className={'nav-item'}>
                <a className={'nav_link'} href={'#'}>{props.text}</a>
            </li>
    )
}

const Media = ({logo}) => {
    return (
            <li className={'media_item'}>
                <a className={'media_link'} href={'#'}>
                    <img className={'media_logo'} src={`./images/icon-${logo}.svg`} alt={logo} />
                </a>
            </li>
    )
}

