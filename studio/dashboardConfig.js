export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f890fd51a0cf43be21955f',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-test-studio-9649u1bd',
                  apiId: '2691405e-35eb-49fd-8edc-f1cfb7136b40'
                },
                {
                  buildHookId: '60f890fcf263c44959d80aec',
                  title: 'Portfolio Website',
                  name: 'gatsby-sanity-test-web',
                  apiId: '98f759a9-6cac-40d2-aeee-2e48482e0c66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lazyplatypus/gatsby-sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-sanity-test-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
