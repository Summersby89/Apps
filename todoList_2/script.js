$(document).ready(function () {
	function addCase() {
		let name = $("input").val(),
			text = $("textarea").val();

		if (name.length !== 0 && text.length !== 0) {
			$("input").removeClass("error");
			$("textarea").removeClass("error");
			$(".cases-none").hide();
			$(".cases-list").append(`
			
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">${name}</strong>
	<button class="case-button">
	<svg class="bi bi-caret-down-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	<path fill-rule="evenodd" d="M3.544 6.295A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537z"/>
	<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  </svg>
  </button>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">${text}</div>
</div>
`);

			name = $("input").val("");
			text = $("textarea").val("");
		} else {
			$("input").addClass("error");
			$("textarea").addClass("error");
		}
	}

	function hideCase(textel) {
		textel.slideToggle();
		$(".case-button").toggleClass("case-down");
	}

	function deleteCase(item) {
		item.remove();

		let items = $(".toast");

		if (items.length == 0) {
			$(".cases-none").show();
		}
	}

	$(".btn-primary").on("click", addCase);

	$("body").on("click", ".ml-2", function (event) {
		event.preventDefault();

		let item = $(this).parents(".toast");

		deleteCase(item);
	});

	$("body").on("click", ".case-button", function (event) {
		event.preventDefault();

		let textel = $(this).closest(".toast").find(".toast-body");

		hideCase(textel);
	});
});