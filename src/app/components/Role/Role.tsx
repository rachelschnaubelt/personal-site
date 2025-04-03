import Heading from "../Heading/Heading";
import ListItem from "../ListItem/ListItem";
import "./Role.scss";
import Accordion from "../Accordion/Accordion";

interface RoleProps {
    item: string
}

interface HighlightProp {
    icon: string,
    text: string
}

export default function Role({item}: RoleProps) {
    let role = JSON.parse(item);
    const {company, endingDate, location, responsibilities, roleTitle, startingDate } = role.fields;

    return (
        <div className={`role`}>
            <Accordion heading={roleTitle}>
                <div className="role__details">
                    <p>{company} | {location}</p>
                    <p>{startingDate} - {endingDate}</p>
                </div>
                <Heading level={4} text="Responsibilities and Highlights" />

                <ul className="role__highlights">
                    {responsibilities.map((resp: any, index: number) => (
                        <ListItem key={index} className={`role__highlight ${resp.fields.bulletStyle}`}>{resp.fields.description}</ListItem>
                    ))}
                </ul>
            </Accordion>
        </div>
    );
}