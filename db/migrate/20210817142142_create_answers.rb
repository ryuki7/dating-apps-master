class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.string :description, null: false
      t.integer :question_id, null: false
      t.string :allocation, null: false
      t.timestamps
    end
  end
end
