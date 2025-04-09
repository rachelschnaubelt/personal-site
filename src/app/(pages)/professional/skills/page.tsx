import { createClient, CreateClientParams } from 'contentful';
import SkillList from '@/app/components/SkillList/SkillList';


export default async function Skills() {
  const clientProps: CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
  }
  const client = createClient(clientProps);

  const skillQueryParams = {
    content_type: "technicalSkills"
  };

  const skillResults = await client.getEntries(skillQueryParams);

    return (
      <section className="page page__skills">
        {skillResults.items?.map((item, index) => (
          <SkillList key={`skill-list-${index}`} item={JSON.stringify(item)}/>
          ))}
      </section>  
    );
  }