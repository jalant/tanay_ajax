$(function(){

  var rowList = $('tr')
  for (i = 0; i < rowList.length; i++) {
    $(rowList[i]).css('background-color', $(rowList[i]).attr('class'));
  }

  $('#submit').on('click', function(e){
  	//prevents the default behavior of the form, i.e. submitting the form
  	e.preventDefault();

    var settings = {

                  task:  {
                  name: $('#task_name').val(),
                  desc: $('#task_desc').val(),
                  duedate: $('#task_duedate').val()  
                  },
                  
                  hello: 'tanay',
                  priority_urgency_index: $('#task_priority_urgency_index').val()  
                  
                }  
  	
  	$.post('/tasks', settings, function(data){
      console.log(data)
      var task_holder = $('<tr>'); 
      var task_name = $('<td>').text(data['task']['name']);
      var task_desc = $('<td>').text(data['task']['desc']);
      var task_duedate = $('<td>').text(data['task']['duedate']);
      var priority = $('<td>').text(data['priority_urgency_index']);
      $(task_holder).css('background-color', data['color'])
      $("#tasks_holder").prepend(task_holder)
      $(task_holder).append(task_name).append(task_desc).append(task_duedate).append(priority)
  		$('#task_desc').val('')
      $('#task_name').val('')
      $('#task_duedate').val('')  
  	});
  });
})


