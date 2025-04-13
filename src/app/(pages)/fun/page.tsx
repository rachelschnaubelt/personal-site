import "../../styles/pages/home.scss";
import Lights from "../../components/Lights/Lights";
import Button from "@/app/components/Button/Button";


export default async function Home() {
  
  return (
    <section className="page page__fun">
      <Lights />
      <div className="background-blur">
        <Button link="./fun/generators">Generators</Button>
      </div>
    </section>  
  );
}