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
                  buildHookId: '6004c09a34bcda8571b34731',
                  title: 'Sanity Studio',
                  name: 'cash-flows-studio',
                  apiId: '07b8dbf0-e2d0-4cc6-ae93-561d0ddd8547'
                },
                {
                  buildHookId: '6004c09a59b42be5ce1bc19c',
                  title: 'Blog Website',
                  name: 'cash-flows',
                  apiId: '3260add2-2b01-4281-ad9a-ad6bcc6e2fc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rtroman14/cash-flows',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cash-flows.netlify.app', category: 'apps' }
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
