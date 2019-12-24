class Api::V1::SessionsController < ApiController

  def new
  end

  def create
    user = User.find_by(email: sessions_params[:email].downcase)
    if user && user.authenticate(sessions_params[:password])
      log_in user
      render json: user, notice: 'メッセージが送信されました'
    else
      #TODO:ログイン失敗時のメッセージレンダリング
      not_authorized
    end
  end

  def destroy
  end

  private

    def sessions_params
      params.fetch(:user, {}).permit(:email, :password)
    end

    # 渡されたユーザーでログインする
    def log_in(user)
      session[:user_id] = user.id
    end

    # 現在ログイン中のユーザーを返す (いる場合)
    def current_user
        if session[:user_id]
          @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    # 認証エラー
    def not_authorized
      render json: { errors: ['Not Authorized'] }, status: :unauthorized
    end
end
