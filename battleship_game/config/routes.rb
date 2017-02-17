Rails.application.routes.draw do
  root 'games#index'
  resources :games do
    member do
      get 'current_player'
      get 'check'
      post 'winner'
    end
  end

end
