var $epubPreview;
function deactivatePreview() {
};
function reactivatePreview(idPreview) {
};
function activatePreview(idPreview) {
	$epubPreview = $("#" + idPreview);
	$previewArea = $epubPreview.closest(".preview-area");
	$epubPreview.show();
	$epubPreview.find("monocle-")
	Monocle.Reader( idPreview.replace("preview", "monocle"), bookData, {}, function(reader) {
		
	});
	$previewArea.addClass("activated");
}
