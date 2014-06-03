# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Admin.destroy_all
Post.destroy_all
Project.destroy_all

admin = Admin.create({ :username => 'Nizmox', :email => 'nizmox@gmail.com' })

post = admin.posts.create({ :title => 'A test post', :content => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quibusdam, temporibus recusandae molestiae maiores cupiditate repellendus pariatur fugiat sit ad deleniti amet est vitae reiciendis maxime quasi dolores vero esse.' })

project = admin.projects.create(
  [
    { 
      :title => 'Text Adventure Builder', 
      :description => 'Text Adventure Builder lets you create and share your own custom text based adventure games. The complex adventure editor lets you easily build your own story and bring this to life with images.',
      :technologies => 'Ruby on Rails, Devise Gem (for authentication), Bootstrap, Carrier Wave Gem (for AWS image hosting)',
      :image_file => 'tab.png',
      :github_url => 'https://github.com/nizmox/text_adv_app',
      :host_url => 'http://txt-adv.herokuapp.com/'
    },
    { 
      :title => 'Demochattic', 
      :description => 'Demochattic is a web based chat client with a difference. There are no channel/room admins and all decisions only proceed after a majority vote from the users. It\'s Democrattic!',
      :technologies => 'Ruby on Rails, Devise Gem (for authentication), Bootstrap, Carrier Wave Gem (for AWS image hosting), underscore.js, moment.js (for date formatting)',
      :image_file => 'demochattic.png',
      :github_url => 'https://github.com/nizmox/demochat',
      :host_url => 'http://demochattic.herokuapp.com/'
    },
    { 
      :title => 'ReviewMi', 
      :description => 'Review Mi is a content review site, allowing users to rate and review content that they have read / watched or listened to. Currently only Movie reviews have been implemented.',
      :technologies => 'Ruby on Rails, backbone.js, underscore.js, bcrypt (for password encryption), OMDB API',
      :image_file => 'review_mi.png',
      :github_url => 'https://github.com/nizmox/review_mi',
      :host_url => 'http://review-mi.herokuapp.com/'
    },
    { 
      :title => '93 Made Games', 
      :description => '93 Made Games is a company that creates and markets board and card games. The goal was to replace the existing static site with a database driven CMS that would facilitate quick and easy content updates.',
      :technologies => 'Ruby on Rails, Devise Gem (for authentication), Bootstrap, Kramdown Gem (for markdown editing)',
      :image_file => 'nt_made.png',
      :github_url => 'https://github.com/nizmox/ntmade',
      :host_url => 'http://ntmade.herokuapp.com/'
    }
  ]
)