class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.string :description, null: false
      t.references :question, null: false, foreign_key: true
      t.string :allocation, null: false
      t.timestamps
    end
  end
end
