import "../../styles/pages/home.scss";
import Lights from "../../components/Lights/Lights";
import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/Button/Button";

export default async function Home() {
  
  return (
    <section className="page page__professional">
      <Lights />
      <div className="background-blur">
      <Carousel />
      </div>
    </section>  
  );
}
