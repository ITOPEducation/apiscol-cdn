var player;
function deactivatePreview() {
	player.pause();
};
function reactivatePreview(idPreview) {
	player.play();
};
function activatePreview(idPreview) {
	videojs.options.flash.swf = "http://apiscol.crdp-versailles.fr/cdn/video-js/video-js.swf" 
	createStyleSheetLinkTag("video-js/video-js.min.css");
	$video = $("#" + idPreview);
	var videoURL = $video.attr("data-url");
	$previewArea = $video.closest(".preview-area");
	$video.replaceWith('<video id="' + idPreview + '"'
			+ 'class="video-js vjs-default-skin"'
			+ 'controls preload="auto" width="640" height="264"'
			+ 'poster="http://apiscol.crdp-versailles.fr/cdn/commons/img/logo-api.png"'
			+ 'data-setup=\'{"example_option":true}\'>' + '<source src="'
			+ videoURL + '/output.mp4" type="video/mp4" />' + '<source src="'
			+ videoURL + '/output.ogg" type="video/ogg" />' + '</video>')

	videojs(idPreview).ready(function() {
		player = this;
		player.play();
	});
	$previewArea.addClass("activated");
}