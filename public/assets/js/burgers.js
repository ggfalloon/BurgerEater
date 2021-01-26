// jQuery event handlers for submiting a new burger and devouring burgers.
$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgText").val().trim(),
            devoured: false
        };
        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger added.");
                location.reload();
            }
        );
    });

    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Devoured", id);
                location.reload();
            }
        );
    });


});