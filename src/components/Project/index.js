import '../Project/styles.css';

export default function Projects() {
  const projects = [
    {
      id: "sysco-shop",
      title: "Sysco Shop – Front-End Ordering Domain",
      period: "Mar 2024 – Present",
      role: "Senior Software Engineer (Front-End)",
      description: `I contribute to the core ordering workflow of Sysco Shop — the second-largest food selling website in the USA — where customers add items to the cart, review, and submit their orders. This flow is mission-critical: if it fails, everything stops.`,
      bullets: [
        "Ordering Workflow Development: Engineered and optimized the cart → review → checkout → submission flow using React + Redux-Saga, ensuring a smooth and reliable customer journey.",
        "GraphQL Integration: Implemented GraphQL queries and mutations for high-volume transactions, reducing over-fetching and improving performance across the ordering domain.",
        "Feature Enhancements: Delivered customer-facing features in collaboration with teams, improving usability and order processing efficiency.",
        "Bug Fixes & Incident Handling: Diagnosed and resolved critical production issues to minimize business impact.",
        "Cross-Team Collaboration: Partnered with backend, QA, and product teams to refine APIs and deliver end-to-end solutions.",
        "Initiative & Leadership: Took ownership of new initiatives, led feature rollouts, and mentored peers in FE best practices.",
      ],
      tech: ["ReactJS", "Redux-Saga", "GraphQL", "Git"],
      impact: `The ordering flow is the front-facing engine of Sysco Shop — without it, sales cannot happen. My work ensures this critical workflow remains reliable, performant, and user-friendly, directly supporting a multi-billion-dollar food distribution business.`
    },
    {
    id: "elasticsearch",
    title: "Elasticsearch Integration for Corporate Sites",
    period: "Oct 2023 – Dec 2023",
    role: "End-to-End Search Integration Engineer",
    description: `Led end-to-end Elasticsearch integration for corporate websites, handling stakeholder discussions, architecture design, front-end and back-end implementation, and delivery of search functionality. Completed the project within 2 months despite having no prior experience with Elasticsearch.`,
    bullets: [
    "Engaged with stakeholders to gather requirements and define search functionality goals.",
    "Designed Elasticsearch architecture for real-time content synchronization with Contentstack.",
    "Implemented Elasticsearch indexing and queries, integrated front-end search UI with Next.js.",
    "Handled both front-end and back-end work, ensuring smooth data flow and user experience.",
    "Conducted knowledge transfer sessions on search system architecture for team members."
    ],
    tech: ["Elasticsearch", "Next.js", "Contentstack"],
    impact: `Delivered a fully functional, end-to-end search solution, ensuring real-time, accurate results and improving user experience on the corporate websites.`
    },
    {
      id: "sysco-studio",
      title: "Sysco Studio Web Application",
      period: "Mar 2022 – Present",
      role: "Senior Software Engineer",
      description: `Full-stack contributions: front-end features, backend services, CI/CD, and AWS infra optimizations for Sysco Studio.`,
      bullets: [
        "Integrated Contentstack CMS with live preview and publishing workflows.",
        "Built export reports (Excel/Word) using Apache POI and optimized performance for large exports.",
        "Implemented Power BI solution to reduce processing time by 75%.",
        "Contributed to Google Business Profile verification integration provided through Sysco Studio.",
        "Implemented asset transfer feature for accounts and upgraded the customer canvas with IDML file support.",
        "Handled full-stack development, AWS management, and end-to-end feature delivery across front-end and back-end components."
    ],
      tech: ["React", "Dropwizard (Java)", "AWS (ECS, ELB, S3, CloudFront, Secrets Manager)", "Contentstack" , "Datadog"],
    },
    {
      id: "migration",
      title: "Magnolia → Contentstack Migration",
      period: "Aug 2023 – Jan 2024",
      role: "Front-End / Migration Engineer",
      description: `Migrated three corporate websites from Magnolia to Contentstack and built reusable front-end components with Next.js.`,
      bullets: [
        "Designed content models and migration tools for seamless transition.",
        "Created reusable Next.js components and integrated live preview workflows.",
        "Implemented Contentstack workflows to prevent unauthorized publications, ensuring content integrity."
      ],
      tech: ["Next.js", "Contentstack", "Fastly"],
    },
    
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="intro">
        Showcasing my key contributions to mission-critical applications and innovative solutions.
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            {index !== 3 && <span className="featured-badge">Featured Project</span>}
            <h3>{project.title}</h3>
            <div className="project-meta">
              <span className="period">
                <span className="period-icon">📅</span>
                {project.period}
              </span>
            </div>
            <p className="description">{project.description}</p>
            <ul className="bullets">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.impact && (
              <div className="impact">
                <strong>Impact:</strong> {project.impact}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}