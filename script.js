$(document).ready(function() {
    $("#todo").focus();

    function addItem() {
        $("#todo-items").append("<li><input type='checkbox' class='done'/><span>" + $("#todo").val() + "</span><button class='delete'>Delete</button><button class='edit'>Edit</button></li>");
        $("#todo").val("");
    }

    // $("#todo").keydown(function(e) {
    //     if (e.which == 13)
    //         addItem();
    // });

    $("#add").click(addItem);


    $(document).on("click", '.edit', function() {
        $(this).closest("li").find("span").prop("contenteditable", true).focus();

    })

    $(document).on("click", '.delete', function() {
        $(this).parent().remove();
        return false;
    })

    $(document).on("click", '#todo-items .done', function() {
        // if ($(this).closest("li").find("span").css('textDecoration') === 'line-through') {
        //     $(this).closest("li").find("span").css('textDecoration', 'none');
        // } else {
        //     $(this).closest("li").find("span").css('textDecoration', 'line-through');
        // }

        let q = $(this).parent().html()
        $('.doneTask').append('<li class="undone">' + q + '</li>')
        $(this).closest('li').remove()

    });
    $(document).on("click", '.doneTask .done', function() {
        console.log('andr aaya')
        let q = $(this).parent().html()
        $('#todo-items').append('<li>' + q + '</li>')
        $(this).closest('li').remove()

    });



    $(document).on("keydown", 'span[contenteditable]', function(e) {
        if (e.which == 13) {
            $(this).removeAttr("contenteditable").blur();
            return false;
        }
    });
});