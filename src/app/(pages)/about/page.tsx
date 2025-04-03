import Heading from '@/app/components/Heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import "./about.scss";

export default async function About() {

    return (
      <section className="page page__about">
        <div className="social-links">
          <Link href="https://www.linkedin.com/in/rachelschnaubelt/" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
          <Link href="https://github.com/rachelschnaubelt/" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </div>
        <Heading level={2} text="About" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus, quas quis eaque rem consequatur. Accusantium aliquam unde dolores. Enim inventore cupiditate possimus earum illum quasi error fuga consequuntur nulla?</p>
        <Heading level={3} text="Education" />
        <p>Bachelor's of Science - Computer Science</p>
        <p>University of North Georgia</p>
        <p>2019</p>
      </section>
    );
  }