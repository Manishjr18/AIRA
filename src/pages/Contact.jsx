import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Divider } from '@mui/material';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are mandatory!');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_sle4crw', // Replace with your EmailJS service ID
        'template_ahkraan', // Replace with your EmailJS template ID
        templateParams,
        'HwK6YKZnTQTVCA160' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } catch (err) {
      setError('Something went wrong, please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center horizontally
          justifyContent: 'center', // Center vertically
          marginTop: 4,
        }}
      >
        {/* Centered "Contact Us" Heading */}
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        {/* Quote Message */}
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', fontStyle: 'italic', color: 'text.secondary', marginBottom: 2 }}
        >
          "Reach out to us, and let's create something amazing together."
        </Typography>

        {/* Horizontal Line */}
        <Divider sx={{ width: '100%', maxWidth: '500px', marginBottom: 3 }} />

        {/* "Get in Touch" Text */}
        <Typography variant="h5" gutterBottom>
          Get in Touch
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '1000px' }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography variant="body2" color="success" sx={{ marginBottom: 2 }}>
              Message sent successfully! We will get back to you soon.
            </Typography>
          )}

          {/* Centered "Send Message" Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default ContactUs;