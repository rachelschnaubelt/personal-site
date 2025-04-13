import Card from "@/app/components/Card/Card";
import SkillList from "@/app/components/SkillList/SkillList";

interface componentLoopProps {
    pageContent: JsonObject
}

const ComponentLoop = ({pageContent}: componentLoopProps) => {
    return (
      <>
        {pageContent.map((item: JsonObject, index: number) => {
            const contentType = item.sys.contentType.sys.id;

            switch(contentType) {
                case "technicalSkills" :
                    return <SkillList key={`skill-list-${index}`} item={JSON.stringify(item)}/>
                case "card" :
                    return <Card key={`card-${index}`} item={JSON.stringify(item)} />
            }
            })}
      </>
    )
}

export default ComponentLoop;