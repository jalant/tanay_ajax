class Task < ActiveRecord::Base
  attr_accessible :desc, :name, :duedate, :priority_id

  belongs_to :priority
end
