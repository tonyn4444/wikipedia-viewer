$(document).ready(function() {

	// var url = "https://en.wikipedia.org/w/api.php?"
	// var searchParams = "action=query&format=json&list=search&srsearch="

	var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	$('#random-article').on("click", function() {
		console.log("clicked");
	});


	var searchInput = document.getElementById('search').value

	$('#search').on('change', function() {

		console.log(document.getElementById('search').value)
			searchInput = document.getElementById('search').value
			$.ajax({
			url: url + searchInput,
			dataType: 'jsonp',
			success: function(response) {
				// var data = JSON.parse(response);
				console.log(response.query.pages);
				var objects = response.query.pages
				// console.log(objects[3233]);



					for (var key in objects) {
					    // skip loop if the property is from prototype
					    if (!objects.hasOwnProperty(key)) continue;

					    var obj = objects[key];
					    console.log(obj);
					    $('#' + obj.index).html('<h2>' + obj.title + '</h2><p>' + obj.extract + '</p>');
					    $('.' + obj.index).attr('href', "https://en.wikipedia.org/?curid=" + obj.pageid)
					    $('.' + obj.index).attr('target', "_blank");
					    $('.' + obj.index).css('text-decoration', 'none');
							$("#" + obj.index).hover(function(){
							    $(this).css("color", "white");
							    }, function(){
							    $(this).css("color", "#092b40");
							});

					    // for (var prop in obj) {
					    //     // skip loop if the property is from prototype
					    //     if(!obj.hasOwnProperty(prop)) continue;

					        
					    //     console.log(prop + " = " + obj[prop]);
					    //     console.log(prop)
					    // }
					}								



				for (var i = 0; i < objects.length; i++) {
					$('#' + i).html('<h2>' + objects[i].title + '</h2><p>' + objects[i].extract + '</p>');
				}
				$('.hidden').css('display', 'block');
				$('#main-container').css('margin-top', '20px');
			}
		});
	});

	// $.ajax({
	// 	url: url + searchParams,
	// 	dataType: 'jsonp',
	// 	success: function(response) {
	// 		// var data = JSON.parse(response);
	// 		console.log(response.query.search);
	// 	}
	// });
});