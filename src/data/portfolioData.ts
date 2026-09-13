import { FAQItem, SkillItem, ProjectItem, InnovationItem, ExperienceItem, EducationItem, GitHubRepo } from '../types.ts';

export const PERSONAL_INFO = {
  name: "Derrick Okoro",
  title: "Software Engineering Undergraduate | Software Developer | IT",
  degree: "BSc Software Engineering",
  university: "University of Eastern Africa, Baraton (UEAB)",
  location: "Kenya (EAC GMT+3)",
  email: "derrickhambarasa@gmail.com",
  phone: "+254 746 786 602",
  github: "https://github.com/derrickokoro",
  linkedin: "https://linkedin.com/in/derrick-okoro",
  whatsapp: "https://wa.me/254746786602",
  status: "Open to Software Engineering Opportunities",
  tagline: "Building Software. Solving Problems. Creating What’s Next.",
  bio: "I’m a Software Engineering undergraduate at the University of Eastern Africa, Baraton, with a growing foundation in full-stack web and mobile application development. I enjoy turning ideas and real-world problems into practical technology solutions.",
  mission: "“Technology becomes powerful when it solves a real problem.”"
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: 0,
    topic: "ACADEMIC PROFILE",
    question: "What does Derrick study?",
    answer: "BSc Software Engineering at University of Eastern Africa, Baraton (2023–Present), focusing on DSA, architecture, databases, and full-stack systems."
  },
  {
    id: 1,
    topic: "STACK PROFICIENCY",
    question: "What technologies does Derrick know?",
    answer: "React, Node.js, MongoDB, Flutter, Firebase, REST APIs, Git, Linux, and cybersecurity fundamentals."
  },
  {
    id: 2,
    topic: "PROJECT PORTFOLIO",
    question: "What projects has Derrick built?",
    answer: "Full-stack e-commerce app (React/Node/MongoDB), Mobile Attendance App (Flutter/Firebase), and founded CyberVault IT Centre."
  },
  {
    id: 3,
    topic: "CURRENT INITIATIVES",
    question: "What is Derrick currently learning?",
    answer: "Deepening knowledge in Linux security, cloud architecture, system networking, and defensive cyber practices."
  },
  {
    id: 4,
    topic: "CAREER OBJECTIVES",
    question: "What kind of opportunities is Derrick looking for?",
    answer: "Software engineering internships, junior developer roles, open-source collaborations, and tech problem-solving challenges."
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'react',
    name: 'React',
    domain: 'frontend',
    level: 'Hands-on',
    description: 'Component lifecycle, hooks, state management, SPA routing.',
    percentage: 82
  },
  {
    id: 'js',
    name: 'JavaScript / ES6+',
    domain: 'frontend',
    level: 'Hands-on',
    description: 'DOM APIs, async/await, closures, promises, modular patterns.',
    percentage: 86
  },
  {
    id: 'node',
    name: 'Node.js & Express',
    domain: 'backend',
    level: 'Intermediate',
    description: 'Express RESTful APIs, middleware, auth & token sessions.',
    percentage: 75
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    domain: 'backend',
    level: 'Hands-on',
    description: 'NoSQL document schemas, Mongoose ODM, aggregation queries.',
    percentage: 80
  },
  {
    id: 'flutter',
    name: 'Flutter',
    domain: 'mobile',
    level: 'Hands-on',
    description: 'Cross-platform UI widgets, provider state, mobile UX.',
    percentage: 78
  },
  {
    id: 'firebase',
    name: 'Firebase',
    domain: 'mobile',
    level: 'Intermediate',
    description: 'Cloud Firestore, authentication, real-time synchronization.',
    percentage: 76
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    domain: 'systems',
    level: 'Hands-on',
    description: 'Branching strategies, PR reviews, CI/CD, merge resolution.',
    percentage: 85
  },
  {
    id: 'linux',
    name: 'Linux',
    domain: 'systems',
    level: 'Working Knowledge',
    description: 'Bash CLI, permissions, systemctl, network daemon configs.',
    percentage: 70
  },
  {
    id: 'dsa',
    name: 'DSA & Architecture',
    domain: 'systems',
    level: 'Intermediate',
    description: 'Algorithm efficiency, data structures, modular software design.',
    percentage: 75
  },
  {
    id: 'sql',
    name: 'SQL / Relational',
    domain: 'backend',
    level: 'Working Knowledge',
    description: 'Relational algebra, joins, normalization, query optimization.',
    percentage: 70
  },
  {
    id: 'websec',
    name: 'Web & Network Sec',
    domain: 'cyber',
    level: 'Learning',
    description: 'OWASP Top 10, packet analysis, SSL/TLS, port scanning.',
    percentage: 60
  },
  {
    id: 'hacking',
    name: 'Ethical Hacking',
    domain: 'cyber',
    level: 'Learning',
    description: 'Defensive auditing, vulnerability assessments, reconnaissance.',
    percentage: 55
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ecommerce',
    tag: 'PROJECT 01',
    category: 'Full-Stack Web',
    title: 'E-Commerce Web Application',
    problem: 'Fragmented small business storefronts lacking responsive real-time inventory management and seamless checkout flow.',
    solution: 'Built a full-stack e-commerce system with authenticated customer portals, administrative catalogs, and reactive database pipelines.',
    longDescription: 'Engineered with React SPA front-end, an Express/Node.js API gateway, and MongoDB database. Features JWT security sessions, cart persistence in local storage, and granular order tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API', 'Express'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtXOVLa80TClthLCDUZBoe4A6fCPpHlWkVcO72yWFw4Q53VHIaNp9XvHD1MBcUuOVZ_Y5b0m-i3m6tGezAD_5rpprJpKCxTe5wcPejNjVH1cDHDNed2FWcMYq5JahPyDb4N_8YcO3KohkpamVS6-QkqV0M7i-7oy5gC27iRQ4rnIIbH550iOeceUNCMBq1byr12Ehcdj_cXxO8bBpr00f3t7p_JrVbC6_zvo_nT8D7PpIyzIRu8x6',
    imageAlt: 'Modern dark-mode UI mockup of a clean e-commerce web dashboard and catalog with product grids and cart telemetry.',
    githubUrl: 'https://github.com/derrickokoro/ecommerce-platform',
    architectureHighlights: [
      'Strict boundary layer separation between persistence and presentation layers.',
      'Comprehensive error handling with client feedback toasts and optimistic UI.',
      'Optimized lightweight assets for low-bandwidth mobile environments in Kenya.'
    ]
  },
  {
    id: 'attendance',
    tag: 'PROJECT 02',
    category: 'Mobile App',
    title: 'Mobile Attendance App',
    problem: 'Slow, error-prone manual paper roll calls at institutions causing lost records and administrative delay.',
    solution: 'Designed a cross-platform Flutter application with instant barcode/one-tap logging and automated Firestore cloud synchronization.',
    longDescription: 'Built to replace manual pen-and-paper rolls. Features rapid student selection, off-line caching for low-bandwidth zones, and automatic cloud sync once connectivity is restored.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Firestore', 'Offline Sync'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4qM0IfR3wllW4IktTrjpTEzXfESifTPtdW0rWMDM6kOVUDbaNU7dIX96jwF-mmJEAUZVnQj5zhDOdeM3S8dH1lePOXxNWAAy-LFyyCp3vb-iqAScBmtgewWd0QCfy7DzD9K6wvIi4jXzETCCaVZ4mBxDwHY0PZRQF4pMIg9mMnmcyCH4_ZAom3i0WFs01ZPaGEkEnIPg5-ZNswbqPMYCEmLdTij4ylhXez5C-h3FomYLBJR2vuqJX',
    imageAlt: 'Mobile mockup of a Flutter attendance application screen showing digital ID verification and roll call checklist.',
    githubUrl: 'https://github.com/derrickokoro/flutter-attendance-app',
    architectureHighlights: [
      'Offline-first Hive local storage caching synced bi-directionally with Firebase.',
      'Single-tap roll confirmation with sub-100ms UI responsiveness.',
      'Role-based security rules protecting student personal identification data.'
    ]
  },
  {
    id: 'cybervault',
    tag: 'VENTURE 03',
    category: 'Founder • Initiative',
    title: 'CyberVault IT Centre',
    problem: 'Under-resourced local tech ecosystems facing pervasive malware, unpatched workstations, and absence of digital literacy.',
    solution: 'Founded and spearheaded an operational technology initiative providing hardware maintenance, OS hardening, cyber hygiene, and tech support.',
    longDescription: 'An operational digital empowerment venture delivering hardware troubleshooting, Linux and Windows OS deployment, basic network security configurations, and technology education.',
    technologies: ['IT Services', 'Security Awareness', 'OS Hardening', 'Linux', 'Network Ops'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbW_JX4U7JM0Ll2U4oAxDx6Fyw0bVoJN5_o66sXtnm5AnjxYUUI0MOz4TnV9xJkZMwStcSo7j7YHpg9BEqMl2OImkYKfmsOrpSI6YXZc8KEKtO5SO-gBQH4oR5Z5KHlJMj30ncRF-RfBd90eEI9uGX_rEmueKIv73YQWEbA0mEbRd-eC74kEUfLzo9o7sGPB2-W4YvevNsP1Ri2wB4pO01_OfInvsQCNrpea5WnHPawZhaHlzKuk8_',
    imageAlt: 'An IT tech support and cybersecurity center workstation with laptops, networking gear, and diagnostic dashboard.',
    githubUrl: 'https://github.com/derrickokoro',
    architectureHighlights: [
      'Standardized automated OS re-imaging workflows saving hours per client.',
      'Defensive firewall and security patch checklists tailored for community setups.',
      'Mentorship curriculum training peers on baseline cyber safety.'
    ]
  }
];

