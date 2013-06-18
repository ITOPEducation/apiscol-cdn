var $iframe;
var $previewArea;
function deactivatePreview() {

};
function reactivatePreview(idPreview) {

};
function activatePreview(idPreview) {
	$iframe = $("iframe", "#" + idPreview);
	$iframe.attr("src", $iframe.attr("data-src"));
	$iframe.zoomer({
		width : 600,
		zoom : 0.5,
		loadingType : 'spinner',
		spinnerURL : cdnUrl + 'commons/img/loading.gif',
		message : 'Accéder à la page'
	});
	$previewArea = $iframe.closest(".preview-area");
	$previewArea.addClass("activated");
}
