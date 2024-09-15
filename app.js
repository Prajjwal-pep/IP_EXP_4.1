// Define Person class
class Person {
    constructor(name, address, pincode, city, state, country, email, phone, comments, tagline, color, size, quantity, deliveryDate) {
        this.name = name;
        this.address = address;
        this.pincode = pincode;
        this.city = city;
        this.state = state;
        this.country = country;
        this.email = email;
        this.phone = phone;
        this.comments = comments;
        this.tagline = tagline;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
        this.deliveryDate = deliveryDate;
    }

    displayDetails = () => {
        return `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Address:</strong> ${this.address}<br>
            <strong>Pincode:</strong> ${this.pincode}<br>
            <strong>City:</strong> ${this.city}<br>
            <strong>State:</strong> ${this.state}<br>
            <strong>Country:</strong> ${this.country}<br>
            <strong>Email:</strong> ${this.email}<br>
            <strong>Phone:</strong> ${this.phone}<br>
            <strong>Comments:</strong> ${this.comments}<br><br>
            <strong>Product Information</strong><br>
            <strong>Tagline:</strong> ${this.tagline}<br>
            <strong>Color:</strong> ${this.color}<br>
            <strong>Size:</strong> ${this.size}<br>
            <strong>Quantity:</strong> ${this.quantity}<br>
            <strong>Delivery Date:</strong> ${this.deliveryDate}
        `;
    }
}

// Form submission and receipt generation
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Capture form values
    let form = event.target;
    let tagline = form.tagline.value;
    let phone = form.phone.value;
    let comments = form.comments.value;
    let color = document.querySelector('.dropdown .dropbtn').innerText;
    let size = document.querySelectorAll('.dropdown .dropbtn')[1].innerText;
    let quantity = form.quantity.value;
    let deliveryDate = form.delivery.value;

    // Validate data
    if (tagline.length > 50) {
        alert('Tagline must be 50 characters or less.');
        return;
    }

    if (phone.length != 10) {
        alert('Phone number must be exactly 10 digits.');
        return;
    }

    if (comments.length > 200) {
        alert('Comments must be 200 characters or less.');
        return;
    }

    // Create Person object
    let person = new Person(
        form.name.value,
        form['address-line1'].value,
        form.pincode.value,
        form.city.value,
        form.state.value,
        form.country.value,
        form.email.value,
        form.phone.value,
        form.comments.value,
        tagline,
        color,
        size,
        quantity,
        deliveryDate
    );
    //

    // Display receipt
    document.getElementById('receiptDate').innerText = `Receipt Date: ${new Date().toLocaleDateString()}`;
    document.getElementById('receiptDetails').innerHTML = person.displayDetails();

    // Show receipt
    document.getElementById('receipt').style.display = 'block';
});

// Functionality to update dropdown selection
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', function() {
        this.parentElement.previousElementSibling.innerText = this.innerText;
    });
});
