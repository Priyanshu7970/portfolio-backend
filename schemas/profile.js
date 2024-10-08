// schemas/pet.js
  // const profile = {
  //   title:"PriyanshuPortfolio",
  //   name:"Priyanshu", 
  //   image:"../assets/img/dp.jpg",
  //   // image:"../assets/img/blog-author.jpg",
  //   fblink:"https://www.facebook.com/people/Priyanshu-Gupta/pfbid02bX8paAQyxZPJP7am51nHvfYeya3DiM9p3uYaby9StUAKxuWCTK4vBTcPLgdFNgAAl/",
  //   twitterlink:"https://x.com/Priyanshu241055",
  //   linkedinlink:"https://www.linkedin.com/in/priyanshu-gupta-a5b83722b/",
  //   instagramlink:"https://www.instagram.com/priyanshu_gupta_07_10_02/",
    
  // }
export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'fblink',
            type: 'string',
            title: 'Fb Link'
        },
        {
            name: 'leetcodelink',
            type: 'string',
            title: 'Leetcode Link'
        },
        {
            name: 'githublink',
            type: 'string',
            title: 'Github Link'
        },
        {
            name: 'work',
            type: 'string',
            title: 'Work'
        },
        {
            name: 'desc',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'twitterlink',
            type: 'string',
            title: 'Twitter Link'
        },
        {
            name: 'linkedinlink',
            type: 'string',
            title: 'Linkedin Link'
        },
        {
            name: 'instagramlink',
            type: 'string',
            title: 'Instagram Link'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name:'about', 
            type:'string',
            title:'About'
        },
        {
            name:'image',
            type:'image',
            title:'Image'
        }

    ]
}