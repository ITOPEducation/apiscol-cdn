var currentView = "001";
var $ubzPreview;
function deactivatePreview() {
};
function reactivatePreview(idPreview) {
};
function activatePreview(idPreview) {
	$ubzPreview = $("#" + idPreview);
	$previewArea = $ubzPreview.closest(".preview-area");
	$ubzPreview.show();
	var nbTabs = $(".slides-accordion", $ubzPreview).find("h1").length;
	var tabHeight = $(".slides-accordion", $ubzPreview).find("h1").first()
			.outerHeight();
	var tabsHeight = (tabHeight) * (nbTabs + 3);
	$(".left-col", $ubzPreview)
			.wrap($("<div class='accordion-wrapper'></div>"));
	$(".accordion-wrapper", $ubzPreview).height($previewArea.height());
	$(".left-col").height(Math.max(tabsHeight, $previewArea.height()));

	$(".slides-accordion", $ubzPreview).accordion(
			{
				fillSpace : true,
				activate : function(event, ui) {
					currentView = ui.newHeader.children("a").attr("href")
							.replace("#", "");
					updateViews();
				}

			});
	$(".actions-container p", $ubzPreview)
			.each(
					function(index, item) {
						isLearner = $(item).hasClass("learner");
						$icon = $(document.createElement("img"))
								.attr(
										"src",
										isLearner ? (cdnUrl + "/ubz/img/learner_icon.png")
												: (cdnUrl + "/ubz/img/teacher_icon.png"))
								.attr("id", $(item).attr("id"))
								.attr("data-task", $(item).text())
								.addClass("ui-state-highlight")
								.CreateBubblePopup(
										{
											innerHtml : $(item).text(),
											themePath : cdnUrl
													+ "/jquery-bubble-popup/jquerybubblepopup-themes",
											width : "200px",
											position : "top",
											align : "center",
											themeName : isLearner ? "violet"
													: "yellow",
											innerHtmlStyle : {
												"font-size" : "14px"
											}
										}).replaceAll($(item));

					});
	updateViews();
	$previewArea.addClass("activated");
}
function updateViews() {
	var offset = 0;
	$(".view", $ubzPreview).each(function(index, elem) {
		if ($(elem).find("img").attr("src").indexOf(currentView) == -1)
			return;
		offset = -$(elem).get(0).offsetTop;
	});
	$(".slides-views", $ubzPreview).animate({
		top : offset + "px"
	});
}
