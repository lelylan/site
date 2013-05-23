require 'sinatra/base'

class App < Sinatra::Base
  set :public_folder, File.dirname(__FILE__) + '/dist'

  get '/makers' do
    send_file File.join(settings.public_folder, 'makers.html')
  end

  get '/developers' do
    send_file File.join(settings.public_folder, 'developers.html')
  end

  get '/people' do
    send_file File.join(settings.public_folder, 'people.html')
  end

  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end
