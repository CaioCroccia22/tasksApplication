
$('form button').click(function(event){
    event.preventDefault();
    //Selecionando os valores nos inputs
    const inputTask = $('#task').val();
    const inputTime = $('#time').val();
   

    //Criando o novo elemento
    const newElement = $('<li></li>');

    const taskContainer = $('<div class="task-item-container"></div>');
    
    $(`<div class="task-item" > ${inputTask} </div>`).appendTo(taskContainer);
    $(`<div class="task-time">${inputTime} hrs</div>`).appendTo(taskContainer);
    $(`<div><button class="btn-cancel">Riscar Tarefa</button></div>`).appendTo(taskContainer);

    
    newElement.append(taskContainer);

    
    $('.task-container').css('display', 'block');

    
    newElement.appendTo('ul');
    
    //Adicionando o evento de clicar no botão
    newElement.find('.btn-cancel').click(function(){ 
        newElement.find('.task-item').css('text-decoration', 'line-through');
    });
})
