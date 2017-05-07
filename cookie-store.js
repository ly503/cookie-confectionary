// cookie confectionary 

$(document).ready(function() {

	$(".choc-counter").val(0);
	$(".lemon-counter").val(0);
	$(".sugar-counter").val(0);


	$("img").click(function() {

		// research this
		if ($(this).hasClass("chocolate-cookie")) {

			var numChocCookies = Cookies.get("chocolate");
				if (numChocCookies) {
					Cookies.set("chocolate", (parseInt(numChocCookies) + 1));
					$(".choc-counter").val(numChocCookies);
				}

				else {
					Cookies.set("chocolate", 0);
				}
		}

		else if ($(this).hasClass("lemon-cookie")) {

			var numLemonCookies = Cookies.get("lemon");
				if (numLemonCookies) {
					Cookies.set("lemon", (parseInt(numLemonCookies) + 1));
					$(".lemon-counter").val(numLemonCookies);
				}
				else {
					Cookies.set("lemon", 0);
				}
		}

		else if ($(this).hasClass("sugar-cookie")) {

			var numSugarCookies = Cookies.get("sugar");
				if (numSugarCookies) {
					Cookies.set("sugar", (parseInt(numSugarCookies) + 1));
					$(".sugar-counter").val(numSugarCookies);
				}
				else {
					Cookies.set("sugar", 0);
				}

		}


		$(".reset").click(function() {
			Cookies.set("chocolate", 0);
			Cookies.set("lemon", 0);
			Cookies.set("sugar", 0);

			$(".choc-counter").val(0);
			$(".lemon-counter").val(0);
			$(".sugar-counter").val(0);
		});

	});




});


