

//This is the JS module to call AJAX and retrieve the dog food or cat food list of products depending on the intitial selection


$("#give_dog").click(function(){
	$("#output").css("display", "none");
	$("#output").html("");



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
						$(".dog_brand_"+x).append("<p>"+data.dog_brands[x].types[n].volumes[n].name+
							":  $"+data.dog_brands[x].types[n].volumes[n].price+"</p>");
						
					};

			};

			$("#output").append("</div>");

			};


		}); 
			$("#output").fadeIn("slow");
});



$("#give_cat").click(function(){
	$("#output").css("display", "none");
	$("#output").html("");

	$.ajax({url: "catfood.json", 
		error: function (a, b, c) {console.log(a);
		 console.log(b); 
		 console.log(c);}
		}).done(function(data){

			console.log("mah data"+data.cat_brands[0].types[0].breed);

			//output brand name
			for (var i = 0; i < data.cat_brands.length; i++) {
				
				$("#output").append("<div class='jumbotron cat_brand_"+i+"' id='initial_select'>"+
					"<h1>"+data.cat_brands[i].name+"</h1>");

				//for each brand name, output breeds
				for (var x = 0; x < data.cat_brands[i].types.length; x++) {
					// console.log(data.cat_brands[i].types[x].breed);
					$(".cat_brand_"+i).append("<p class='type_of_food'>"+data.cat_brands[i].types[x].breed+"</p>");

					for (var y = 0; y < data.cat_brands[i].types[x].type.length; y++) {

						//code for outputting each formula
						//console.log(data.cat_brands[i].types[x].type[y].formula);

						//for each breed output the formula
						$(".cat_brand_"+i).append("<p class='type_of_formula' >"+data.cat_brands[i].types[x].type[y].formula+"</p>")

						//for each formula output the volumes
						// console.log(data.cat_brands[i].types[x].type[y].volumes);
						for(var z = 0; z < data.cat_brands[i].types[x].type[y].volumes.length; z++){
							console.log(data.cat_brands[i].types[x].type[y].volumes[z]);
							$(".cat_brand_"+i).append("<p>"+data.cat_brands[i].types[x].type[y].volumes[z].name+
								" $"+data.cat_brands[i].types[x].type[y].volumes[z].price+"</p>");

						}

					
					};



				};

				

			};

		});

	$("#output").fadeIn("slow");
});
























