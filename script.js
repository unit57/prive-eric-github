$(document).ready(()=>{
	/*functions to run immediately */
	/* enable material select */
	$('select').material_select();
	/*VARIABLES*/

	/* Counter for NEXT and Back Buttons */
	let counter = 0

	
	/* get all 3 sub headers */
	let subheader1 = $('#subheader1')
	let subheader2 = $('#subheader2')
	let subheader3 = $('#subheader3')
	
	/* get all 3 form pages */
	let formPage1 = $('#formPage1')
	let formPage2 = $('#formPage2')
	let formPage3 = $('#formPage3')

	/* inputs */
	

	/* buttons */
	/* min guests */
	let incrementMinGuests = $('#expectedGuestMinPlus');
	let decrementMinGuests = $('#expectedGuestMinMinus');

	/* max guests */
	let incrementMaxGuests = $('#expectedGuestMaxPlus');
	let decrementMaxGuests = $('#expectedGuestMaxMinus');

	/*amenities*/
	let amenitiesButton = $('#amenitiesButton')

	/*select dropdown */
	let select = $('.select-dropdown')
	
	/* drop down caret */
/*	let caret = $('.select-wrapper').find('.caret').html()
*/	let caret = $('.select-wrapper').find('.caret')



	/* Smooth scroll */
	function scrollUp () {
		$('html, body').animate({
	        scrollTop: $("#subheaderParentDivId").offset().top
	    }, 1);

	}
	/* functionality for NEXT and BACK buttons */
	function checkCounter () {
		if (counter === 0 ) {
			subheader1.css("display","inline");
			subheader2.css("display","none");
			subheader3.css("display","none");

			formPage1.css("display","inline");
			formPage2.css("display","none");
			formPage3.css("display","none");
			/* Toggle Next and Submit Buttons */
			$('#nextButton').css("display", "inline");
			$('#submitButton').css("display", "none");
			/* Toggle Previous Back buttons */
			$('#previousButton').css("display", "inline");
			$('#backButton').css("display", "none");
			/*$('#backButton').html("<p>PriveTable</p>")*/

			scrollUp();
			
			console.log(`counter value 0 = ${counter}`)
		} else if (counter === 1) {
			subheader1.css("display","none");
			subheader2.css("display","inline");
			subheader3.css("display","none");
			
			formPage1.css("display","none");
			formPage2.css("display","inline");
			formPage3.css("display","none");
			/* Toggle Next and Submit Buttons */
			$('#nextButton').css("display", "inline");
			$('#submitButton').css("display", "none");
			/* Toggle Previous Back buttons */
			$('#previousButton').css("display", "none");
			$('#backButton').css("display", "inline");

			scrollUp();

			console.log(`counter value 1 = ${counter}`)
		} else if (counter === 2) {
			subheader1.css("display","none");
			subheader2.css("display","none");
			subheader3.css("display","inline");

			formPage1.css("display","none");
			formPage2.css("display","none");
			formPage3.css("display","inline");
			/* Toggle Next and Submit Buttons */
			$('#nextButton').css("display", "none");
			$('#submitButton').css("display", "inline");
			/* Toggle Previous Back buttons */
			$('#previousButton').css("display", "none");
			$('#backButton').css("display", "inline");

			scrollUp();

			console.log(`counter value 2 = ${counter}`)
		} else if (counter <= 1) {
			counter = 0	
		} else if (counter >= 2) {
			counter = 2
		}
	} checkCounter();

	/* Expcted number of Guests */
	
	/* Min input stop less than Zero */
	function expectedNumberofGuestMin () {
		if(document.getElementById('expectedGuestMinInput').value < 5) {
			minGuestsValue = 0;
			document.getElementById('expectedGuestMinInput').value = 0;
		}
	};
	function expectedNumberofGuestMax () {
		if(document.getElementById('expectedGuestMaxInput').value < 5) {
			maxGuestsValue = 0;
			document.getElementById('expectedGuestMaxInput').value = 0;
		}
	};



	/* Click Events */

	/* BACK button */
	$('#backButton').on('click', () => {
	/*console.log('click button back')*/
		counter -= 1
		checkCounter();
	// console.log('this is counter value'  + counter);
	})

	/* NEXT button*/
	$('#nextButton').on('click', () => {
		/*console.log('click button next')*/
		counter += 1
		checkCounter();
		// console.log('this is counter value ' + counter);
	});



	/* Give submit div button submit functionality */
		
	$('#submitButton').click((e) => { 
		e.preventDefault();
		let submitForm = confirm("Are your sure you want to submit?")
		if (submitForm){
		document.forms[0].submit();
		/* ADD REDIRECT LINK HERE */
		}
	});

	$('#previousButton').click((e) => { 
		e.preventDefault();
		let returnHome = confirm("Are your sure you want to leave?")
		if (returnHome){
		/* ADD REDIRECT LINK HERE */
		}
	});


	/* Increase / Decrease size of Amenities Div */
	seeAmenities = true;

	amenitiesButton.on('click', () => {
		if (seeAmenities === true) {
			document.getElementById('amenities').className = "amenitiesOpen"	
			seeAmenities = false;

			document.getElementById('AmenitiesButtonText').innerHTML = "Hide Amenities"

			document.getElementById('amenitiesButton').className = "upArrow"
			
			console.log ('false')
		} else if (seeAmenities === false) {
			document.getElementById('amenities').className = "amenitiesCollapse"
			document.getElementById('AmenitiesButtonText').innerHTML = "Show Amenities"
			document.getElementById('amenitiesButton').className = "downArrow"
			seeAmenities = true;
			console.log ('true')
		}
	});


	/* Increment Min guest value*/

	let minGuestsValue = 0;

	incrementMinGuests.on('click', () => {
		minGuestsValue += 5;
		/*expectedNumberofGuestMin();*/
		document.getElementById('expectedGuestMinInput').value = minGuestsValue;
		
	});
	decrementMinGuests.on('click', () => {
		minGuestsValue -= 5;
		/*expectedNumberofGuestMin();*/
		document.getElementById('expectedGuestMinInput').value = minGuestsValue;
		expectedNumberofGuestMin();
	});

	/* Increment Max guest value*/

	let maxGuestsValue = 0;

	incrementMaxGuests.on('click', () => {
		maxGuestsValue += 5;
		/*expectedNumberofGuestMin();*/
		document.getElementById('expectedGuestMaxInput').value = maxGuestsValue;
		
	});
	decrementMaxGuests.on('click', () => {
		maxGuestsValue -= 5;
		/*expectedNumberofGuestMin();*/
		document.getElementById('expectedGuestMaxInput').value = maxGuestsValue;
		expectedNumberofGuestMax();
	});

	/* Change color of option when a selection is made */
	
	/* immdiately invoke color change lightgray */
	/*(function colorDropdown(){
		$(select).css('color','rgba(158,158,158,.5)')
	})();*/

	$(document).on('change', select, (event)=> {
		$(event.target).parent().find('.select-dropdown').css('color', 'black')
	});

	/* Change caret from materialize default to privetable caret */
	$(caret).html('<img src="./assets/arrow.png" width="50%" height="100%" ></img> ')
	/*console.log(caret.html())*/




})// end JQuery

