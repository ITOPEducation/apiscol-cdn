var fv;
function deactivatePreview() {
	fv.pause();
};
function reactivatePreview(idPreview) {
	fv.play();
};
function activatePreview(idPreview) {
	createStyleSheetLinkTag("flare-video/stylesheets/flarevideo.css");
	createStyleSheetLinkTag("flare-video/stylesheets/flarevideo.default.css");
	$video = $("#" + idPreview);
	$previewArea = $video.closest(".preview-area");
	$video.show();
	var videoURL = $video.attr("data-url")
	fv = $video.flareVideo({
		flashSrc : 'media'
	});
	fv.load([ {
		src : videoURL + '/output.mp4',
		type : 'video/mp4'
	}, {
		src : videoURL + '/output.ogg',
		type : 'video/ogg'
	} ]);
	$previewArea.addClass("activated");
}
