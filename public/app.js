'use strict';

$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos)
  
  $('#todoInput').keypress(function(event){
    if(event.which == 13) {
      createTodo();
    }
  });
  
  $('.list').on('click', 'li', function(){
    updateTodo($(this));
  })
  
  $('.list').on('click', 'span', function(e){
    e.stopPropagation();
    removeTodo($(this).parent());
  })
});

const addTodos = (todos) => {
  //add todos to page here
  todos.forEach( todo => addATodo(todo));
}

const addATodo = (todo) => {
  let newTodo = $('<li class="task">'+ todo.name + ' <span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if(todo.completed){
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}

const createTodo = () => {
  //send request to create new todo
  let usrInput = $('#todoInput').val();
  $.post('/api/todos',{name: usrInput})
  .then( newTodo => {
    $('#todoInput').val('');
    addATodo(newTodo);
  })
  .catch( err => {
    console.log(err);
  })
}

const removeTodo = (todo) => {
  let clickedId = todo.data('id');
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${clickedId}`
  })
  .then( data => {
    todo.remove();
  })
  .catch( err =>{
    console.log(err);
  })
}

const updateTodo = (todo) => {
  let updateUrl = '/api/todos/' + todo.data('id');
  let isDone = !todo.data('completed');
  let updateData = {completed: isDone}
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then( updatedTodo => {
    todo.toggleClass("done");
    todo.data('completed', isDone);
  })
  .catch( err => {
    console.log(err);
  })
}


