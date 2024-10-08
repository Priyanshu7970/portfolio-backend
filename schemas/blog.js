// schemas/pet.js
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image'
            }
          ]
        }, 
          {
            title: 'Blog Image',
            name: 'blogimage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              }
            ]
          },
          {
            name: 'metadesc',
            type: 'string',
            title: 'Meta description'
        },
        {
            title: 'Created At',
            name: 'launchAt',
            type: 'datetime',
            options:{
                dateFormat:'MM-DD',
                timeFormat:'HH:mm',
                timestep:5,
                calendarTodayLabel:'Today'
            }

        },
        {
            name: 'Author',
            type: 'object',
            fields: [
              {
                title: 'Author',
                name: 'director',
                type: 'reference',
                to: [{type: 'author'}]
              }
            ]
          }

    ]
}