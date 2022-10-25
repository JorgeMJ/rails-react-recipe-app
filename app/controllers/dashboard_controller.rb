class DashboardController < ApplicationController
  def index
    @example = 'I am a message from the controller'
  end

  def form
    cosa = 'cosa from controller' + params[:fname]

    respond_to do |format|
      format.json  { render :json => cosa } 
    end
  end
end
