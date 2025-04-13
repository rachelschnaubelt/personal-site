import "@/app/styles/pages/home.scss";
import Lights from "@/app/components/Lights/Lights";
import { createClient, CreateClientParams } from "contentful";
import Generator from "@/app/components/Generator/Generator";


export default async function Generators() {

    const clientProps: CreateClientParams = {
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
      }
      const client = createClient(clientProps);
    
      const generatorQueryParams = {
        content_type: "generator"
      };
    
      const generatorResults = await client.getEntries(generatorQueryParams);
  
  return (
    <section className="page page__generators">
      <Lights />
      <div className="background-blur">
        {generatorResults.items?.map((item, index) => (
            <Generator key={index} generatorContent={JSON.stringify(item)}/>
        ))}
      </div>
    </section>  
  );
}