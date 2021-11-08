class ChangeColumnNameToTargetsTable < ActiveRecord::Migration[6.0]
  def change
    change_column  :targets, :name, :string, null: false, limit: 4
  end
end
