require 'bcrypt'

before '/' do
  if !logged_in?
    redirect '/users/login'
  end
end

get '/' do
  erb :index
end
