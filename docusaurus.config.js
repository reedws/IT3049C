// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT3049C - Web Game Development',
  tagline: 'Yahya Gilany',
  url: 'https://it3049c.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'IT3049C', // Usually your GitHub org/user name.
  projectName: 'IT3049C.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/IT3049C/IT3049C.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IT3049C',
        logo: {
          alt: 'My Site Logo',
          src: 'img/javascript.svg',
        }, 
        items: [
          {
            to: '/docs/syllabus/info',
            label: 'Syllabus',
          },
          {
            to: '/docs/labs/intro',
            label: 'Labs',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://ygilany-solution-access.herokuapp.com',
            label: 'Solutions Access',
            position: 'right',
          },
          {
            href: 'https://it3049c.github.io/students/',
            label: 'Students',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site map',
            items: [
              {
                label: 'Syllabus',
                to: '/docs/syllabus/info',
              },
              {
                label: 'Labs',
                to: '/docs/labs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'MS Teams',
                href: 'https://teams.microsoft.com/l/channel/19%3a30e5da231a654578a9f04859d49dc410%40thread.tacv2/%25F0%259F%2586%2598%2520Help%2520-%2520Ask%2520Questions?groupId=24ca8848-d758-42dc-9a5f-85467f5ded68&tenantId=f5222e6c-5fc6-48eb-8f03-73db18203b63',
              },
              {
                label: '⏰ Scheduler',
                href: 'https://outlook.office365.com/owa/calendar/OfficeHours@mailuc.onmicrosoft.com/bookings/s/EjGKKRXxgE6Ppb4z3AH9lg2',
              },
              {
                label: '✉️ Email',
                href: 'mailto:yahya.gilany@uc.edu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Solutions Access',
                href: 'https://ygilany-solution-access.herokuapp.com',
              },
              {
                label: 'GitHub Organization',
                href: 'https://github.com/IT3049C/',
              },
              {
                label: 'GitHub Assignment',
                href: 'https://github.com/IT3049C-Students',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yahya Gilany. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
