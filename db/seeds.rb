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

project = admin.projects.create({ :title => 'A test project', :description => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quibusdam, temporibus recusandae molestiae maiores cupiditate repellendus pariatur fugiat sit ad deleniti amet est vitae reiciendis maxime quasi dolores vero esse.' })