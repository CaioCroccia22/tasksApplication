$('form button').click(function(event){
    event.preventDefault();
    const inputTask = $('#task').val();
    const inputTime = $('#time').val();
    console.log(inputTask);
    console.log(inputTime);
})
