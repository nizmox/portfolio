class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.text :image
      t.integer :admin_id

      t.timestamps
    end
  end
end
