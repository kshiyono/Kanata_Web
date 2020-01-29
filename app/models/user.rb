class User < ApplicationRecord
  attr_accessor :remember_token
  before_save { self.email = email.downcase }
  after_save :create_id_digest
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :name,      presence: true, length: { maximum: 50 }
  validates :email,     presence: true, length: { maximum: 255 },
                        format: { with: VALID_EMAIL_REGEX },
                        uniqueness: { case_sensitive: false }
  has_secure_password
  validates :password,  presence: true, length: { minimum: 6 }
  mount_uploader :picture, PictureUploader

  class << self
    # 渡された文字列のハッシュ値を返す
    def digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                    BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end

      # ログインユーザ記憶トークン発行
    def new_token
      SecureRandom.urlsafe_base64
    end
  end

  # 永続セッションのためにユーザ記憶トークンをデータベースに登録
  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  # ユーザ記憶トークンをデータベースから削除
  def forget
    update_attribute(:remember_digest, '')
  end

  # 渡されたトークンがダイジェストと一致したらtrueを返す
  def authenticated?(remember_token)
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  # after_saveによって呼び出されるメソッド
  def create_id_digest
    if id_digest.nil?
      new_digest = Digest::SHA256.hexdigest(id.to_s)
      update_column(:id_digest, new_digest)
    end
  end
end
