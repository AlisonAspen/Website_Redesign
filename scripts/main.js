function showSolutions() {
  $(".mediaspectrum").css("display", "block");
  console.log("solutions page loaded");
}

$('#mediaspectrum').click(function() {
  $(this).css("text-decoration", "underline");
  $(".ms2-text").css("display", "block");

  $(".ttv-text").css("display", "none");
  $("#tacticvision").css("text-decoration", "none");
  $(".mft-text").css("display", "none");
  $("#mediafrontier").css("text-decoration", "none");
  console.log("mediaspectrum clicked");
});

$('#tacticvision').click(function() {
  $(this).css("text-decoration", "underline");
  $(".ttv-text").css("display", "block");

  $(".ms2-text").css("display", "none");
  $("#mediaspectrum").css("text-decoration", "none");
  $(".mft-text").css("display", "none");
  $("#mediafrontier").css("text-decoration", "none");
  console.log("ttvclicked");
});

$('#mediafrontier').click(function() {
  $(this).css("text-decoration", "underline");
  $(".mft-text").css("display", "block");

  $(".ttv-text").css("display", "none");
  $("#tacticvision").css("text-decoration", "none");
  $(".ms2-text").css("display", "none");
  $("#mediaspectrum").css("text-decoration", "none");
  console.log("mft clicked");
});
