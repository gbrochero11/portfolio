
$(document).ready(function function_name(argument) {
		$("#loadpage").delay(3000).fadeOut("slow");

		$(".img-desing").click(function function_name(argument) {
			$("#expli1").fadeIn(800);
			$(".img-services").hide();
			$(".img-servicesgif").remove();
		})
		$(".img-sql").click(function function_name(argument) {
			$("#expli2").fadeIn(800);
			$(".img-services1").hide();
			$(".img-services1gif").remove();
		})

			$('.me').smoove({offset:'40%'});
			$('.for').smoove({offset:'40%'});
			$(".img-desing").smoove({moveX:'-50%'});
			$(".img-sql").smoove({moveX:'50%'});
			$('.div-textme1').smoove({offset:'40%'});


	$(window).scroll(function function_name(argument) {
			var height = $(window).scrollTop();
			if (height>80) {
				$('#barra').addClass("fixed");
				$('#barra').animate({left:'90%'});
				$('#barra').animate({top:'80%'});
			}
			else{
				$('#barra').removeClass("fixed");
			}
			if (screen.width<100) {
				$('#barra').css('display','none');
			}
		})

	})