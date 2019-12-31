class AddIdDigestToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :id_digest, :string, :after => :id
  end
end
