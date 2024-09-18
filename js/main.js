
$('form button').click(function(event){
    event.preventDefault();
    const inputTask = $('#task').val();
    const inputTime = $('#time').val();
    console.log(inputTask);
    console.log(inputTime);

    const newElement = $('<li "display:none;" ></li>');
    // console.log(newElement);
    $(`<div class="task-item" > ${inputTask} </div>`).appendTo(newElement);
    $(`<div> ${inputTime} hrs </div>`).appendTo(newElement);
    $(`<div><button class="btn-cancel">Cancelar</button></div>`).appendTo(newElement);

    
    // console.log(newElement);
    newElement.appendTo('ul');


    console.log(newElement);

    newElement.find('.btn-cancel').click(function(){
        // newElement.fadeOut(100000); 
        newElement.find('.task-item').css('text-decoration', 'line-through');
    });
})
