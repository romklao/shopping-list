var state = {
    items: []
};

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item, index) {
      return '<li>' +
                '<span class="shopping-item js-shopping-item">' + item + '</span>' +
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
    return state.items.push(item);        
};

function getItem(state, itemIndex) {
    return state.items[itemIndex];
}

function setupFormSubmit() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        addItem(state, $('#js-new-item').val());
        renderList(state, $('.js-shopping-list'));
    });
}

function setupItemToggle() {
    $('.js-shopping-list').on('click', $('.js-shopping-item-toggle'), function(event) {
        console.log('hi', $(this).closest('li span'));

        $(this).find('.js-shopping-item').toggleClass('shopping-item__checked')
    });
}

function deleteItem() {
    $('.js-shopping-item-delete').click(function(event) {
        $('ul').remove();
    })
}

$(function() {
  setupFormSubmit();
  setupItemToggle();
  deleteItem();
});













