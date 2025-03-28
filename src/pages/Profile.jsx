import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  auth,
  db,
} from '../firebase/firebaseConfig'; // Import auth and db from firebaseConfig
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from 'firebase/auth'; // Import Firebase Auth methods
import PlaceIcon from '@mui/icons-material/Place';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    location: '',
    phoneNumber: '',
  });

  const [profileData, setProfileData] = useState({
    name: '',
    dateOfBirth: '',
    location: '',
    phoneNumber: '',
    photoUrl: 'https://via.placeholder.com/150',
  });

  const [email, setEmail] = useState(''); // Separate state for email
  const [activeSection, setActiveSection] = useState('personalInfo'); // Track active section
  const [credentials, setCredentials] = useState({
    currentEmail: '',
    currentPassword: '',
    newEmail: '',
    newPassword: '',
  });
  const [subscription, setSubscription] = useState(false); // Subscription state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCredentialsChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSavePersonalInfo = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user is signed in.');
      return;
    }

    try {
      const userProfileRef = doc(db, 'profile_info', user.uid);
      await setDoc(userProfileRef, {
        ...formData,
        email: user.email, // Save the user's email along with other data
      });
      alert('Personal information saved!');
      fetchProfileData();
    } catch (error) {
      console.error('Error saving data to Firebase:', error);
      alert('Failed to save data. Please try again.');
    }
  };

  const handleUpdateCredentials = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user is signed in.');
      return;
    }

    try {
      // Reauthenticate the user
      const credential = EmailAuthProvider.credential(credentials.currentEmail, credentials.currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Update email and password
      if (credentials.newEmail) {
        await updateEmail(user, credentials.newEmail);
        setEmail(credentials.newEmail); // Update the displayed email
      }
      if (credentials.newPassword) {
        await updatePassword(user, credentials.newPassword);
      }

      alert('Credentials updated successfully!');
      setCredentials({
        currentEmail: '',
        currentPassword: '',
        newEmail: '',
        newPassword: '',
      });
    } catch (error) {
      console.error('Error updating credentials:', error);
      alert('Failed to update credentials. Please check your current email and password.');
    }
  };

  const handleSubscriptionChange = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user is signed in.');
      return;
    }

    try {
      const userProfileRef = doc(db, 'profile_info', user.uid);
      await setDoc(userProfileRef, { subscription }, { merge: true });
      alert('Subscription preference saved!');
    } catch (error) {
      console.error('Error saving subscription preference:', error);
      alert('Failed to save subscription preference. Please try again.');
    }
  };

  const fetchProfileData = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.log('No user is signed in.');
      return;
    }

    // Set the email from Firebase Authentication
    setEmail(user.email || '');

    try {
      const userProfileRef = doc(db, 'profile_info', user.uid);
      const docSnap = await getDoc(userProfileRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData({
          name: data.name || '',
          dateOfBirth: data.dateOfBirth || '',
          location: data.location || '',
          phoneNumber: data.phoneNumber || '',
        });
        setFormData({
          name: data.name || '',
          dateOfBirth: data.dateOfBirth || '',
          location: data.location || '',
          phoneNumber: data.phoneNumber || '',
        });
        setSubscription(data.subscription || false); // Fetch subscription preference
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Left Container: Profile Photo and Details */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3,
              border: '1px solid #ccc',
              borderRadius: 2,
            }}
          >
            <Avatar
              src={profileData.photoUrl}
              alt="Profile Photo"
              sx={{ width: 150, height: 150, mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              {profileData.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <AccountCircleRoundedIcon fontSize="small" /> - {email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <CakeRoundedIcon fontSize="small" /> - {profileData.dateOfBirth}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PlaceIcon fontSize="small" /> - {profileData.location}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneIcon fontSize="small" /> - {profileData.phoneNumber}
            </Typography>

            {/* Buttons to switch sections */}
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => setActiveSection('personalInfo')}
            >
              Update Personal Info
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => setActiveSection('credentials')}
            >
              Update Credentials
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => setActiveSection('subscription')}
            >
              Subscription
            </Button>
          </Box>
        </Grid>

        {/* Right Container: Dynamic Content Based on Active Section */}
        <Grid item xs={12} md={8}>
          <Box sx={{ mt: 4 }}>
            {activeSection === 'personalInfo' && (
              <>
                <Typography variant="h4" align="center" gutterBottom>
                  Update Personal Information
                </Typography>
                <form>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Location"
                    variant="outlined"
                    fullWidth
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSavePersonalInfo}
                  >
                    Save Personal Info
                  </Button>
                </form>
              </>
            )}

            {activeSection === 'credentials' && (
              <>
                <Typography variant="h4" align="center" gutterBottom>
                  Update Credentials
                </Typography>
                <form>
                  <TextField
                    label="Current Email"
                    variant="outlined"
                    fullWidth
                    name="currentEmail"
                    value={credentials.currentEmail}
                    onChange={handleCredentialsChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Current Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="currentPassword"
                    value={credentials.currentPassword}
                    onChange={handleCredentialsChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="New Email"
                    variant="outlined"
                    fullWidth
                    name="newEmail"
                    value={credentials.newEmail}
                    onChange={handleCredentialsChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="newPassword"
                    value={credentials.newPassword}
                    onChange={handleCredentialsChange}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleUpdateCredentials}
                  >
                    Update Credentials
                  </Button>
                </form>
              </>
            )}

            {activeSection === 'subscription' && (
              <>
                <Typography variant="h4" align="center" gutterBottom>
                  Subscription
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Subscribe to our newsletter to receive updates and news.
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={subscription}
                      onChange={(e) => setSubscription(e.target.checked)}
                    />
                  }
                  label="Subscribe to Newsletter"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubscriptionChange}
                  sx={{ mt: 2 }}
                >
                  Save Subscription Preference
                </Button>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;