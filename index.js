// Functions

function addListItem(item) {
    // setup html alements to append
    let checkButton = "<button class='shopping-item-toggle'><span class='button-label'>check</span></button>";
    let deleteButton = "<button class='shopping-item-delete'><span class='button-label'>delete</span></button>";
    let listItem = `<span class='shopping-item'>${item}</span>`;
    let divItem = `<div class='shopping-item-controls'>${checkButton}${deleteButton}</div>`;
    let liItem = `<li>${listItem}${divItem}</li>`;
    if(item.length > 0) {
        $(".shopping-list").append(liItem); //TODO: fix button margins if possible
    }
}

// Event Listeners
function addToList() {
    $("button[type='submit']").on('click', function(event) {
        event.preventDefault();
        const input = $("#shopping-list-entry");
        // make sure there's input before appending the list
        addListItem(input.val());
        // clear the input box
        input.val('');
    });
}

function crossOff() {
    $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
        // grab the encapsulating li and find the shopping item and toggle the text-decoration class
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
}

function removeItem() {
    $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
        // moving up the DOM hierarchy find the li encapsulating the delete button and remove it
        $(this).closest('li').remove();
      });
}

// Execute Listeners

$(addToList);
$(removeItem);
$(crossOff);