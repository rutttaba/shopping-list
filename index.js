
$(function () {

    $('button[type="submit"]').click(function(event) {
        var newItem = $("input[type='text']").val();
        $(this).val("");
        $("ul").append('<li><span class="shopping-item">' +
            newItem +
            '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });

    $('input[type="text"]').keypress(function(event) {
        if (event.which === 13) {
            $(this).val("");
            $("ul").append('<li><span class="shopping-item">' +
                newItem +
                '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        }
    });

    $("ul").on("click", ".shopping-item-toggle", function() {
        $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).parents('li').remove();
    });

});


   






