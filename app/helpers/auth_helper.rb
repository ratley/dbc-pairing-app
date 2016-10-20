helpers do
  def logged_in?
    !session[:id].nil?
  end

  def login(user)
    session[:id] = user.id
  end

  def logout
    session[:id] = nil
  end

end
