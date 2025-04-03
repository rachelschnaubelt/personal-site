import { createClient, CreateClientParams } from 'contentful';
import Heading from '@/app/components/Heading/Heading';
import Role from '@/app/components/Role/Role';

export default async function Skills() {
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

    return (
      <section className="page page__experience">
        <Heading level={2} text="Professional Experience" />
        {roleResults.items?.map((item, index) => (
            <Role key={index} item={JSON.stringify(item)} />
          ))}
      </section>
    );
  }