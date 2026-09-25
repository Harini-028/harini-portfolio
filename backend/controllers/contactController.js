const submitContact = (req, res) => {

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required"
    });
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address"
    });
  }

  console.log("New Contact Message");
  console.log("-------------------");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.status(201).json({
    success: true,
    message: "Your message has been received successfully",
    data: {
      name,
      email,
      message
    }
  });
};


module.exports = {
  submitContact
};