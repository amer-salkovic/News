import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>O Nama</h1>
      <p style={styles.text}>
        Blog za vesti je mesto gde možete pronaći najnovije i najvažnije informacije na jednom mestu.
        Naša misija je da pružimo tačne, brze i pouzdane vesti za sve naše čitaoce.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#181A55',
  },
  text: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default About;
