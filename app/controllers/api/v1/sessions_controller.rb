class Api::V1::SessionsController < ApiController

  def new
  end

  def create
    user = User.find_by(email: sessions_params[:email].downcase)
    if user && user.authenticate(sessions_params[:password])
      log_in user
      render json: user
    else
      not_authorized
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end

  private

    def sessions_params
      params.fetch(:user, {}).permit(:email, :password)
    end

    def log_in(user)
      session[:user_id] = user.id
    end

    def log_out
      session.delete(:user_id)
      @current_user = nil
    end

    # ログインユーザを保持
    def current_user
        if session[:user_id]
          @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    # ログインしている場合はtrue
    def logged_in?
      !current_user.nil?
    end

    def not_authorized
      render json: { errors: ['Cannot find email/password combination'] }, status: :unauthorized
    end
end
