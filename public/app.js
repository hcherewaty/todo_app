'use strict';

//wait until DOM is ready
$(document).ready( () => {
    $.getJSON("/api/todos")
    .then(addTodos)
    
    //if the keycode hit was 'enter'
    $('#todoInput').keypress( (event) => {
      if(event.which === 13) {
        createTodo();
      }
    });
    
    $('.list').on('click', 'li', () => {
      updateTodo($(this));
    })
    
    //root event listener on ul that is present on page load, but listening only on spans within ul with class of 'list'
    $('.list').on('click', 'span', (event) => {
      e.stopPropagation();
      removeTodo($(this).parent());
    })
  });

  //add todos to the page here -- loop through array of todos and append to the page as a li
const addTodos = (todos) => {
    //add todos to page here
    todos.forEach( todo => {
      addTodo(todo);
    });
  }
  
const addTodo = (todo) => {
    var newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
      newTodo.addClass("done");
    }
    $('.list').append(newTodo);
  }
  
const createTodo = () => {
     //get user input from form
    let usrInput = $('#todoInput').val();
    $.post('/api/todos',{name: usrInput})
    .then( newTodo => {
      $('#todoInput').val('');
      addTodo(newTodo);
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
    .catch( err => {
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
  }
