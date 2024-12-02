export default {
  /**
   * basic Information
   */
  title: `0xheun.com`,
  description: `0xheun`,
  language: `ko`,
  siteUrl: `https://0xheun.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `heun630/0xheun`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `이자흔`,
    nickname: `Heun`,
    stack: ['Blockchain', 'Web3'],
    bio: {
      email: `egg6030@gmail.com`,
      residence: 'Seoul, South Korea',
      masterDegree: 'Korea Univ. Financial Security (2023.09 - now)',
    },
    social: {
      github: `https://github.com/heun630`,
      linkedIn: `https://www.linkedin.com/in/0xheun`,
      resume: ``,
    },
    dropdown: {
      tistory: 'https://heun.tistory.com/',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'Dev',
      category: 'featured-Dev',
    },
    {
      title: 'Personal',
      category: 'featured-Personal',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2021.07 - 2023.09',
      en: 'Fineitn Corp.',
      kr: '전자지갑 서비스',
      info: '백엔드 및 블록체인 개발',
      link: '',
    },
    {
      category: 'Career',
      date: '2024.09 - Now',
      en: 'Onther Corp.',
      kr: '블록체인 R&D',
      info: '블록체인 개발',
      link: 'https://www.tokamak.network/',
    },
    {
      category: 'Activity',
      date: '2024.09 - Now',
      en: 'Decipher',
      kr: '서울대학교 블록체인 학회',
      info: 'Research',
      link: 'https://decipher.ac/',
    },
    {
      category: 'Activity',
      date: '2024.06 - Now',
      en: 'AllofNode',
      kr: 'NaaS',
      info: 'CTO',
      link: 'https://allofnode.xyz',
    },
  ],

  /**
   * metadata for Portfolio Page
   */
  projects: [
    {
      title: 'AllofNode',
      description: '노드 구동 대행 서비스',
      techStack: ['Go', 'React'],
      thumbnailUrl: 'allofnode.png',
      links: {
        post: '',
        github: '',
        link: 'https://allofnode.xyz/',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
