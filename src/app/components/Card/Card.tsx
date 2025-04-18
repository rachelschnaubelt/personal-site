import Image from "next/image";
import Heading from "../Heading/Heading";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./Card.scss";

interface cardProps {
    item: string
}

const Card = ({item}: cardProps) => {
    const cardData = JSON.parse(item).fields;
    const {heading, bodyText, image} = cardData;

    return (
      <div className="card">
        <div className="card__image-wrapper">
          <Image 
              src={`https:${image.fields.file.url}`} 
              alt={image.fields.description} 
              width={image.fields.file.details.image.width} 
              height={image.fields.file.details.image.height}
              className="card__image"/>
        </div>
        <Heading 
            level={3} 
            text={heading} 
            className="card__heading"/>
        <div className="card__body">
            {documentToReactComponents(bodyText)}
        </div>
      </div>
    )
}

export default Card;