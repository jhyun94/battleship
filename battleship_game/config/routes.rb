Rails.application.routes.draw do
  resources :games do
    member do
      get 'current_player'
      get 'check'
    end
  end

end
