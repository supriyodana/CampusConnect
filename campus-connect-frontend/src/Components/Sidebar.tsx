type SidebarProps = {
    isOpen: boolean;
    onSelect: () => void;
}

export default function Sidebar({ isOpen, onSelect }: SidebarProps) {
    return (
        <aside
            className={`sidebar ${isOpen ? "open" : ""}`}
        // aria-hidden={!isOpen}
        >
            <nav aria-label="Primary">
                <ul>
                    <li><button className="sidebar-item" onClick={onSelect}>sidebar option1</button></li>
                    <li><button className="sidebar-item" onClick={onSelect}>sidebar option2</button></li>
                    <li><button className="sidebar-item" onClick={onSelect}>sidebar option3</button></li>
                </ul>
            </nav>
        </aside>
    );
}