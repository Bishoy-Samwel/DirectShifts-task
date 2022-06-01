class ReferralController < ApplicationController
  before_action :authenticate_user!
  def show
    render json: {
      message: "Get the list of referred emails #{current_user.email}",
      referred: current_user.referred_users
    }
  end
end
