export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e8a5ddf338cd63a96b80328',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-geggmcui',
                  apiId: '734585bc-5c8e-45da-9b06-4562d358f188'
                },
                {
                  buildHookId: '5e8a5ddfc529ce31946eecdc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qnga2ybn',
                  apiId: 'da0fb260-84a4-4dd9-a39a-6aa5ddf48822'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WilliamTakor/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qnga2ybn.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
