// navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.sceollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// update time and date
function updateDateTime() {
    const timeElement = document.getElementById('userTime'); 
    const dateElement = document.getElementById('userDate'); 
    const now = new Date();
    
    if (timeElement) {
        timeElement.textContent = Date.now()
    }

    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        dateElement.textContent = now.toLocaleDateString('en-Us', options)
    }
}

// initial update
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// copy timestamp on click
const timeElement = document.getElementById('userTime');
timeElement.addEventListener('click', () => {
    const timestamp = timeElement.textContent;
    navigator.clipboard.writeText(timestamp).then(() => {
        const originalText = timeElement.textContent;
        timeElement.textContent = 'Copied';
        setTimeout(() => {
            timeElement.textContent = originalText;
        }, 1000);
    });
});

// avatar click animation
const avatar = document.getElementById('avatar');
avatar.addEventListener('click', () => {
    avatar.style.animation = 'none';
    setTimeout(() => {
        avatar.style.animation = '';
    }, 10);
});

// name click effect
const userName = document.getElementById('userName');
const names = ['Emmanuel Okon', 'Frontend Wizard', 'Code Enthusiast', 'Emmanuel Okon'];
let nameIndex = 0;

userName.addEventListener('click', () => {
    nameIndex = (nameIndex + 1) % names.length;
    userName.style.opacity = '0';
    setTimeout(() => {
        userName.textContent = names[nameIndex];
        userName.style.opacity = '1';
    }, 200);
});

// Interactive list items
const listitems = document.querySelectorAll('.list-item');
listitems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'fadeIn 0.5s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

 // Contact Form Validation
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation functions
        function validateName() {
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Full name is required';
                nameError.classList.add('show');
                nameInput.classList.add('error');
                return false;
            }
            
            nameError.classList.remove('show');
            nameInput.classList.remove('error');
            return true;
        }

        function validateEmail() {
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email address is required';
                emailError.classList.add('show');
                emailInput.classList.add('error');
                return false;
            }
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address (e.g., name@example.com)';
                emailError.classList.add('show');
                emailInput.classList.add('error');
                return false;
            }
            
            emailError.classList.remove('show');
            emailInput.classList.remove('error');
            return true;
        }

        function validateSubject() {
            const subjectInput = document.getElementById('subject');
            const subjectError = document.getElementById('subject-error');
            
            if (!subjectInput.value.trim()) {
                subjectError.textContent = 'Subject is required';
                subjectError.classList.add('show');
                subjectInput.classList.add('error');
                return false;
            }
            
            subjectError.classList.remove('show');
            subjectInput.classList.remove('error');
            return true;
        }

        function validateMessage() {
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Message is required';
                messageError.classList.add('show');
                messageInput.classList.add('error');
                return false;
            }
            
            if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters long';
                messageError.classList.add('show');
                messageInput.classList.add('error');
                return false;
            }
            
            messageError.classList.remove('show');
            messageInput.classList.remove('error');
            return true;
        }

        // Real-time validation
        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('subject').addEventListener('blur', validateSubject);
        document.getElementById('message').addEventListener('blur', validateMessage);

        // Clear error on input
        document.getElementById('name').addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                document.getElementById('name-error').classList.remove('show');
            }
        });

        document.getElementById('email').addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                document.getElementById('email-error').classList.remove('show');
            }
        });

        document.getElementById('subject').addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                document.getElementById('subject-error').classList.remove('show');
            }
        });

        document.getElementById('message').addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                document.getElementById('message-error').classList.remove('show');
            }
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide success message first
            successMessage.classList.remove('show');
            
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isSubjectValid = validateSubject();
            const isMessageValid = validateMessage();
            
            // If all valid, show success message and reset form
            if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                successMessage.classList.add('show');
                contactForm.reset();
                
                // Remove any lingering error classes
                document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Log form data (in production, this would be sent to a server)
                console.log('Form submitted successfully!');
                console.log({
                    name: e.target.name.value,
                    email: e.target.email.value,
                    subject: e.target.subject.value,
                    message: e.target.message.value,
                    timestamp: Date.now()
                });
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        });

        // Interactive list items
        const listItems = document.querySelectorAll('.list-item');
        listItems.forEach(item => {
            item.addEventListener('click', function() {
                this.style.animation = 'fadeIn 0.5s ease';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });

console.log('Frontend Wizards Stage 1 - Multi-page application initialized!');
console.log('Pages: Home, About, Contact');
console.log('Profile Card initialized with interactivity!');
console.log('Current date:', new Date().toLocaleDateString());
console.log('Current timestamp:', Date.now());