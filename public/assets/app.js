//eat it now buttons
$(document).ready(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devoured: newDevour
        };

        //update db
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

    // add burger button
    $(".create-update-form").on("submit", function (event) {
        event.preventDefault();
        console.log("add test")
        var newBurger = {
            burger_name: $("#add-burger").val().trim(),
            devoured: 0
        };

        // update db
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger: " + newBurger);
                location.reload();
            }
        );
    });
        
});
