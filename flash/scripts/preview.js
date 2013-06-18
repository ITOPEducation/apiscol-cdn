function deactivatePreview() {
};
function reactivatePreview(idPreview) {
};
function activatePreview(idPreview) {
	$animation = $("div#" + previewElementId).show();
	$previewArea = $animation.closest(".preview-area");
	var width = 450, height = 350;
	if ($previewArea) {
		width = $previewArea.innerWidth();
		height = $previewArea.innerHeight();
	}
	swfobject.embedSWF(swfName, previewElementId, width, height, "9.0.0");
	$previewArea.addClass("activated");
}
