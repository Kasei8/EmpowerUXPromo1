/* Styles for the immersive header slider */
#rs-fullblock {
    position: relative;
    width: 100%;
    height: 500px; /* Adjust height as needed */
}

.wp-block-themepunch-revslider {
    width: 100%;
    height: 100%;
}

/* Styles for your agency information */
.agency-info {
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
}

.agency-info h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.agency-info p {
    font-size: 16px;
    line-height: 1.6;
}

/* Additional styles for other sections of your website */const submitForm = async () => {
  const data = {
    values: [
      [
        document.getElementById('name').value,
        document.getElementById('company').value,
        document.getElementById('email').value,
        document.getElementById('phone').value,
        document.getElementById('services').value,
        document.getElementById('description').value,
        document.getElementById('goals').value,
        document.getElementById('onlinePresence').value,
        document.getElementById('targetAudience').value,
        document.getElementById('investment').value,
        document.getElementById('budget').value,
        document.getElementById('preferences').value,
        document.getElementById('competitors').value,
        document.getElementById('channels').value,
        document.getElementById('successMetrics').value
      ]
    ]
  };

  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${/1O3s22IDd0GwpwWzGP38ed45MGHbu-oEu8uuTCRsca2w

}/values/${range}:append?valueInputOption=USER_ENTERED`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer Web Client 1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log('Data inserted successfully:', responseData);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};
