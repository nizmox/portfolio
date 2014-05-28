# == Schema Information
#
# Table name: admins
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class Admin < ActiveRecord::Base
  has_many :projects
  has_many :posts

  attr_accessible :username, :email
end
