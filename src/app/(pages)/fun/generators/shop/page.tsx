import "@/app/styles/pages/home.scss";
import { createClient, CreateClientParams } from "contentful";
import Generator from "@/app/components/Generator/Generator";
import Heading from "@/app/components/Heading/Heading";


export default async function Generators() {

    const clientProps: CreateClientParams = {
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
      }
      const client = createClient(clientProps);
    
      const generatorQueryParams = {
        content_type: "generator",
        'fields.title[in]': ["Characters", "Rooms"]
      };
    
      const generatorResults = await client.getEntries(generatorQueryParams);
  
  return (
    <section className="page page__shop">
      <div className="background-blur">
      <Heading level={3} text="Backstory" />
        {generatorResults.items?.map((item, index) => (
            <Generator key={index} generatorContent={JSON.stringify(item)}/>
        ))}
        <Heading level={3} text="Back Room" />
      </div>
    </section>  
  );
}