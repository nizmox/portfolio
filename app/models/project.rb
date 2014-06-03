# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string(255)
#  description  :text
#  technologies :text
#  image_file   :string(255)
#  github_url   :text
#  host_url     :text
#  admin_id     :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class Project < ActiveRecord::Base
  belongs_to :admin

  attr_accessible :title, :description, :technologies, :image_file, :github_url, :host_url
end
