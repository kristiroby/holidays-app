class HolidaysController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    # index
    def index
      render json: Holiday.all
    end
  
    # show
    def show
        render json: Holiday.find(params["id"])
    end
  
    # create
    def create
        render json: Holiday.create(params["holiday"])
    end
  
    # delete
    def delete
      render json: Holiday.delete(params["id"])
    end
  
    # update
    def update
      render json: Holiday.update(params["id"], params["holiday"])
    end
  end