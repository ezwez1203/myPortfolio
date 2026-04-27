import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Resume.css";
import profileImage from "../../assets/images/KakaoTalk_20260426_022255023.png";

const cvPdfLink = `${process.env.PUBLIC_URL}/docs/Dohyun_Hwang_CV.pdf`;

const contactLinks = [
  { label: "Email", value: "ezwez1467@yonsei.ac.kr", href: "mailto:ezwez1467@yonsei.ac.kr" },
  { label: "GitHub", value: "github.com/ezwez1203", href: "https://github.com/ezwez1203" },
  { label: "LinkedIn", value: "linkedin.com/in/lucius-hw", href: "https://linkedin.com/in/lucius-hw" },
  { label: "Instagram", value: "instagram.com/_luciushwang", href: "https://instagram.com/_luciushwang" },
  { label: "Website", value: "whereclass.me", href: "https://whereclass.me" },
  { label: "Location", value: "South Korea" },
];

const researchInterests = [
  "Artificial Intelligence",
  "Federated Learning",
  "Autonomous Driving",
  "Topological Data Analysis",
  "Medical Data Analysis",
  "Deep Learning",
  "Efficient AI Systems",
  "Heterogeneous Model Learning",
  "State Space Models",
  "AI for Healthcare",
];

const currentCoursework = [
  "Operating Systems",
  "AI Mathematics",
  "New Media and Popular Culture",
  "Entrepreneurship Practice",
];

const completedCoursework = [
  "History and Culture of Christianity",
  "Introduction to Algorithms",
  "System Programming",
  "Software Engineering",
  "Embedded Systems",
  "Data Structures",
  "Computer Architecture",
  "Engineering Mathematics I",
  "Engineering Mathematics II",
  "Discrete Structures",
  "Computer Programming",
  "Writing",
  "Calculus and Vectors I",
  "Calculus and Vectors II",
  "Introduction to Data Science",
];

const preUniversity = [
  {
    school: "Hyundai High School",
    period: "Mar 2019 - Feb 2022",
    points: [
      "Developed strong interests in science, mathematics, computing, and analytical thinking.",
      "Received school-level awards and recognitions through academic and extracurricular activities.",
      "Gained leadership experience through class-level responsibilities.",
      "Grade 10: Korean Language, Mathematics, English, Korean History, Integrated Social Studies, Integrated Science, Scientific Inquiry and Experimentation, Informatics, Japanese I, Physical Education, Music, Art Creation",
      "Grade 11: Literature, Reading, Mathematics I, Mathematics II, Probability and Statistics, English I, English II, Physics I, Chemistry I, Life Science I, Exercise and Health, Music",
      "Grade 11 Career Elective: Geometry, Life and Science, Japanese II",
      "Grade 12: Speech and Composition, Calculus, English Reading and Writing, Korean History, Life and Ethics, Education, Essay Writing, Sports Life",
      "Grade 12 Career Elective: Classic Reading, Mathematical Inquiry and Research, Social Issues Exploration, Life Science II, Advanced Life Science",
    ],
  },
  {
    school: "Gwanghee Middle School",
    period: "Mar 2016 - Feb 2019",
    points: [
      "Built a strong academic foundation through coursework, club activities, and school programs.",
      "Received recognition in academics and student activities.",
      "Participated consistently in autonomous activities, clubs, and volunteer programs.",
    ],
  },
  {
    school: "Seoul Oksu Elementary School",
    period: "Mar 2011 - Feb 2016",
    points: [
      "Earned multiple awards in reading, English, science, mathematics, music, and student excellence.",
      "Actively participated in school programs and volunteer activities.",
    ],
  },
];

const researchProjects = [
  {
    title: "Autonomous Driving + Federated Learning (Heterogeneous Models)",
    period: "2025 - Present",
    points: [
      "Training heterogeneous models via federated learning in the same driving environment.",
      "Analyzing knowledge transfer across model families and performance convergence behavior.",
    ],
  },
  {
    title: "Cache-Inspired Federated Learning",
    period: "2026 - Present",
    points: [
      "Developing a federated learning framework inspired by cache memory hierarchy.",
      "Applying locality and replacement-policy concepts to improve client selection, aggregation, and communication efficiency.",
    ],
  },
  {
    title: "TDA for Medical Data Analysis",
    period: "2026 - Present",
    points: [
      "Applying Topological Data Analysis to BRCA breast cancer datasets.",
      "Investigating hidden topological structures, novel variables, and potential biomarkers beyond conventional statistical methods.",
    ],
  },
  {
    title: "Mamba-Based Autonomous Vehicle",
    period: "2026 - Present",
    points: [
      "Exploring Mamba-based State Space Model architectures for autonomous driving perception and decision-making.",
      "Studying efficient long-range temporal reasoning in end-to-end autonomous driving pipelines.",
    ],
  },
];

const awards = [
  {
    title: "HIRA Big Data Global Talent Program, Grand Prize",
    meta: "Health Insurance Review & Assessment Service | 2026",
    detail: "HIRA President's Award",
  },
  {
    title: "Gangwon Province Startup Competition, Grand Prize",
    meta: "Gangwon Special Self-Governing Province | 2025",
    detail: "Governor's Award",
  },
  {
    title: "Yonsei MEDICI+ Startup Hackathon, Grand Prize",
    meta: "Yonsei University | 2025",
  },
  {
    title: "Northeast ICT Innovation Square, Finalist",
    meta: "2025",
  },
  {
    title: "Tourism Data Contest, Preliminary Round Passed",
    meta: "2025",
  },
  {
    title: "FIN:NECT Challenge, Preliminary Round Passed",
    meta: "2025",
  },
];

