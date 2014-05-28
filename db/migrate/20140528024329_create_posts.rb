class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.text :image
      t.integer :admin_id

      t.timestamps
    end
  end
end
