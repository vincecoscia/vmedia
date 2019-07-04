class PagesController < ApplicationController

def index

  respond_to do |format|
    format.html do
      @logged_in = current_admin ? true : false
    end
    format.json do
      render json: { logged_in: @logged_in }
    end
  end
end

def about
end

private

def set_index
  @logged_in = current_admin ? true : false
end

end