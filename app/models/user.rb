require 'securerandom'
# Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
class User < ApplicationRecord

  has_many :referred_users, class_name: "User", foreign_key: "referred_by_id"
  belongs_to :referred_by, class_name: "User", optional:true

  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist


  before_create :set_referral_code
  after_create :complete_referral!
  
  validates :referral_code, uniqueness: true

  def set_referral_code
    loop do
      self.referral_code = SecureRandom.hex(6)
      break unless self.class.exists?(referral_code: referral_code)
    end
  end

  def complete_referral!
    update(referral_completed_at: Time.zone.now)
  end
end