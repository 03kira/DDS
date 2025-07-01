$(document).ready(function () {
  $(".filter-btn").on("click", function () {
    var category = $(this).attr("data-filter");

    if (category == "all") {
      $(".filter-item").show();
    } else {
      $(".filter-item").hide();
      $("." + category).show();
    }

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  // Trigger click on 'All' button on page load to show all items
  $('.filter-btn[data-filter="all"]').trigger("click");
});
