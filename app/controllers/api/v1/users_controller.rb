class Api::V1::UsersController < ApiController
  before_action :set_user, only: [:show]

  def show
    render json: @user
  end

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
#debugger
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.fetch(:user, {}).permit(:name, :email, :password, :password_confirmation)
    end
end
