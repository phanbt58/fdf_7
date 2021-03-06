class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :product

  validates :rating, format: {with: /\A\d+(?:\.\d{0,2})?\z/},
    numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 5}

  after_save :calculate_score
  after_destroy :calculate_score

  scope :existed, ->(product, user){where("product_id = ? and user_id = ? and
    rating > ?", product.id, user.id, 0.0)}

  private
  def calculate_score
    total = product.comments.reduce(0) {|total, element| total + element.rating}
    average_score = total / (product.comments
      .pluck("DISTINCT user_id").count.nonzero? || 1)
    product.update_attribute :rate_score, average_score
  end
end
