import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ListItem.scss';
import { faCode, faDotCircle, faGear, faHeart, faTerminal, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

interface RoleProps {
    className?: string,
    children: React.ReactNode,
    icon?: string
}

export default function ListItem({className = "", children, icon}: RoleProps) {
    
    const getMarker = (markerString : string) => {
        switch(markerString) {
            case "code" : {
                return faCode;
            }
            case "gear" : {
                return faGear;
            }
            case "heart" : {
                return faHeart;
            }
            case "terminal" : {
                return faTerminal;
            }
            case "user" : {
                return faUser;
            }
            case "users" : {
                return faUsers;
            }
            default : {
                return faDotCircle;
            }
        }
    }

    return (
        <li className={`list-item ${className}`}>
            <span className="list-item__marker">
                {icon && <FontAwesomeIcon icon={getMarker(icon)} />}
            </span>
            <span className="list-item__content">
                {children}
            </span>
        </li>
    );
}