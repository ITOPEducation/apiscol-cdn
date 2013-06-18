function deactivatePreview() {
};
function reactivatePreview(idPreview) {
};
function activatePreview(idPreview) {
	$pageContainer = $("#" + idPreview).show();
	$previewArea = $pageContainer.closest(".preview-area").css("overflow-y","scroll").css("overflow-x","hidden");
	$pageContainer.children("img").width($previewArea.innerWidth());
	$previewArea.addClass("activated");
}
