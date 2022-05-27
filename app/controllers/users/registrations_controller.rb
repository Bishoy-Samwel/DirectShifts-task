class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def build_resource(hash = {})
    super
    if hash[:referred_by_code] && referrer = User.find_by(referral_code: hash[:referred_by_code])
      self.resource.referred_by = referrer
    end
  end

  private
  
  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end

  def register_success
    render json: { 
      message: 'Signed up.', 
      user: current_user 
    }, status: :ok
  end

  def register_failed
    render json: { message: "Signed up failure.", errors: user.errors.full_messages }, status: :unprocessable_entity
  end

end
