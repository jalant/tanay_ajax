class TasksController < ApplicationController
	def new
		@task = Task.new
		@tasks = Task.all
	end

	def create
		task = Task.new(params[:task])
		task.save!
		task.priority = Priority.find_by_urgency_index(params[:priority_urgency_index])
		color = task.priority.color
		render json: {task: task, priority_urgency_index: task.priority.urgency_index, color: color} 
	end

	def index
		@tasks = Task.all
	end
end