$(function(){

  var rowList = $('tr')
  console.log(rowList)
  for (i = 0; i < rowList.length; i++) {
    console.log(rowList[i])
    $(rowList[i]).css('background-color', $(rowList[i]).attr('class'));
  }

 $('#submit').on('click', function(e){
    e.preventDefault();

    var settings = {

                  priority:  {
                  name: $('#priority_name').val(),
                  color: $('#priority_color').val(),
                  urgency_index: $('#priority_urgency_index').val()  
                  }
                  
                }  
    
    $.post('/priorities', settings, function(data){
      var priority_holder = $('<tr>'); 
      var priority_name = $('<td>').text(data['priority']['name']);
     // var priority_color = $('<td>').text(data['priority']['desc']);
      var priority_urgency_index = $('<td>').text(data['priority']['urgency_index']);
   

      $(priority_holder).css('background-color', data['color'])
      $("#tasks_holder").prepend(priority_holder)
      $(priority_holder).append(priority_name).append(priority_urgency_index)

    });
  });





});

