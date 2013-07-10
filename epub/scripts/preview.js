var currentView = "001";
var $ubzPreview;
function deactivatePreview() {
};
function reactivatePreview(idPreview) {
};
function activatePreview(idPreview) {
	$epubPreview = $("#" + idPreview);
	$previewArea = $epubPreview.closest(".preview-area");
	$epubPreview.show();
	$epubPreview.find("monocle-")
	Monocle.Reader('monocle-' + idPreview, bookData, {}, function(reader) {
		reader.moveTo({
			page : 3
		});
	});
	$previewArea.addClass("activated");
}
