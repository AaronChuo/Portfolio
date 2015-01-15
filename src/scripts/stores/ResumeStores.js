/**
 * Resume Stores
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

/**
 * Data
 * @private
 */
var _ResumeData = {

  // personal details
  personalDetails: [

    {caption: 'Name',       text: 'Aaron Cho'},
    {caption: 'Title',      text: 'FrontEnd Engineer'},
    {caption: 'Gender',     text: 'Male'},
    {caption: 'Birthday',   text: '1984-10-08'},
    {caption: 'Education',  text: 'Chung Yuan Christian University - Information Management'},
    {caption: 'Interests',  text: 'Travel, Movies, Boardgames, Programming, and Design'},
    {caption: 'Description' text: ''}

  ],

  // skills
  skills: [

    {name: 'Top Skills',                text: ['JavaScript', 'CSS3', 'HTML5']},
    {name: 'Frameworks',                text: ['ReactJS', 'AngularJS']},
    {name: 'Libraries',                 text: ['jQuery', 'Bootstrap']},
    {name: 'Knowledges',                text: ['MVC', 'Flux', 'RWD', 'BDD', 'SPA']}
    {name: 'Preprocessor',              text: ['Sass']},
    {name: 'Build System',              text: ['Gulp', 'WebPack']},
    {name: 'Version Control',           text: ['Git', 'Subversion']},
    {name: 'Test Tools',                text: ['Mocha', 'Protractor', 'Cucumber']},
    {name: 'Agile Skills',              text: ['Scrum']},
    {name: 'Backend Skills',            text: ['NodeJS', 'PHP']},
    {name: 'Database',                  text: ['MongoDB', 'MySQL']},
    {name: 'Documentation & Writting',  text: ['Markdown', 'jsDoc']},
    {name: 'Special Knowledges',        text: ['Socket.io', 'RESTful API Design']},
    {name: 'Graphic Skills',            text: ['SVG', 'Photoshop', 'Illustrator']},
    {name: 'Others Skills',             text: ['Wordpress', 'Jekyll', 'Hexo']}

  ],

  // experiences
  experiences: [

    Professional: [

      {
        timestamp: [begin: '', end: ''],
        company: '',
        title: '',
        desc: '',
        projects: [
          {name: '', techs: '', desc: ''},
          {name: '', techs: '', desc: ''},
          {name: '', techs: '', desc: ''}
        ]
      },

      {
        timestamp: [begin: '', end: ''],
        company: '',
        title: '',
        desc: '',
        projects: [
          {name: '', techs: '', desc: ''},
          {name: '', techs: '', desc: ''},
          {name: '', techs: '', desc: ''}
        ]
      },

      {
        timestamp: [begin: '', end: ''],
        company: '',
        title: '',
        desc: '',
        projects: [
          {name: '', techs: '', desc: ''},
          {name: '', techs: '', desc: ''},
          {name: '', techs: '', desc: ''}
        ]
      }

    ],

    Community: [

      {
        timestamp: [begin: '', end: ''],
        name: '',
        title: '',
        link: '',
        desc: '',
        images: []
      },

      {
        timestamp: [begin: '', end: ''],
        name: '',
        title: '',
        link: '',
        desc: '',
        images: []
      }

    ],

    Personal: [

      {
        timestamp: [begin: '', end: ''],
        name: '',
        desc: '',
        images: []
      }

    ]

  ],

  // works
  works: [

    {
      name: '',
      link: '',
      date: '',
      desc: '',
      tags: [],
      previews: []
    },

    {
      name: '',
      link: '',
      date: '',
      desc: '',
      tags: [],
      previews: []
    },

    {
      name: '',
      link: '',
      date: '',
      desc: '',
      tags: [],
      previews: []
    }

  ],

  // references
  references: [

    {
      name: 'Andy So',
      title: 'General Manager',
      company: 'FriendFinder Network Inc.',
      relationship: 'Project Manager',
      desc: 'Andy was senior project manager when I worked in FriendFinder Networks Inc. He was also our team manager and my friend. Now he is General Manager in FFN Inc.',
      contacts: [
        email: 'aso.tw@ffn.com',
        phone: '+886-989-236-139'
      ]
    },

    {
      name: 'Polo Chen',
      title: 'Professor',
      company: 'Department of Information Management, Chung-Yuan Christian University',
      relationship: 'Teacher',
      desc: 'Mr. Chen is my teacher in college. He gave me an office for web technologies researching, and some project to implement, he is a good teacher and my friend.',
      contacts: [
        email: 'polochen@cycu.edu.tw',
        phone: '+886-939-869-606'
      ]
    },

    {
      name: 'Rocky Wu',
      title: 'Senior FrontEnd Engineer',
      company: 'Trend Micro',
      relationship: 'Ex-Team Leader',
      desc: 'Rocky was Frontend Engineering team leader before, he always research new tech with me, we did many pet projects and implementation, such as NodeJS and Socket.io.',
      contacts: [
        email: 'rocky823@gmail.com',
        phone: '+886-926-510-776'
      ]
    }

  ]

};

/**
 * Public method for component using.
 * @public
 */
var ResumeStores = assign({}, EventEmitter.prototype, {

  /**
   * Get all of cosmos data.
   * @return {[type]} [description]
   */
  getAll: function () {

    return _ResumeData;

  }

});

module.exports = ResumeStores;
