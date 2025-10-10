import "../Skills/styles.css";
import { FaJava, FaReact, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiElasticsearch,
  SiContentstack,
  SiGooglecloud,
  SiFastly,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">

        {/* Programming Languages */}
        <div className="skills-card">
          <h3>Programming Languages</h3>
          <div className="skills-icons">
            <FaJava size={40} title="Java" color="#007396" />
            <SiJavascript size={40} title="JavaScript" color="#F7DF1E" />
            <SiTypescript size={40} title="TypeScript" color="#3178C6" />
            <SiPython size={40} title="Python" color="#3776AB" />
          </div>
        </div>

        {/* Web Development */}
        <div className="skills-card">
          <h3>Web Development</h3>
          <div className="skills-icons">
            <FaReact size={40} title="ReactJS" color="#61DBFB" />
            <SiNextdotjs size={40} title="Next.js" color="#000000" />
            <SiRedux size={40} title="Redux" color="#764ABC" />
            <SiHtml5 size={40} title="HTML5" color="#E34F26" />
            <SiCss3 size={40} title="CSS3" color="#1572B6" />
            <SiSpringboot size={40} title="Spring Boot" color="#6DB33F" />
            <span className="tech-text">Dropwizard</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-card">
          <h3>Databases</h3>
          <div className="skills-icons">
            <SiMysql size={40} title="MySQL" color="#4479A1" />
            <SiPostgresql size={40} title="PostgreSQL" color="#336791" />
            <SiMongodb size={40} title="MongoDB" color="#47A248" />
          </div>
        </div>

        {/* Search & CMS */}
        <div className="skills-card">
          <h3>Search & CMS</h3>
          <div className="skills-icons">
            <SiElasticsearch size={40} title="Elasticsearch" color="#005571" />
            <SiContentstack size={40} title="Contentstack" color="#FF4F00" />
            {/* Magnolia doesn’t have an icon in react-icons, so listing it as text */}
            <span className="tech-text">Magnolia</span>
          </div>
        </div>

        {/* Cloud */}
        <div className="skills-card">
          <h3>Cloud</h3>
          <div className="skills-icons">
            <FaAws size={40} title="AWS" color="#FF9900" />
            <SiGooglecloud size={40} title="Google Cloud" color="#4285F4" />
            <SiFastly size={40} title="Fastly" color="#FF282D" />
          </div>
        </div>

        {/* CI/CD & Tools */}
        <div className="skills-card">
          <h3>CI/CD & Tools</h3>
          <div className="skills-icons">
            <FaGitAlt size={40} title="Git" color="#F1502F" />
            <FaGithub size={40} title="GitHub" color="#181717" />
            {/* Concourse CI doesn’t have a react-icon, so listing as text */}
            <span className="tech-text">Concourse CI</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
