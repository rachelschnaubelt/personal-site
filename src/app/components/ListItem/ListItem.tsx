import './ListItem.scss';

interface RoleProps {
    className?: string,
    children: React.ReactNode
}

export default function ListItem({className = "", children}: RoleProps) {
    
    return (
        <li className={`list-item ${className}`}>
            <span>
                {children}
            </span>
        </li>
    );
}