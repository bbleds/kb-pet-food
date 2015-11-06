

//This is the JS module to call AJAX and retrieve the dog food or cat food list of products depending on the intitial selection

$.ajax({url: "data/dogfood.json", error: function (a, b, c) {console.log(a); console.log(b); console.log(c);}}).done(dogfood); 
