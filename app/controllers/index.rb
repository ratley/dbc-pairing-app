get '/' do
  erb :index
end

get '/login' do
  if request.xhr?
    erb :login, layout: false
  else
    erb :login
  end
end

get '/register' do
  if request.xhr?
    erb :register, layout: false
  else
    erb :register
  end
end
