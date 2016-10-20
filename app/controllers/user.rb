get '/users/login' do
  if request.xhr?
    erb :login, layout: false
  else
    erb :login
  end
end

post '/users' do
  p "hi"
  @user = User.find_by(email: params[:email])
  if @user.password == params[:password]
    login(@user)
    redirect '/'
  else
    erb :login
  end
end

get '/users/new' do
  if request.xhr?
    erb :register, layout: false
  else
    erb :register
  end
end

post '/users/new' do
  @user = User.new(params[:user])
  @user.password = params[:password]
  @user.save!
  erb :login
end

get '/logout' do
  logout
  redirect '/'
end
