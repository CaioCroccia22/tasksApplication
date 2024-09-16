$('form button').click(function(event){
    event.preventDefault();
    const inputTask = $('#task').val();
    const inputTime = $('#time').val();
    console.log(inputTask);
    console.log(inputTime);

    const newElement = $('<li "display:none;" ></li>');
    // console.log(newElement);
    $(`<div> ${inputTask} </div>`).appendTo(newElement);
    $(`<div> ${inputTime} hrs </div>`).appendTo(newElement);
    $(`<div><button id="btn-cancel">Cancelar</button></div>`).appendTo(newElement);

    
    // console.log(newElement);
    newElement.appendTo('ul');


    console.log(newElement)

})
