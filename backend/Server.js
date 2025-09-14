const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.post("/" , (req, res) => {
  res.send("Hello World");
});

// POST endpoint to send email
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Setup transporter with Gmail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "barivazhagan7@gmail.com", // ✅ your Gmail
        pass: "",       // ✅ Gmail App Password (not normal password)
      },z
    });

    // Define email content
    await transporter.sendMail({
      from: email,
      to: "barivazhagan7@gmail.com", // ✅ where you receive messages
      subject: subject || "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

// Start server
app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
