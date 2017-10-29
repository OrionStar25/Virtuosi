$(document).ready(function() {
			$('#loading').hide();
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE','#1bbc9b', '#4BBFC3', '  #000000','whitesmoke', '#ccddff'],
				anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thpage','lastPage'],
				menu: '#menu',

				//equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
				easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
			});

			$('#mail').hide();

			$('.fa-google').click(function(){
				$('#mail').fadeToggle();				
			});

			$("#slideshow > div:gt(0)").hide();

			setInterval(function() { 
  				
  				$('#slideshow > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
			},  3000)

			// // Get the modal
			// var modal = document.getElementById('myModal');

			// // Get the image and insert it inside the modal - use its "alt" text as a caption
			// var img = document.getElementById('ev1');
			// // var modalImg = document.getElementById("img01");
			// var captionText = document.getElementById("caption");
			// img.onclick = function(){
   //  			modal.style.display = "block";
   //  			// modalImg.src = this.src;
   //  			captionText.innerHTML = this.alt;
			// }

			// // Get the <span> element that closes the modal
			// var span = document.getElementsByClassName("close")[0];

			// // When the user clicks on <span> (x), close the modal
			// span.onclick = function() {
  	// 		modal.style.display = "none";	
			// }	 

		});