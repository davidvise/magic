function nextpage(pagenum) {
  $("#page"+pagenum).slideUp("slow");
  var nextpagenum = pagenum+1;
	$("#page"+nextpagenum).slideDown("slow");
}

function prevpage(pagenum) {
  $("#page"+pagenum).slideUp("slow");
  var prevpagenum = pagenum-1;
	$("#page"+prevpagenum).slideDown("slow");
}