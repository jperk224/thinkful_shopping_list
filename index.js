// Functions

function addListItem(item) {
    // setup html alements to append
    let checkButton = "<button class='shopping-item-toggle'><span class='button-label'>check</span></button>";
    let deleteButton = "<button class='shopping-item-delete'><span class='button-label'>delete</span></button>";
    let listItem = `<span class='shopping-item'>${item}</span>`;
    let divItem = `<div class='shopping-item-controls'>${checkButton}${deleteButton}</div>`;
    let liItem = `<li>${listItem}${divItem}</li>`;
    $(".shopping-list").append(liItem);
}

// Event Listeners
function addToList() {
    $("button[type='submit']").on('click', function(event) {
        event.preventDefault();
        const input = $("#shopping-list-entry");
        // make sure there's input before appending the list
        if(input.val().length > 0) {
            addListItem(input.val());
        }
        // clear the input box
        input.val('');
    });
}

// Execute Listeners

$(addToList);