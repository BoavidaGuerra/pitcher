class Demo < ApplicationRecord
  belongs_to :user
  has_many :personas, dependent: :destroy
  has_many :pitches, dependent: :destroy
  has_many :userjourneys, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
