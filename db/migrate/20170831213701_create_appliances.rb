class CreateAppliances < ActiveRecord::Migration
  def change
    create_table :appliances do |t|
      t.string :name
      t.integer :watts
      t.decimal :hours_per_day
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
