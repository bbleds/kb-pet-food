

//This is the JS module to call AJAX and retrieve the dog food or cat food list of products depending on the intitial selection


$("#give_dog").click(function(){

	$(this).parent().parent().css("display", "none");

	$.ajax({url: "dogfood.json", 
		error: function (a, b, c) {console.log(a);
		 console.log(b); 
		 console.log(c);}
		}).done(function(data){

			console.log(data);
			console.log("brandsssss", data.dog_brands);

			for (var x = 0; x < data.dog_brands.length; x++) {
				
				$("#output").append(
					"<div class='jumbotron dog_brand_"+x+"' id='initial_select'>"+	
						"<h1>"+data.dog_brands[x].name+"</h1>");

				for (var i = 0; i < data.dog_brands[x].types.length; i++) {
					
					$(".dog_brand_"+x).append("<p class='type_of_food'>"+data.dog_brands[x].types[i].type+"</p>");

					for (var n = 0; n < data.dog_brands[x].types[i].volumes.length; n++) {
						$(".dog_brand_"+x).append("<p class='vol_of_food'>"+data.dog_brands[x].types[n].volumes[n].name+
							":  $"+data.dog_brands[x].types[n].volumes[n].price+"</p>");
						
					};

			};

			$("#output").append("</div>");

			};

			$("#give_dog").css("display", "none");

		}); 





});
