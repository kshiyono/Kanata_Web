class Api::V1::UsersController < ApiController
  before_action :set_user, only: [:show, :update]

  def show
    render json: @user
  end

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_create_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(id_digest: user_update_params[:id_digest])
    debugger
    if @user.update_attributes(user_update_params)
      redirect_to @user
    end
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_create_params
      params.fetch(:user, {}).permit(:name, :email, :password, :password_confirmation)
    end

    def user_update_params
      params.fetch(:user, {}).permit(:id_digest, :name, :email, {pictures: []})
    end
end
