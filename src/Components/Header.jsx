import {Nav} from "./Footer";
export const Header = () => {
    return (
        <header className={'header'}>
            <img className={'header-hero-img'} src={'./images/desktop/image-hero.jpg'} alt={'Hero'} />
            <Nav />

            <div className={'header-text'}>
                Immersive experiences that deliver
            </div>
        </header>
    )
}