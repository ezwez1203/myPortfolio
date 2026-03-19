/* Lucius's Personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lucius's Portfolio",
  description:
    "데이터와 기술로 새로운 가치를 창출합니다. Futurevel.Co의 CTO이자 위상수학적 데이터 분석(TDA) 연구원으로서, 의료 및 다차원 데이터의 미해결 난제를 풀어갑니다.",
  og: {
    title: "Lucius — CTO & TDA Researcher",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Lucius",
  logo_name: "Lucius",
  nickname: "CTO at Futurevel.Co",
  subTitle:
    "데이터와 기술로 새로운 가치를 창출합니다. 현재 Futurevel.Co의 CTO로서 웹앱 서비스를 리드하고 있으며, 위상수학적 데이터 분석(TDA)을 활용하여 의료 및 다차원 데이터의 미해결 난제를 푸는 연구에 몰두하고 있습니다.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  // 소셜 미디어 링크를 추가하세요
  // 예시:
  // {
  //   name: "Github",
  //   link: "https://github.com/your-username",
  //   fontAwesomeIcon: "fa-github",
  //   backgroundColor: "#181717",
  // },
];

const skills = {
  data: [
    {
      title: "TDA & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ 위상수학적 데이터 분석(TDA)을 활용한 다차원 데이터 구조 분석",
        "⚡ 딥러닝 모델과 TDA를 결합한 의료 데이터(유전자, ECG, ABP) 분석",
        "⚡ 유방암 서브타입 탐색, 중환자실 위험 예측 등 바이오메디컬 연구",
        "⚡ 네트워크 보안 데이터 분석 및 제로데이 어택 방지 모델링",
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
        "⚡ 웹앱 '어디수업(whereclass.me)' 전체 백엔드 아키텍처 설계 및 개발",
        "⚡ 확장 가능한 서버 인프라 설계 및 DB 최적화",
        "⚡ RESTful API 설계 및 클라우드 기반 배포",
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
      title: "연세대학교 미래캠퍼스",
      subtitle: "Undergraduate (재학중)",
      logo_path: "iiitk_logo.png",
      alt_name: "Yonsei University Mirae Campus",
      duration: "2022 - Present",
      descriptions: [
        "⚡ 위상수학적 데이터 분석(TDA)과 딥러닝을 결합한 의료 데이터 연구를 수행하고 있습니다.",
        "⚡ Futurevel.Co의 CTO로서 재학 중 창업하여 웹앱 서비스를 공식 런칭했습니다.",
        "⚡ 다수의 창업 경진대회 및 해커톤에서 대상을 수상한 경력이 있습니다.",
      ],
      website_link: "https://www.yonsei.ac.kr/",
    },
    {
      title: "압구정 현대고등학교",
      subtitle: "졸업",
      logo_path: "iiitk_logo.png",
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
      title: "ICAIIC 논문 발표",
      subtitle: "- Adversarial Robustness of Deep Learning-Based AMC",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "ICAIIC 2026",
      color_code: "#0C9D5899",
    },
    {
      title: "CITI Program 생명연구윤리 교육",
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
  subtitle: "Work & Projects",
  description:
    "Futurevel.Co의 CTO이자 백엔드 개발자로서 웹앱 서비스를 리드하고 있습니다. 기술 스타트업에서의 실전 경험과 학부 연구를 병행하며 데이터 기반의 혁신적인 솔루션을 만들어가고 있습니다.",
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
          logo_path: "google_logo.png",
          duration: "2024 - Present",
          location: "South Korea",
          description:
            "웹앱 '어디수업'(whereclass.me)을 개발하고 공식 런칭(2025)했습니다. 전체 백엔드 아키텍처를 설계하고 개발을 리드하며, 서비스의 기술적 방향을 총괄하고 있습니다. 확장 가능한 인프라 설계와 데이터베이스 최적화를 통해 안정적인 서비스 운영을 실현했습니다.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Undergraduate Researcher — TDA & Deep Learning",
          company: "연세대학교",
          company_url: "https://www.yonsei.ac.kr/",
          logo_path: "iiitk_logo.png",
          duration: "2023 - Present",
          location: "South Korea",
          description:
            "유방암 환자의 새로운 하위 유형(Subtype) 발굴을 위해 유전자 데이터에 TDA를 적용하고 있습니다. 중환자실 내 심전도(ECG) 및 동맥혈압(ABP) 데이터에 TDA를 적용하여 심실빈맥/심실세동 발생 시점 예측 모델을 연구하고 있습니다. 그 외 TCGA 유전자 데이터 분석, 망막 이미지 기반 녹내장/알츠하이머 판별, 네트워크 보안(제로데이 어택 방지) 등 다차원 데이터 기반 미해결 난제를 탐구합니다.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Awards & Honors",
      experiences: [
        {
          title: "HIRA 빅데이터 활용 글로벌 인재 양성 교육 대상",
          company: "건강보험 심사평가원",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2026",
          location: "건강보험 심사평가원장상",
          description:
            "HIRA 빅데이터를 활용한 글로벌 인재 양성 교육 프로그램에서 대상을 수상했습니다.",
          color: "#0C9D58",
        },
        {
          title: "강원특별자치도 대학생 창업 경진대회 대상",
          company: "강원특별자치도",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "도지사상",
          description:
            "강원특별자치도 대학생 창업 경진대회에서 대상(도지사상)을 수상했습니다.",
          color: "#D83B01",
        },
        {
          title: "연세 MEDICI+ 창업해커톤 여름 캠프 대상",
          company: "연세대학교",
          company_url: "https://www.yonsei.ac.kr/",
          logo_path: "iiitk_logo.png",
          duration: "2025",
          location: "",
          description:
            "연세 MEDICI+ 창업해커톤 여름 캠프에서 대상을 수상했습니다.",
          color: "#0879bf",
        },
        {
          title:
            "동북권 ICT 이노베이션스퀘어 창업아이디어 경진 대회 본선 진출",
          company: "ICT 이노베이션스퀘어",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "",
          description:
            "동북권 ICT 이노베이션스퀘어 창업아이디어 경진 대회 본선에 진출했습니다.",
          color: "#181717",
        },
        {
          title: "관광데이터 공모전 예선 통과",
          company: "",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "",
          description: "관광데이터 공모전 예선을 통과했습니다.",
          color: "#ee3c26",
        },
        {
          title: "FIN:NECT 챌린지 예선 통과",
          company: "",
          company_url: "",
          logo_path: "google_logo.png",
          duration: "2025",
          location: "",
          description: "FIN:NECT 챌린지 예선을 통과했습니다.",
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
    "위상수학적 데이터 분석(TDA)과 딥러닝을 결합하여 의료, 보안, 우주 공학 등 다양한 분야의 다차원 데이터 난제를 풀어가고 있습니다.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "학술 논문 및 연구 결과물을 통해 TDA와 딥러닝의 실제 적용 가능성을 탐구합니다.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "adversarial-robustness-amc",
      name: "Adversarial Robustness of Deep Learning-Based AMC",
      createdAt: "2026-02-01T00:00:00Z",
      description: "ICAIIC 2026 발표 논문",
      url: "",
    },
    {
      id: "adafed-federated-learning",
      name: "AdaFed: Adaptive Selective Aggregation for Heterogeneous Federated Learning in Autonomous Driving",
      createdAt: "2025-01-01T00:00:00Z",
      description: "자율주행을 위한 이종 연합학습 적응적 선택 집계 연구",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "연구 협업, 프로젝트 문의, 또는 기술적 논의가 필요하시면 언제든 연락해 주세요. TDA, Deep Learning, Backend Development 분야에서 함께 할 수 있습니다.",
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
