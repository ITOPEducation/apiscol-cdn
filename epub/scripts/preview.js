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
	Monocle.Reader( idPreview.replace("preview", "monocle"), bookData, {}, function(rdr) {
		 window.reader2 = rdr;
         var magnifier = new Monocle.Controls.Magnifier(rdr);
         rdr.addControl(magnifier);
         var scrubber = new Monocle.Controls.Scrubber(rdr);
         rdr.addControl(scrubber);
         var toc = Monocle.Controls.Contents(rdr);
         rdr.addControl(toc, 'popover', { hidden: true });
         createBookTitle(
           rdr,
           {
             start: function () {
               rdr.showControl(toc);
             }
           }
         );
	});
	$previewArea.addClass("activated");
}
