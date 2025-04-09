import "../../styles/pages/home.scss";
import Lights from "../../components/Lights/Lights";


export default async function Home() {
  
  return (
    <section className="page page__fun">
      <Lights />
      <div className="background-blur">
      </div>
    </section>  
  );
}