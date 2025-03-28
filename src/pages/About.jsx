
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Rating,
} from '@mui/material';
import { styled } from '@mui/system';
import { AccountCircleRounded as AccountIcon } from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'; // Added icons for buttons

// Testimonials data
const testimonialsData = [
  {
    name: 'John Doe',
    title: 'CEO & Founder',
    rating: 4.5,
    review: 'Amazing product! It has significantly improved our workflow and productivity.',
  },
  {
    name: 'Jane Smith',
    title: 'Chief Operating Officer',
    rating: 5,
    review: 'A truly game-changing solution. The team is incredibly supportive and professional.',
  },
  {
    name: 'Alex Johnson',
    title: 'Lead Developer',
    rating: 4,
    review: 'The product is great, but we would love to see more customization options.',
  },
  {
    name: 'Emily Davis',
    title: 'Marketing Manager',
    rating: 5,
    review: 'Absolutely love the interface. It’s user-friendly and makes everything so easy!',
  },
  {
    name: 'Michael Brown',
    title: 'Project Manager',
    rating: 4.5,
    review: 'This tool has helped us meet deadlines more efficiently, which is critical for us.',
  },
  {
    name: 'Sarah Wilson',
    title: 'UX/UI Designer',
    rating: 4,
    review: 'Very intuitive design. Would like more flexibility in customizing the theme.',
  },
  {
    name: 'David Lee',
    title: 'Data Analyst',
    rating: 5,
    review: 'The analytics features are fantastic! I can generate reports so quickly.',
  },
  {
    name: 'Jessica Green',
    title: 'Content Strategist',
    rating: 4.5,
    review: 'Great for collaboration. Our team is now more aligned than ever before.',
  },
  {
    name: 'Daniel King',
    title: 'Software Engineer',
    rating: 5,
    review: 'Highly recommend this tool for any development team. It has simplified our processes.',
  },
  {
    name: 'Olivia Harris',
    title: 'Customer Support Lead',
    rating: 4,
    review: 'Great product, but I feel there could be better documentation for new users.',
  },
];

const useStyles = styled((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },
}));

function AboutUs() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next set of 3 testimonials
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // Function to move to the previous set of 3 testimonials
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 3 : prevIndex - 1
    );
  };

  // Set interval for auto-scrolling
  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 4000); // Change testimonial every 4 seconds
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
    fontFamily: theme.typography.fontFamily,
  }));

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12}>
            <Item>
              <Typography variant="h4" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                About Us
              </Typography>
              <AccountIcon sx={{ fontSize: 100, marginTop: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ marginTop: 2, fontFamily: 'Roboto, Arial, sans-serif' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                We are a passionate team focused on building innovative solutions to improve the lives of our users. Our mission is to make life easier, more efficient, and enjoyable through technology.
              </Typography>
            </Item>
          </Grid>

          {/* Testimonial Section */}
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                What Our Clients Say
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 1s ease-in-out', // smooth transition
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                 <Button
                  variant="contained"
                  color="primary"
                  onClick={prevTestimonial}
                  sx={{
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                  }}
                >
                  <ChevronLeft sx={{ fontSize: 30 }} />
                </Button>
                {testimonialsData
                  .slice(currentIndex, currentIndex + 3) // Show 3 testimonials at a time
                  .map((testimonial, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: '33.33%',
                        padding: 1,
                      }}
                    >
                      <Paper
                        sx={{
                          padding: 3,
                          textAlign: 'center',
                          boxShadow: 3,
                          borderRadius: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <AccountIcon sx={{ fontSize: 80, marginBottom: 2 }} />
                        <Typography variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                          {testimonial.title}
                        </Typography>
                        <Rating value={testimonial.rating} readOnly sx={{ marginTop: 1 }} />
                        <Typography variant="body2" sx={{ fontFamily: 'Roboto, Arial, sans-serif', marginTop: 2 }}>
                          {testimonial.review}
                        </Typography>
                      </Paper>
                    </Box>
                    
                  ))}
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={nextTestimonial}
                  sx={{
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 2,
                  }}
                >
                  <ChevronRight sx={{ fontSize: 30 }} />
                </Button>
                  
              </Box>

            </Item>
          </Grid>

          {/* Meet the Team Section */}
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                Meet the Team
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Paper
                    sx={{
                      padding: 3,
                      textAlign: 'center',
                      boxShadow: 3,
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <AccountIcon sx={{ fontSize: 80, marginBottom: 2 }} />
                    <Typography variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      John Doe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      CEO & Founder
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Paper
                    sx={{
                      padding: 3,
                      textAlign: 'center',
                      boxShadow: 3,
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <AccountIcon sx={{ fontSize: 80, marginBottom: 2 }} />
                    <Typography variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      Jane Smith
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      Chief Operating Officer
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Paper
                    sx={{
                      padding: 3,
                      textAlign: 'center',
                      boxShadow: 3,
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <AccountIcon sx={{ fontSize: 80, marginBottom: 2 }} />
                    <Typography variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      Alex Johnson
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                      Lead Developer
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Item>
          </Grid>

          {/* Our Story Section */}
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                What started as a small idea in a garage has grown into a full-fledged company. Our team is united by a common goal: to build a better tomorrow. We believe in hard work, innovation, and constantly pushing the boundaries of what is possible.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutUs;
