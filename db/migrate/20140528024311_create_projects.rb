class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.text :technologies
      t.string :image_file
      t.text :github_url
      t.text :host_url
      t.integer :admin_id

      t.timestamps
    end
  end
end
