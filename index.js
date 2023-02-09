

const msg = 'Please provide a valid email address';
const form = document.getElementById('form');
const button = form.querySelector('[type="submit"]');

const error = document.createElement('p');
error.classList.add('error_text');
error.textContent = msg;

function checkEmail (e) {
	e.preventDefault();
	const email = e.target.querySelector('[type="email"]').value;
	if (!validateEmail(email)) {
		form.classList.add("error");
		form.insertBefore(error, button);
	} else {
		form.removeChild(error);
		form.classList.remove("error");
	}
}

function validateEmail(email) {
  const re =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return re.test(String(email).toLowerCase());
  

}

/*explaination for the above code block:return re.test(String(email).toLowerCase());

This line returns the result of testing the email address against the regex.
First, the email argument is converted to a string and then lowercased using the String and toLowerCase functions, respectively. This is done because email addresses are case-insensitive.
Then, the test method of the re regex object is called with the lowercased email address string as an argument. The test method returns true if the string matches the pattern defined by the regex and false otherwise.
1.String(email): This function takes any value and converts it to a string. For example, if email is the number 123, String(email) would return the string "123".

2.toLowerCase(): This method returns a string with all lowercase characters. For example, if email is the string "HELLO@example.com", email.toLowerCase() would return "hello@example.com".

3.re.test(...): This method tests whether a string matches the pattern defined by a regular expression (regex). It returns true if the string matches the pattern and false otherwise. For example, if re is the regex /hello/ and email is the string "hello world", re.test(email) would return true.

*/
form.addEventListener("submit", checkEmail);
