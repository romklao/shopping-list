var state = {
    items: []
};

var renderList = function(state, element, itemDataAttr) {
    var itemsHTML = state.items.map(function(item, index) {
      return '<li data-list-item-id=' + index + '>' +
                '<span class="shopping-item js-shopping-item' + (item.checked ? ' shopping-item__checked' : '') + '">' + item.item + '</span>' +
                '<div class="shopping-item-controls">' +
                      '<button class="js-shopping-item-toggle">' +
                        '<span class="button-label">check</span>' +
                      '</button>' + " " +
                      '<button class="js-shopping-item-delete">' +
                        '<span class="button-label">delete</span>' +
                      '</button>' +
                '</div>' +
            '</li>'
    });
    element.html(itemsHTML);
}

function addItem(state, item) {
    return state.items.push({
      item: item,
      checked: false
    });        
};

function getItem(state, index) {
    return state.items[index];
}

function updateItem(state, index, newState) {
    state.items[index] = newState;
}

function deleteItem(state, index) {
    state.items.splice(index, 1);
}

function setupFormSubmit() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        addItem(state, $('#js-new-item').val());
        renderList(state, $('.js-shopping-list'));
    });
}

function setupItemToggle() {
    $('.js-shopping-list').on('click', '.js-shopping-item-toggle', function(event) {
        //console.log('hi', $(this).parent().parent().attr('data-list-item-id'));
        var index = $(this).parent().parent().attr('data-list-item-id');
        updateItem(state, index, {
            item: state.items[index].item,
            checked: !state.items[index].checked
        });
        renderList(state, $('.js-shopping-list'));
    });
}

function setupItemDelete() {
    $('.js-shopping-list').on('click', '.js-shopping-item-delete', function(event) {
        var index = $(this).parent().parent().attr('data-list-item-id');
        deleteItem(state, index);
        renderList(state, $('.js-shopping-list'));

    });
}

$(function() {
  var itemDataAttr = 'data-list-item-id';
  setupFormSubmit();
  setupItemToggle();
  setupItemDelete();
  });











