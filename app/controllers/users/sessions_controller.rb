class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: { message: "Logged in successfully.", user: current_user }, status: :ok
  end

  def respond_to_on_destroy
    current_user ? log_out_success : log_out_failure
  end

  def log_out_success
    render json: {status: 200, message: "Logged out successfully." }, status: :ok
  end
  
  def log_out_failure
    render json: {status: 401, message: "Logged out failure."}, status: :unauthorized
  end
end
