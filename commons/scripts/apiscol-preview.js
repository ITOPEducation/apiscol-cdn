var cdnUrl = "http://apiscol.cdn.local/cdn/";
function createStyleSheetLinkTag(href) {
	var $docHeader = $("head");
	var $styleSheetLink = $(document.createElement("link")).attr({
		rel : "stylesheet",
		type : "text/css",
	});
	$styleSheetLink.attr("href", cdnUrl + href);
	$docHeader.append($styleSheetLink);
}
