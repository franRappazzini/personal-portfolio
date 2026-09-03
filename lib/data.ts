export const experiences = [
  {
    role: "Solana Blockchain Developer",
    company: "Freelance",
    period: "October 2025 – Present",
    description:
      "Design and deployment of custom Solana programs using Rust, Anchor, and Pinocchio for decentralized protocols, with an absolute focus on compute unit optimization and efficient account structuring. Architected and developed an ultra low latency gRPC data streaming ecosystem in Rust, building a custom event proxy and Terminal UI client that integrates with a Solana Geyser plugin. Engineered supporting distributed microservices utilizing NATS for internal messaging, Redis for client authentication token validation, PostgreSQL for persistent data caching, and Prometheus/Grafana for infrastructure telemetry.",
  },
  {
    role: "Rust & Solana Blockchain Developer",
    company: "Inside Dark Studio",
    period: "April 2023 – October 2025",
    description:
      "Led small engineering teams in the design, delivery, and testing of production grade Solana programs for DeFi, RWA, and Web3 gaming products. Co-managed physical, bare metal datacenter infrastructure to host resilient distributed systems, directly provisioning, configuring, and maintaining high performance Internet Computer (ICP) nodes under strict network isolation. Maximized system availability and codebase security through integration testing, automated fuzz testing, and continuous hardware level performance monitoring.",
  },
  {
    role: "Full Stack Blockchain Developer",
    company: "OPIS EcoWallet",
    period: "October 2022 – April 2023",
    description:
      "Contributed to the architecture and development of the core web application, integrating blockchain smart contracts into the platform and supporting a successful MVP launch. Built scalable full stack solutions using Next.js and Node.js, ensuring stable interaction between frontend, backend, and blockchain layers to deliver a cohesive and reliable product experience.",
  },
  {
    role: "Full Stack Web Developer",
    company: "Freelance",
    period: "August 2021 – August 2022",
    description:
      "Design and delivery of multiple production ready web applications, managing projects from architecture to deployment. Development of scalable solutions using React/Next.js and Node.js, translating business requirements into effective technical implementations while ensuring performance, stability, and long term maintainability.",
  },
];

export const contributions = [
  {
    repo: "otter-sec/anchor",
    prNumber: 4944,
    status: "merged",
    title: "feat(lang-v2): support Sysvar<SysvarInstructions> for introspection",
    additions: 514,
    deletions: 37,
    filesSummary: "lang-v2/src/accounts/sysvar.rs +9 more",
    href: "https://github.com/otter-sec/anchor/pull/4944",
  },
  {
    repo: "MeteoraAg/damm-v2-sdk",
    prNumber: 110,
    status: "open",
    title: "feat: add Anchor CPI examples for pool initialization and swap2 with tests",
    additions: 18007,
    deletions: 1,
    filesSummary: "examples/anchor/programs/cpi-example-damm-v2/src/lib.rs +18 more",
    href: "https://github.com/MeteoraAg/damm-v2-sdk/pull/110",
  },
];

export const technologies = [
  {
    name: "Rust",
    // img: rust,
    link: "https://www.rust-lang.org",
  },
  {
    name: "TypeScript",
    // img: typescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    // img: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Solidity",
    // img: solidity,
    link: "https://soliditylang.org/",
  },
  // {
  //   name: "HTML",
  // img: html,
  //   link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  // },
  // {
  //   name: "CSS",
  // img: css,
  //   link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  // },
  {
    name: "Anchor",
    // img: anchor,
    link: "https://www.anchor-lang.com/docs/",
  },
  {
    name: "Pinocchio",
    // img: anchor,
    link: "https://github.com/anza-xyz/pinocchio",
  },
  // {
  //   name: "React",
  //   // img: react,
  //   link: "https://reactjs.org/",
  // },
  {
    name: "Next.js",
    // img: nextjs,
    link: "https://nextjs.org/",
  },
  // {
  //   name: "Redux",
  //   // img: redux,
  //   link: "https://redux.js.org/",
  // },
  {
    name: "Node JS",
    // img: nodejs,
    link: "https://nodejs.org/en/",
  },
  // {
  //   name: "Express",
  //   // img: express,
  //   link: "https://expressjs.com/",
  // },
  {
    name: "AWS",
    // img: sql,
    link: "https://aws.amazon.com/",
  },
  {
    name: "SQL",
    // img: sql,
    link: "https://www.w3schools.com/sql/sql_intro.asp",
  },
  {
    name: "Docker",
    // img: sql,
    link: "https://www.docker.com",
  },
  {
    name: "Prometheus",
    // img: sql,
    link: "https://prometheus.io",
  },
  {
    name: "Ansible",
    // img: sql,
    link: "https://docs.ansible.com",
  },
  // {
  //   name: "jQuery",
  // img: jquery,
  //   link: "https://jquery.com/",
  // },
  // {
  //   name: "Sass",
  // img: sass,
  //   link: "https://sass-lang.com/",
  // },
  // {
  //   name: "Less",
  // img: less,
  //   link: "https://lesscss.org/",
  // },
  // {
  //   name: "Tailwind",
  //   // img: tailwind,
  //   link: "https://tailwindcss.com",
  // },
  // {
  //   name: "PostgreSQL",
  //   // img: postgresql,
  //   link: "https://www.postgresql.org/",
  // },
  // {
  //   name: "Sequelize",
  //   // img: sequelize,
  //   link: "https://sequelize.org/",
  // },
  // {
  //   name: "MongoDB",
  // img: mongodb,
  //   link: "https://www.mongodb.com/",
  // },
  // {
  //   name: "AJAX",
  // img: ajax,
  //   link: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX",
  // },
  // {
  //   name: "Firebase",
  // img: firebase,
  //   link: "https://firebase.google.com/",
  // },
  // {
  //   name: "Jest",
  // img: jest,
  //   link: "https://jestjs.io/",
  // },
  // {
  //   name: "Material UI",
  // img: mui,
  //   link: "https://mui.com/",
  // },
  // {
  //   name: "Bootstrap",
  // img: bootstrap,
  //   link: "https://getbootstrap.com/",
  // },
  // {
  //   name: "npm",
  // img: npm,
  //   link: "https://www.npmjs.com/",
  // },
  {
    name: "Git",
    // img: git,
    link: "https://git-scm.com/",
  },
];