export const INNOVATION_DATA: InnovationItem[] = [
  {
    id: 'printbook',
    category: 'HARDWARE CONVERGENCE',
    icon: 'print',
    title: 'PrintBook Laptop',
    description: 'A laptop concept with an integrated printing capability, exploring how computing and physical document production could be combined into a single portable device for field professionals and remote academics.',
    techDomain: 'Mechanical & Embedded',
    statusBadge: 'Patent Draft / CAD'
  },
  {
    id: 'mesh',
    category: 'MESH COMPUTING',
    icon: 'wifi_off',
    title: 'Offline Social Network',
    description: 'An experimental concept exploring how people could interact with digital social services and local applications in environments with limited or no traditional internet connectivity using peer-to-peer Wi-Fi mesh relays.',
    techDomain: 'P2P / Ad-Hoc Meshing',
    statusBadge: 'Protocol Study'
  },
  {
    id: 'campus',
    category: 'CAMPUS AUTOMATION',
    icon: 'apartment',
    title: 'Smart Campus Systems',
    description: 'Exploring holistic technology solutions for automated attendance, digitized cafeteria billing, dynamic resource booking, and unified student services under an API-driven campus ecosystem.',
    techDomain: 'IoT & Central Gateway',
    statusBadge: 'System Architecture'
  },
  {
    id: 'fakenews',
    category: 'DATA VERIFICATION',
    icon: 'fact_check',
    title: 'Fake News Detection',
    description: 'Exploring software approaches and natural language heuristics for identifying potentially misleading, synthetically amplified, or manipulated information across social streams and news feeds.',
    techDomain: 'NLP & Fact Tracing',
    statusBadge: 'Algorithm Exploration'
  },
  {
    id: 'beacon',
    category: 'TELEMETRY & RESCUE',
    icon: 'sos',
    title: 'Emergency Contact Beacon',
    description: 'Exploring systems that could help users quickly communicate emergency telemetry, coordinates, and health status to designated contacts and emergency responders with minimal user action, even under low battery and degraded cellular conditions.',
    techDomain: 'Low-Power Cellular / GPS Burst',
    statusBadge: 'Concept Validation',
    spanCol: true
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'airtel',
    location: 'Mumias, Kenya',
    period: 'May 2022 – Aug 2022',
    role: 'SIM Card Distributor / Airtel Dealer',
    company: 'Direct Field Operations',
    accentColor: 'primary',
    badges: ['Customer Compliance', 'Cash Flow'],
    bullets: [
      'Customer registration and mandatory telecommunication regulatory KYC verification.',
      'Fast-paced airtime inventory distribution, float balance reconciliation, and sales accounting.',
      'Customer relations handling inquiries and SIM activation problem-solving.'
    ]
  },
  {
    id: 'shop',
    location: 'Kakamega, Kenya',
    period: 'Aug 2022 – Aug 2023',
    role: 'Shop Attendant & Bread Distributor',
    company: 'General Shop CEO',
    accentColor: 'secondary',
    badges: ['Supply Chain', 'Retail Ledgers'],
    bullets: [
      'Managed front-line retail operations, stock inventory auditing, and supplier logistics.',
      'Point of sale transactions, register balance integrity, and daily profitability ledgers.',
      'B2B daily distribution coordination across retail partners in Kakamega.'
    ]
  },
  {
    id: 'construction',
    location: 'Eldoret, Kenya',
    period: 'May 2025 – Sep 2025',
    role: 'Construction Site Helper',
    company: 'Daja Construction Company',
    accentColor: 'tertiary',
    badges: ['Team Coordination', 'Safety Rigor'],
    bullets: [
      'Heavy material handling, concrete preparation, and architectural site layout setup.',
      'Strict occupational safety protocol adherence and multi-team field communication.',
      'Demonstrated resilience, high physical endurance, and dependable teamwork.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'ueab',
    year: '2023 – PRESENT',
    degree: 'BSc Software Engineering',
    institution: 'University of Eastern Africa, Baraton',
    description: 'In-depth curriculum encompassing Data Structures & Algorithms, Database Systems, Web & Mobile Development, Operating Systems, and Software Architecture.',
    icon: 'school',
    gradeBadge: 'Undergraduate • Active',
    accentColor: 'primary'
  },
  {
    id: 'kcse',
    year: 'CLASS OF 2021',
    degree: 'KCSE Certificate',
    institution: 'St James Namamba Boy’s High School',
    description: 'Attained distinction Grade B+ (71 points). Strong academic track in analytical subjects, sciences, and mathematics.',
    icon: 'workspace_premium',
    gradeBadge: 'Grade B+ (71 Points)',
    accentColor: 'secondary'
  },
  {
    id: 'kcpe',
    year: 'CLASS OF 2017',
    degree: 'KCPE Certificate',
    institution: 'St. Mary’s Ebusambe Primary School',
    description: 'Successfully completed primary school education with Grade B- (320 marks), demonstrating discipline from an early foundation.',
    icon: 'history_edu',
    gradeBadge: 'Grade B- (320 Marks)',
    accentColor: 'tertiary'
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'ecommerce-platform',
    description: 'Full-stack e-commerce engine with React frontend, Node.js API, and MongoDB collections.',
    language: 'JavaScript / Node',
    languageColor: '#4edea3',
    stars: 12,
    forks: 4,
    url: 'https://github.com/derrickokoro/ecommerce-platform'
  },
  {
    name: 'flutter-attendance-app',
    description: 'Mobile attendance tracking utility with Firebase cloud sync and offline data resilience.',
    language: 'Dart / Flutter',
    languageColor: '#4cd7f6',
    stars: 18,
    forks: 7,
    url: 'https://github.com/derrickokoro/flutter-attendance-app'
  },
  {
    name: 'network-security-scripts',
    description: 'Collection of Linux shell and Python utilities for subnet port checks and log inspection.',
    language: 'Shell / Bash',
    languageColor: '#adc6ff',
    stars: 9,
    forks: 2,
    url: 'https://github.com/derrickokoro/network-security-scripts'
  }
];
