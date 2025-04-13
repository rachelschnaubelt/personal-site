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
                    <div>
                        <p>Creative Senior Full Stack Developer specializing in user-facing web solutions and technical leadership.</p>
                        <p>Skilled at fostering cross-team collaboration and cultivating inclusive, high-performing environments.</p>
                    </div>
        <Heading level={3} text="My Why" />
        <ul>
          <li>Inclusivity</li>
          <li>problem solving</li>          
          <li>collaboration over silos</li>
        </ul>
          <p>My why - Explain why you do what you do. What draws you to full-stack development? What do you love about it? What kind of problems do you like solving?</p>
        <Heading level={3} text="My Work Style" />
          <p>My work style - How do you approach development? Are you user-focused? Design-minded? Do you enjoy cross-functional collaboration? Agile environments? This helps people understand what it’s like to work with you.</p>
        <Heading level={3} text="My Journey" />
          <p>My learning journey - Share how you got started and how you’ve grown. Self-taught? Bootcamp? CS degree? Constantly learning new frameworks? This can help show your adaptability and passion.</p>
        <Heading level={3} text="Tech Stack and Tools I love" />
        <p>More personal than a resume-style list, this could include tools you geek out over and why</p>
        <Heading level={3} text="My Goals" />

          <p>What I'm looking for - If the site is meant to attract collaborators, clients, or employers, make it clear what you're open to.</p>
        <Heading level={3} text="Education" />
        <p>Bachelor's of Science - Computer Science</p>
        <p>University of North Georgia</p>
        <p>2019</p>
        <Heading level={3} text="The Fun Stuff" />
        <p>Hobbies and Interests</p>
      </section>
    );
  }