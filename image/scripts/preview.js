function deactivatePreview() {
};
function reactivatePreview(idPreview) {
};
function activatePreview(idPreview) {
	$image = $("img", "#" + idPreview).show();
	$previewArea = $image.closest(".preview-area");
	var frameRatio = $previewArea.innerHeight() / $previewArea.innerWidth();
	var imageRatio = $image.height() / $image.width();
	if (imageRatio > frameRatio) {
		$image.height($previewArea.innerHeight());
		$image.css("margin-left", ($previewArea.innerWidth()-$image.width())/2);
	} else {
		$image.width($previewArea.innerWidth());
	}
	$previewArea.addClass("activated");
}
