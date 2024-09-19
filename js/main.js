
$('form button').click(function(event){
    event.preventDefault();
    //Selecionando os valores nos inputs
    const inputTask = $('#task').val();
    const inputTime = $('#time').val();
   

    //Criando o novo elemento
    const newElement = $('<li></li>');
    
    $(`<div class="task-item" > ${inputTask} </div>`).appendTo(newElement);
    $(`<div> ${inputTime} hrs </div>`).appendTo(newElement);
    $(`<div><button class="btn-cancel">Riscar Tarefa</button></div>`).appendTo(newElement);

    
    ///Exibir a tarefa
    $('.task-container').css('display','block');


    // Adicionando o elemento a tag ul
    newElement.appendTo('ul');


    
    //Adicionando o evento de clicar no botão
    newElement.find('.btn-cancel').click(function(){ 
        newElement.find('.task-item').css('text-decoration', 'line-through');
    });
})
