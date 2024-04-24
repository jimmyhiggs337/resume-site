/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Bellwether Technology Company (Sophia App)',
    position: 'Software Engineer II',
    url: 'https://www.belltec.com/',
    startDate: '2022-04-01',
    endDate: '2024-03-14',
    summary: `Sophia App: Sophia was created as a collaboration among Bellwether Technology Corporation, VIA LINK Inc.,
    and the United Way Association of South Carolina to address the need for a better technology solution for I&R service providers. 
    As their existing I&R software struggled to keep up with their evolving requirements, VIA LINK and UWASC each sought an answer. 
    They knew they needed an application that was specifically designed for their purposes and would adapt quickly to new developments. 
    It was clear that such a solution was not readily available and that building one was a significant undertaking with no guarantee of success.
    Having been involved in various capacities with 211s for well over a decade, 
    Bellwether understood the enormous potential for a software application that would amplify the positive impact that I&R has on the world. As a long-established and successful managed IT and cybersecurity services company, 
    Bellwether also understood that getting the most from technology is as much about people as it is about machines and software.
    Discussions among executive leadership at the three organizations led to a tight collaboration to design and build a new solution, with each member bringing their unique perspective and expertise to the partnership. 
    The result is Sophia: a modern I&R solution guided by VIA LINK’s and UWASC’s vision and propelled by Bellwether’s 40+ years of technical leadership and customer service excellence.
    `,
    highlights: [
      'Designed and  Implemented new features by creating front-end components and backend functionality, including UI elements and full web pages, data structures, API connections, etc.',
      'Created comprehensive project documentation, including onboarding guides for new developers and clients, establishing development environment, and more',
      'Contributed to the development and management of a CI/CD pipeline for deploying the web application as a Single Page Application (SPA) on Azure',
      'Provided support for multiple existing legacy apps, including but not limited to addressing user-reported errors, optimizing code, patching security vulnerabilities, updating documentation, and overseeing app migrations to Azure hosted VMs and modern hardware',
    ],
  },
  {
    name: 'CGI',
    position: 'Lead UI Developer',
    url: 'https://www.cgi.com/en',
    startDate: '2021-04-01',
    endDate: '2022-04-01',
    summary: 'CGI Inc. is a Canadian multinational information technology consulting and Software Development company headquartered in Montreal, Quebec, Canada.',
    highlights: [
      'Conducted interviews and provided training for new development team members',
      'Led the development of a new UI (Angular) for an AI-backed platform capable of handling multiple users and designed public and private APIs',
      'Oversaw and orchestrated the organization and migration of code into Gitlab, and created production and pre-production environments along with developing a CI/CD pipeline',
      'Coordinated with solutions architect to update infrastructure documentation',
    ],
  },
  {
    name: 'CGI',
    position: 'Software Developer',
    url: 'https://www.cgi.com/en',
    startDate: '2020-01-01',
    endDate: '2021-04-01',
    summary: 'CGI Inc. is a Canadian multinational information technology consulting and Software Development company headquartered in Montreal, Quebec, Canada.',
    highlights: [
      'Oversaw code base for importing, organizing, and categorizing extensive healthcare data into a machine learning supported healthcare database on a repeated and large scale basis for a healthcare company data project utilizing hadoop/hive, HQL, and Java/Scala.',
      'Created a custom solution for gathering and structuring census data from the census.gov API using Python and R.',
      'Referenced and extracted pertinent healthcare data, such as COVID-19 data, to populate smaller databases utilized by both internal and external company software and web applications.',
    ],
  },
  {
    name: 'Lafayette Utilities System',
    position: 'Engineering Aide I (Jr. Sys Admin)',
    url: 'https://www.lus.org/',
    startDate: '2014-08-01',
    endDate: '2020-01-01',
    summary: 'LUS is publicly owned utilities system that provide high-quality, competitively priced services that exceed customers’ expectations, and contributes to the Lafayette Consolidated Government to support other community needs.',
    highlights: [
      'Collaborated closely with System/Network Administrator to manage and support various applications including Active Directory, Microsoft Exchange, Microsoft Configuration Manager, and Cisco Call Manager on a daily basis',
      ' Diagnosed, troubleshot, and resolved hardware, software, and network/system issues; replaced defective components when necessary and maintained detailed records of all troubleshooting activities in ticketing system and SQL-backed database',
      'Configured and tested networking and client computer hardware, networking software, and operating systems; ensured seamless connections between each',
      'Implemented network security measures to safeguard data, software, and hardware',
    ],
  },
];

export default work;
