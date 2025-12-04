type SidebarProps = {
    isOpen: boolean;
    onSelect: (key: string) => void;
    selectedKey: string;
    items: { key: string; label: string }[];
}

export default function Sidebar({ isOpen, onSelect, selectedKey, items=[] }: SidebarProps) {
    return (
        <aside
            className={`sidebar ${isOpen ? "open" : ""}`}
        // aria-hidden={!isOpen}
        >
            <nav aria-label="Primary">
                <ul>
                    {items.map(({ key, label }) => (
                        <li key={key}>
                            <button
                                className={`sidebar-item ${selectedKey === key ? "active" : ""}`}
                                onClick={() => onSelect(key)}>
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}