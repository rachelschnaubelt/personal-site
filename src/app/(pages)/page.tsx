import "../styles/pages/home.scss";
import Lights from "../components/Lights/Lights";
import Carousel from "../components/Carousel/Carousel";
import { createClient, CreateClientParams } from "contentful";

export default async function Home() {
  // const clientProps: CreateClientParams = {
  //     space: process.env.CONTENTFUL_SPACE_ID!,
  //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
  //   }
  //   const client = createClient(clientProps);
  
  //   const pageQueryParams = {
  //     content_type: "page",
  //     'fields.slug[in]': 'home'
  //   };
  
  //   const results = await client.getEntries(pageQueryParams);

  return (
    <section className="page page__home">
      <Lights />
      <div className="blurb">
      <Carousel />
      </div>
    </section>  
  );
}
