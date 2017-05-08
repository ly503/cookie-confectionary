// cookie confectionary 

$(document).ready(function() {

	$(".choc-counter").val(0);
	$(".lemon-counter").val(0);
	$(".sugar-counter").val(0);

	if (!Cookies.get("chocolate")) {
		Cookies.set("chocolate", 0);
	}

	if (!Cookies.get("lemon")) {
		Cookies.set("lemon", 0);
	}

	if (!Cookies.get("sugar")) {
		Cookies.set("sugar", 0);
	}


	$("img").click(function() {

		// research this
		if ($(this).hasClass("chocolate-cookie")) {

			var numChocCookies = Cookies.get("chocolate");
				if (numChocCookies) {
					Cookies.set("chocolate", (parseInt(numChocCookies) + 1));
					numChocCookies = Cookies("chocolate");
					$(".choc-counter").val(numChocCookies);
				}
		}

		else if ($(this).hasClass("lemon-cookie")) {

			var numLemonCookies = Cookies.get("lemon");
				if (numLemonCookies) {
					Cookies.set("lemon", (parseInt(numLemonCookies) + 1));
					numLemonCookies = Cookies("lemon");
					$(".lemon-counter").val(numLemonCookies);
				}
		}

		else if ($(this).hasClass("sugar-cookie")) {

			var numSugarCookies = Cookies.get("sugar");
				if (numSugarCookies) {
					Cookies.set("sugar", (parseInt(numSugarCookies) + 1));
					numSugarCookies = Cookies("sugar");
					$(".sugar-counter").val(numSugarCookies);
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


