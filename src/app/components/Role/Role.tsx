import Heading from "../Heading/Heading";
import ListItem from "../ListItem/ListItem";
import "./Role.scss";
import Accordion from "../Accordion/Accordion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faMapMarker, faMapMarkerAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";

interface RoleProps {
    item: string
}

export default function Role({item}: RoleProps) {
    let role = JSON.parse(item);
    const {company, endingDate, location, responsibilities, roleTitle, startingDate, companyIcon } = role.fields;

    return (
        <div className={`role`}>
            <Accordion heading={roleTitle}>
                <div className="role__details">
                    <div className="role__details--company">
                        <Image
                            src={`https:${companyIcon.fields.file.url}`} 
                            alt={companyIcon.fields.description} 
                            width={companyIcon.fields.file.details.image.width} 
                            height={companyIcon.fields.file.details.image.height}
                            className="role__details--company-icon"/>
                        <p>{company}</p>
                    </div>
                    <div className="role__details--location">
                        <FontAwesomeIcon icon={faMapLocation} className="role__details--location-icon" />
                        <p>{location}</p>
                    </div>
                    <p className="role__details--term">{startingDate} - {endingDate}</p>
                </div>
                <Heading level={4} text="Responsibilities and Highlights" className="role__highlights-heading" />

                <ul className="role__highlights">
                    {responsibilities.map((resp: any, index: number) => (
                        <ListItem key={index} className={`role__highlight`} icon={resp.fields.bulletStyle}>{resp.fields.description}</ListItem>
                    ))}
                </ul>
            </Accordion>
        </div>
    );
}