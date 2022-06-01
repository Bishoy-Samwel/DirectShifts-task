class ReferralController < ApplicationController
  before_action :authenticate_user!

  def referred_users_status()
    referred_users_status = []
    current_user.referred_users.each do |user|
      status = user.referral_completed_at? ? "complete" : "pending"
      referred_users_status.push({user:user, status:status})
    end
    return referred_users_status
  end

  def show
    render json: {
      message: "Get the list of referred emails #{current_user.email}",
      referred_users_status: referred_users_status()
    }
  end
end
