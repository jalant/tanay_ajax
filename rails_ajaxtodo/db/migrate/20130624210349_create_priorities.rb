class CreatePriorities < ActiveRecord::Migration
  def change
    create_table :priorities do |t|
      t.integer :urgency_index
      t.string :color
      t.string :name


      t.timestamps
    end
  end
end
