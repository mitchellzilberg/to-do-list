//JQuery Translation
function newItem() {
  // Adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  // trying to clear input after adding li

  // document.getElementById('myInput').value = "";

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }


  // Crossing out an item from the list of items
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  // Adding the delete button "X"
  let crossOutButton = $('<button class="crossOutButton"></button>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  // Adding CLASS DELETE (DISPLAY: NONE) from the css
  function deleteListItem () {
    li.addClass('delete');
  }

  // Reordering the items
  $('#list').sortable();

}
