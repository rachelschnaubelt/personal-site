import Heading from "./components/Heading/Heading";
import Role from "./components/Role/Role";
import SkillList from "./components/SkillList/SkillList";
import { createClient, CreateClientParams } from 'contentful';

interface Position {
  title: string,
  company: string,
  location: string,
  startingdate: string,
  endingdate: string,
  highlights: string[]
}

export default async function Home({roles}: any) {

  const clientProps: CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
  }
  const client = createClient(clientProps);

  const roleQueryParams = {
    content_type: "role",
    order: "fields.order" 
  };

  const roleResults = await client.getEntries(roleQueryParams);

  const skillQueryParams = {
    content_type: "technicalSkills"
  };

  const skillResults = await client.getEntries(skillQueryParams);

  return (
    <>
      <p className="blurb full-width">
        Creative Senior Full Stack Developer specializing in user-facing web solutions and technical leadership.<br/>
        Skilled at fostering cross-team collaboration and cultivating inclusive, high-performing environments.
      </p>
      <section>
        {skillResults.items?.map((item, index) => (
          <SkillList key={`skill-list-${index}`} item={JSON.stringify(item)}/>
          ))}
      </section>
      <section className="experience">
        <Heading level={2} text="Experience" />
        {roleResults.items?.map((item, index) => (
            <Role key={index} item={JSON.stringify(item)} />
          ))}
      </section>
    </>  
  );
}
