$(function () {
  $(".js-btn-redirect").click(function () {
    var url = $(this).attr("data-redirect");

    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  });

  $("button[data-step]").click(function () {
    var $nextStep = $(this).attr("data-step");

    if (!$nextStep) return false;

    $(this)
      .closest(".js-step")
      .slideUp(200, function () {
        $(document)
          .find(".js-step." + $nextStep)
          .slideDown(100, function () {
            if ($(this).hasClass("js-step-loading")) {
              var _this = this,
                loadingPercent = 1,
                $loadingBar = $(this).find(".loading-bar"),
                timeout = $loadingBar.attr("data-timeout");

              if (!timeout) {
                timeout = 2000;
              }

              if ($loadingBar !== "undefined") {
                var loading = setInterval(function () {
                  $loadingBar
                    .children("span")
                    .css({ width: loadingPercent + "%" });
                  loadingPercent += 0.5;

                  if (loadingPercent > 100) {
                    clearInterval(loading);
                    var $nextStep = $(_this).attr("data-next-step");
                    $(_this).slideUp(200, function () {
                      $(document)
                        .find(".js-step." + $nextStep)
                        .slideDown(100, function () {
                          loadingText(this, "js-step-final");
                        });
                    });
                  }
                }, timeout / 200);
              }
            }

            loadingText(this);
          });
      });
  });

  $(".js-select-list li").on("click", function () {
    var countSelected = $(this).parent().find("li.active").length;
    if (countSelected >= 3 && !$(this).hasClass("active")) {
      return false;
    }

    $(this).toggleClass("active");
  });
});

function loadingText(obj, finnal) {
  var $loadingText = $(obj).find(".js-text-loading");

  if ($loadingText) {
    var step = 0,
      totalStep = $loadingText.find("span").length,
      timeout = $loadingText.attr("data-timeout");

    if (!timeout) {
      timeout = 4000;
    }

    var loadingText = setInterval(function () {
      $loadingText.find("span").eq(step).hide();
      $loadingText
        .find("span")
        .eq(step + 1)
        .show();
      step++;

      if (step >= totalStep - 1) {
        clearInterval(loadingText);

        if (typeof finnal !== "undefined" && finnal == "js-step-final") {
          $("." + finnal)
            .find(".hide")
            .removeClass("hide");
          $("." + finnal)
            .find(".box-loading")
            .hide();
        }
      }
    }, timeout / totalStep);
  }
}
