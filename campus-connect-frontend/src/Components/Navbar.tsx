import { useTheme } from "../Context/ThemeContext"
import { SunOutlined, MoonOutlined} from '@ant-design/icons';

type NavbarProps = {
    onHamburgerClick: () => void;
    isOpen: boolean;
    currentPageName: string;
}

export default function Navbar({ onHamburgerClick, isOpen, currentPageName }: NavbarProps) {

    const { theme, toggleTheme } = useTheme();

    return (
        <header className="navbar">
            <button
                className="hamburger"
                onClick={onHamburgerClick}
            >
                {isOpen ? <>✕</> : <>☰</>}
            </button>
            <>CampusConnect ⟩⟩ {currentPageName}</>
            
            <button
                onClick={toggleTheme}
                className="ml-auto px-2 py-1 rounded bg-transparent text-white cursor-pointer"
            >
                {theme === "light" ? <MoonOutlined /> : <SunOutlined />}
            </button>
        </header>
    )
}