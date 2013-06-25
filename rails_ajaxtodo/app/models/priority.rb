class Priority < ActiveRecord::Base
  attr_accessible :urgency_index, :name, :color

  has_many :tasks
end
