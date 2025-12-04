type NavbarProps = {
    onHamburgerClick : () => void;
}

export default function Navbar({onHamburgerClick}: NavbarProps) {
    return (
        <header className="navbar">
            <button
            className="hamburger"
            onClick={onHamburgerClick}
            >
                ☰
            </button>
            <h2>Navbar</h2>
        </header>
    )
}