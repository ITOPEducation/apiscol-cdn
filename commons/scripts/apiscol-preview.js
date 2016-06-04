var cdnUrl = "https://rawgit.com/ITOPEducation/apiscol-cdn/master/";
function createStyleSheetLinkTag(href) {
	var $docHeader = $("head");
	var $styleSheetLink = $(document.createElement("link")).attr({
		rel : "stylesheet",
		type : "text/css",
	});
	$styleSheetLink.attr("href", cdnUrl + href);
	$docHeader.append($styleSheetLink);
}
