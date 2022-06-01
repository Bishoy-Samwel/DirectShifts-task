class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def build_resource(hash = {})
    super
    # if the referred_by_code is exist in the request body => assign the referred_by value
    if hash[:referred_by_code] && referrer = User.find_by(referral_code: hash[:referred_by_code])
      self.resource.referred_by = referrer
      self.resource.referred_by_code = hash[:referred_by_code]
    end
  end

  private
  
  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end

  def register_success
    render json: { 
      code: 200,
      message: 'Signed up.', 
      user: current_user 
    }, status: :ok
  end

  def register_failed
    render json: { message: "Signed up failure. #{resource.errors.full_messages.to_sentence}"}, status: :unprocessable_entity
  end

end
