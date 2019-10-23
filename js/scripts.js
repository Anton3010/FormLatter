$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipient = $("input#recipient").val();

    $(".recipient").text(recipient);

    $("#letter").show();

    event.preventDefault();
  });

});
