'use strict';

//wait until DOM is ready
$(document).ready( () => {
    $.getJSON('./api/todos')
    .then(addTodos);
});

const addTodos = (todos) => {
    //add todos to the page here -- loop through array of todos and append to the page as a li
    todos.forEach( todo => {
        let newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
    });
}