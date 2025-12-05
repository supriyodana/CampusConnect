type NavbarProps = {
    onHamburgerClick: () => void;
    isOpen: boolean;
    currentPageName: string;
}

export default function Navbar({ onHamburgerClick, isOpen, currentPageName }: NavbarProps) {
    return (
        <header className="navbar">
            <button
                className="hamburger"
                onClick={onHamburgerClick}
            >
                {isOpen ? <>✕</> : <>☰</>}
            </button>
            <>CampusConnect ⟩⟩ {currentPageName}</>
        </header>
    )
}