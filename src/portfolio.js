/* Lucius's Personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lucius's Portfolio",
  description:
    "Creating new value through data and technology. CTO at Futurevel.Co and undergraduate researcher specializing in Topological Data Analysis (TDA) for medical and high-dimensional data.",
  og: {
    title: "Lucius — CTO & TDA Researcher",
    type: "website",
    url: "https://ezwez1203.github.io/masterPortfolio/",
  },
};

//Home Page
const greeting = {
  title: "Lucius",
  logo_name: "Lucius",
  nickname: "BS reasercher in Yonsei University",
  subTitle:
    "Creating new value through data and technology. Currently leading web app services as CTO of Futurevel.Co, while conducting research on solving unsolved challenges in medical and high-dimensional data using Topological Data Analysis (TDA).",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "https://github.com/ezwez1203",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ezwez1203",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/lucius-hw",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/_luciushwang",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:ezwez1467@yonsei.ac.kr",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "TDA & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ High-dimensional data structure analysis using Topological Data Analysis (TDA)",
        "⚡ Biomedical research combining deep learning with TDA on genomic, ECG, and ABP data",
        "⚡ Breast cancer subtype discovery, ICU risk prediction, and retinal image analysis",
        "⚡ Network security modeling — zero-day attack detection via TDA on web packet data",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Backend & Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designed and built the full backend architecture for 'WhereClass' (whereclass.me)",
        "⚡ Scalable server infrastructure design and database optimization",
        "⚡ RESTful API design and cloud-based deployment",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Yonsei University (Mirae Campus)",
      subtitle: "Undergraduate (Currently Enrolled)",
      logo_path: "YonseiUniversity.svg",
      alt_name: "Yonsei University Mirae Campus",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Conducting research combining Topological Data Analysis (TDA) with deep learning for medical data.",
        "⚡ Founded a startup as CTO during undergraduate studies and officially launched a web app service.",
        "⚡ Multiple grand prizes in startup competitions and hackathons.",
      ],
      website_link: "https://www.yonsei.ac.kr/",
    },
    {
      title: "Apgujeong Hyundai High School",
      subtitle: "Graduated",
      logo_path: "HyundaiHigh.svg",
      alt_name: "Apgujeong Hyundai High School",
      duration: "2019 - 2022",
      descriptions: [],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ICAIIC Paper Presentation",
      subtitle: "- Adversarial Robustness of Deep Learning-Based AMC",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "ICAIIC 2026",
      color_code: "#0C9D5899",
    },
    {
      title: "CITI Program — Research Ethics",
      subtitle: "- MIT (Massachusetts Institute of Technology)",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "CITI Program MIT",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research & Awards",
  description:
    "As CTO and backend developer at Futurevel.Co, I lead web app services. Combining hands-on startup experience with undergraduate research, I build innovative data-driven solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "CTO & Backend Developer",
          company: "Futurevel.Co",
          company_url: "https://whereclass.me",
          logo_path: "Futurevel logo.svg",
          duration: "2024 - Present",
          location: "South Korea",
          description:
            "Developed and officially launched the web app 'WhereClass' (whereclass.me) in 2025. Designed the entire backend architecture and led development, overseeing the technical direction of the service. Achieved stable service operations through scalable infrastructure design and database optimization.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Undergraduate Researcher — TDA & Deep Learning",
          company: "Yonsei University",
          company_url: "https://www.yonsei.ac.kr/",
          logo_path: "YonseiUniversity.svg",
          duration: "2023 - Present",
          location: "South Korea",
          description:
            "Applying TDA to genomic data to discover novel breast cancer subtypes. Researching time-to-event prediction models for ventricular tachycardia/fibrillation using TDA on ICU ECG and ABP data. Also exploring TCGA genomic analysis, glaucoma/Alzheimer's detection from retinal images, zero-day attack prevention in network security, and complex high-dimensional data problems in rocketry, aerospace, and neuroscience.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Awards & Honors",
      experiences: [
        {
          title: "HIRA Big Data Global Talent Program — Grand Prize",
          company: "Health Insurance Review & Assessment Service",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2026",
          location: "HIRA President's Award",
          description:
            "Awarded grand prize in the HIRA Big Data Global Talent Development Program.",
          color: "#0C9D58",
        },
        {
          title: "Gangwon Province Startup Competition — Grand Prize",
          company: "Gangwon Special Self-Governing Province",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "Governor's Award",
          description:
            "Won the grand prize (Governor's Award) at the Gangwon Province University Student Startup Competition.",
          color: "#D83B01",
        },
        {
          title: "Yonsei MEDICI+ Startup Hackathon — Grand Prize",
          company: "Yonsei University",
          company_url: "https://www.yonsei.ac.kr/",
          logo_path: "iiitk_logo.png",
          duration: "2025",
          location: "",
          description:
            "Awarded grand prize at the Yonsei MEDICI+ Startup Hackathon Summer Camp.",
          color: "#0879bf",
        },
        {
          title: "Northeast ICT Innovation Square — Finals",
          company: "ICT Innovation Square",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "",
          description:
            "Advanced to the finals of the Northeast ICT Innovation Square Startup Idea Competition.",
          color: "#181717",
        },
        {
          title: "Tourism Data Contest — Preliminary Round Passed",
          company: "",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "",
          description:
            "Passed the preliminary round of the Tourism Data Contest.",
          color: "#ee3c26",
        },
        {
          title: "FIN:NECT Challenge — Preliminary Round Passed",
          company: "",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "",
          description:
            "Passed the preliminary round of the FIN:NECT Challenge.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Research & Projects",
  description:
    "Solving complex high-dimensional data challenges across healthcare — by combining Topological Data Analysis (TDA) with deep learning.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications & Current Research",
  description:
    "Exploring the real-world applicability of TDA and deep learning through academic papers and ongoing research projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "whereclass",
      name: "WhereClass",
      createdAt: "2025-01-01T00:00:00Z",
      description: "A website of maps that shows the map inside the buildings of Yonsei university",
      url: "https://whereclass.me",
    },
    {
      id: "adversarial-robustness-amc",
      name: "Adversarial Robustness of Deep Learning-Based AMC",
      createdAt: "2026-02-01T00:00:00Z",
      description: "Paper presented at ICAIIC 2026",
      url: "https://ieeexplore.ieee.org/document/11454198",
    },
    {
      id: "breast-cancer-subtype",
      name: "Discovering Novel Breast Cancer Subtypes",
      createdAt: "2026-03-01T00:00:00Z",
      description: "Applying Topological Data Analysis (TDA) to genomic data to explore previously unknown breast cancer subtypes.",
      url: "https://github.com/TDA-Medical",
    },
    {
      id: "icu-event-prediction",
      name: "Predicting High-Risk Events in ICUs",
      createdAt: "2026-03-01T00:00:00Z",
      description: "Applying TDA to ECG and ABP data to model and predict the time-to-event for ventricular tachycardia and fibrillation in ICU patients.",
      url: "",
    },
    {
      id: "biomedical-data-analysis",
      name: "In-depth Analysis of Biomedical Data",
      createdAt: "2026-03-01T00:00:00Z",
      description: "Analyzing TCGA genomic data, utilizing retinal images to detect glaucoma and Alzheimer's disease, and modeling cardiovascular disease prediction.",
      url: "https://github.com/ezwez1203/Altzheimer-Glaucoma-Classification-by-TDA",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1767780979829.jpg",
    description:
      "Feel free to reach out for research collaborations, project inquiries, or technical discussions. I'm available in the fields of TDA, Deep Learning, and Backend Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "South Korea",
    locality: "South Korea",
    country: "South Korea",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
