Priority.delete_all
Task.delete_all

p1 = Priority.create(name: 'High Importance', urgency_index: 4, color: 'orange')
p2 = Priority.create(name: 'EXTREME Importance', urgency_index: 5, color: 'red')
p3 = Priority.create(name: 'Average Importance', urgency_index: 3, color: 'yellow')
p4 = Priority.create(name: 'Low Importance', urgency_index: 2, color: 'blue')
p5 = Priority.create(name: 'No Importance', urgency_index: 1, color: 'green')


t1 = Task.create(name: 'get Taim', desc: 'on Monday', duedate: '2013-05-07')
t2 = Task.create(name: 'get Chopt', desc: 'on Tuesday', duedate: '2013-06-07') 
t3 = Task.create(name: 'get Thai', desc: 'on Wednesday', duedate: '2013-07-07')
t4 = Task.create(name: 'get Indian', desc: 'on Thursday', duedate: '2013-08-07')
t5 = Task.create(name: 'get Chipotle', desc: 'on Fruday', duedate: '2013-09-07')

p1.tasks << t3
p2.tasks << t1 << t4
p3.tasks << t5
p4.tasks << t2


