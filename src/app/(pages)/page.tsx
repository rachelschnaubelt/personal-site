import "../styles/pages/home.scss";
import Lights from "../components/Lights/Lights";

export default async function Home() {

  return (
    <section className="page page__home">
      <Lights />
      <div className="blurb">
        <p>Creative Senior Full Stack Developer specializing in user-facing web solutions and technical leadership.</p>
        <p>Skilled at fostering cross-team collaboration and cultivating inclusive, high-performing environments.</p>
      </div>
    </section>  
  );
}
