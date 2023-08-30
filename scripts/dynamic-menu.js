// Ожидаю готовность DOM
$(document).ready(function() {
    $("#target").on("change", function() {
        $("select option:selected").each(function() {
            alert($(this).val());
        });
    });
});
