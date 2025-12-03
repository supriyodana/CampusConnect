export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside
            className={`sidebar ${isOpen ? "open" : ""}`}
        // aria-hidden={!isOpen}
        >
            <nav aria-label="Primary">
                <ul>
                    <li className="sidebar-item">sidebar option1</li>
                    <li className="sidebar-item">sidebar option2</li>
                    <li className="sidebar-item">sidebar option3</li>
                </ul>
            </nav>
        </aside>
    );
}