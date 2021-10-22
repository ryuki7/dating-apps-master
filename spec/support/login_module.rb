module LoginModule
  # users#system_spec_login のコメントアウトを有効化してからテストする
  def login(user)
    visit system_spec_login_user_path(user)
  end
end