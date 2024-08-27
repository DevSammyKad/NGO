// Get the close button (i element) with the specified class

const closeIcon = document.querySelector(
  '.ri-close-line.appointment-close-btn'
);

// Get the receipt div by its ID
const receiptDiv = document.getElementById('receipt');

// Add a click event listener to the close button
closeIcon.addEventListener('click', () => {
  // Hide the receipt div when the close button is clicked
  if (receiptDiv) {
    receiptDiv.style.display = 'none';
  }
});

// date,time validation
var today = new Date().toISOString().split('T')[0];
var input = document.getElementById('date');
input.setAttribute('min', today);

input.addEventListener('input', function () {
  var selectedDate = new Date(input.value);
  if (selectedDate.getDay() === 0) {
    // 0 corresponds to Sunday
    alert(
      'Sundays we are close. Please Select Between Monday To Saturday Date.'
    );
    input.value = ''; // Clear the selected date
  }
});
// Restrict time input to 9 am to 5 pm
function generateReceipt() {
  const address =
    'Address: Flat No 1, Sagar Apartment, Rakshewadi Rd, Rajgurunagar, Maharashtra 410505';
  const officeContact = 'If any Other query Call On : 8459324821 ';
  const receiptFees = '0.00 INR ';
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Display the receipt
  const receiptDiv = document.getElementById('receipt');
  receiptDiv.style.display = 'flex';

  // Fill in the receipt information
  document.getElementById(
    'officeAddress'
  ).textContent = `Appointment Address : ${address}`; // Add address to receipt
  document.getElementById(
    'officeContact'
  ).textContent = ` Office Contact : ${officeContact}`;
  document.getElementById('receiptName').textContent = `Full Name : ${name}`;
  document.getElementById(
    'receiptPhone'
  ).textContent = `Phone Number : ${phone}`;
  document.getElementById('receiptEmail').textContent = `Email : ${email}`;
  document.getElementById('receiptDate').textContent = `Date : ${date}`;
  document.getElementById(
    'receiptTime'
  ).textContent = `Time 24Hr Format : ${time}`;
  document.getElementById(
    'receiptFees'
  ).textContent = `Total Fee's : ${receiptFees}`;
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycbwuSb-rx3nM0z6tVtJUDrBo8GltCCE_t2ARpYBfslRgEQtfdIPLMC4KB7QWndSlZ2O00g/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  generateReceipt();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert('Your Appointment Successfully Booked.');
    })
    .catch((error) => console.error('Error!', error.message));
});
