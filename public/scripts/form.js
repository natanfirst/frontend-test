function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;


    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    if (name.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }

    if (email.trim() === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
    }

    if (message.trim() === '') {
      document.getElementById('messageError').textContent = 'Message is required.';
      isValid = false;
    }

    return isValid;
  }
