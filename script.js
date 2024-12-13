const btnsClick = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit');
const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingNumber = document.querySelector('.rate-num');

// The functionality of the rating buttons
for (let i = 0; i < btnsClick.length; i++) {
	btnsClick[i].addEventListener('click', function() {
		btnsClick.forEach(button => {
			button.style.backgroundColor = '';
			button.style.color = '';
		});
		btnsClick[i].style.backgroundColor = '#fff';
		btnsClick[i].style.color = '#252d37';

		const value = btnsClick[i].textContent;
		ratingNumber.textContent = value;
	});
}

// When the submit button is clicked
submitBtn.addEventListener('click', function() {
	card.classList.add('hidden');
	thankYouCard.classList.remove('show');
	document.querySelector('main').style.margin = '117px auto';
});

// Pseudo code
/*
when the either of the rating is 
clicked and submit is clicked the 
thank you card should show up with
 the number clicked appearing


 also when the rating button is clicked the background color should changed to white
*/
