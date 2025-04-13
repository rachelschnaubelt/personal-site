import { createClient, CreateClientParams } from 'contentful';
import ComponentLoop from '@/app/utilities/ComponentLoop/ComponentLoop';


export default async function Skills() {

  const clientProps: CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
  }
  const client = createClient(clientProps);

  const pageParams = {
    content_type: "page",
    "fields.slug[in]": "skills"
  }
  const pageResults = await client.getEntries(pageParams)
  .then(pageResults => {
    return pageResults.items[0].fields;
  });
  const {header, pageContent}: {header: JsonObject, pageContent: JsonObject} = pageResults;

    return (
      <section className="page page__skills">
        <ComponentLoop pageContent={pageContent}/>
      </section>  
    );
  }