class Api::V1::SessionsController < ApiController

  def new
  end

  def create
    user = User.find_by(email: sessions_login_params[:email].downcase)
    if user && user.authenticate(sessions_login_params[:password])
      remember user
      render json: user
    else
      not_authorized
    end
  end

  def confirm
    if user = User.find_by(
      id_digest: sessions_confirm_params[:id_digest],
      remember_digest: sessions_confirm_params[:remember_digest]
    )
      render json: user
    else
      not_authorized
    end
  end

  def destroy
    user = User.find_by(id_digest: sessions_logout_params[:id_digest])
    forget user
  end

  private

    def sessions_login_params
      params.fetch(:user, {}).permit(:email, :password)
    end

    def sessions_confirm_params
      params.fetch(:user, {}).permit(:id_digest, :remember_digest)
    end

    def sessions_logout_params
      params.fetch(:user, {}).permit(:id_digest, :remember_digest)
    end

    # ユーザーのセッションを永続化
    def remember(user)
      user.remember
    end

    # ユーザーのセッションを永続化を解除
    def forget(user)
      user.forget
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