function SectionBlock({ title, children }) {
  return (
    <section className="cv-section">
      <h2 className="cv-section-title">{title}</h2>
      <div className="cv-section-body">{children}</div>
    </section>
  );
}

function ResumePage(props) {
  const theme = props.theme;

  return (
    <div className="resume-main academic-cv-shell">
      <Header theme={theme} />
      <main className="academic-cv-page">
        <div className="academic-cv-actions no-print">
          <a className="academic-cv-action primary" href={cvPdfLink} download="Dohyun_Hwang_CV.pdf">
            Download PDF
          </a>
          <button className="academic-cv-action secondary" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>

        <article className="academic-cv-paper">
          <header className="cv-hero">
            <img className="cv-portrait" src={profileImage} alt="Dohyun Hwang" />
            <div className="cv-hero-main">
              <p className="cv-kicker">Curriculum Vitae</p>
              <h1 className="cv-name">Dohyun Hwang</h1>
              <p className="cv-affiliation">
                Undergraduate Student, Yonsei University Mirae Campus
              </p>
              <p className="cv-summary">
                I am an undergraduate researcher focused on artificial intelligence, federated
                learning, autonomous driving, topological data analysis, and medical data analysis.
                I work on building efficient and reliable AI systems, exploring novel learning
                frameworks, and applying computational methods to real-world problems in healthcare
                and intelligent systems.
              </p>
            </div>
          </header>

          <div className="cv-grid">
            <aside className="cv-sidebar">
              <SectionBlock title="Contact">
                <div className="cv-contact-list">
                  {contactLinks.map((item) => (
                    <div className="cv-contact-item" key={item.label}>
                      <span className="cv-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </SectionBlock>

              <SectionBlock title="Research Interests">
                <ul className="cv-list compact">
                  {researchInterests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SectionBlock>

              <SectionBlock title="Education">
                <div className="cv-entry tight">
                  <div className="cv-entry-head">
                    <h3>Yonsei University Mirae Campus</h3>
                    <span>2022 - Present</span>
                  </div>
                  <p>
                    Undergraduate student pursuing rigorous training in computing, mathematics,
                    and applied artificial intelligence.
                  </p>
                  <p>
                    <strong>Current coursework:</strong> {currentCoursework.join("; ")}.
                  </p>
                  <p>
                    <strong>Completed coursework:</strong> {completedCoursework.join("; ")}.
                  </p>
                </div>
              </SectionBlock>

              <SectionBlock title="Keywords">
                <p className="cv-keywords">
                  Artificial Intelligence; Federated Learning; Autonomous Driving; Topological
                  Data Analysis; Medical Data Analysis; Deep Learning; Efficient AI Systems;
                  Heterogeneous Model Learning; State Space Models; AI for Healthcare.
                </p>
              </SectionBlock>
            </aside>

            <div className="cv-content">
              <SectionBlock title="About Me">
                <p>
                  I am an undergraduate student at Yonsei University Mirae Campus developing a
                  research profile in artificial intelligence and data-driven systems. I am
                  particularly interested in learning frameworks that are both computationally
                  efficient and practically robust, and my current work spans federated learning,
                  autonomous driving, topological data analysis, and medical AI. I approach
                  research through technically grounded experimentation, cross-domain applicability,
                  and careful translation from methodological ideas to realistic use cases.
                </p>
              </SectionBlock>

              <SectionBlock title="Pre-University Education">
                {preUniversity.map((item) => (
                  <div className="cv-entry" key={item.school}>
                    <div className="cv-entry-head">
                      <h3>{item.school}</h3>
                      <span>{item.period}</span>
                    </div>
                    <ul className="cv-list">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </SectionBlock>

              <SectionBlock title="Experience">
                <div className="cv-entry">
                  <div className="cv-entry-head">
                    <h3>CTO / AI &amp; Web Developer, Futurevle.Co</h3>
                  </div>
                  <ul className="cv-list">
                    <li>I have led AI and web development initiatives across company projects.</li>
                    <li>
                      I have contributed to technical decision-making, system design, and
                      implementation planning.
                    </li>
                    <li>
                      I have worked on AI-powered services and web-based development projects with
                      a focus on practical deployment.
                    </li>
                  </ul>
                </div>
              </SectionBlock>

              <SectionBlock title="Publications">
                <div className="cv-entry">
                  <div className="cv-entry-head">
                    <h3>
                      Adversarial Robustness Analysis of Deep Learning-Based Automatic Modulation
                      Classification in Wireless Communication
                    </h3>
                    <span>IEEE ICAIIC 2026</span>
                  </div>
                  <p className="cv-meta">
                    Sunjun Hwang, Eunho Choi, and Dohyun Hwang | Accepted on December 21, 2025
                  </p>
                  <p>
                    In this work, I contributed to the study of adversarial robustness in deep
                    learning-based automatic modulation classification systems for wireless
                    communication environments. The paper analyzes representative attack scenarios
                    and robustness evaluation metrics to assess model reliability under adversarial
                    perturbations and to clarify practical limitations in deployment settings.
                  </p>
                </div>
              </SectionBlock>

              <SectionBlock title="Current Research">
                {researchProjects.map((item) => (
                  <div className="cv-entry" key={item.title}>
                    <div className="cv-entry-head">
                      <h3>{item.title}</h3>
                      <span>{item.period}</span>
                    </div>
                    <ul className="cv-list">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </SectionBlock>

              <SectionBlock title="Awards & Honors">
                {awards.map((item) => (
                  <div className="cv-entry tight" key={item.title}>
                    <div className="cv-entry-head">
                      <h3>{item.title}</h3>
                      <span>{item.meta}</span>
                    </div>
                    {item.detail && <p>{item.detail}</p>}
                  </div>
                ))}
              </SectionBlock>
            </div>
          </div>
        </article>
      </main>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default ResumePage;
