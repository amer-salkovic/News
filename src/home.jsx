import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [vesti, setVesti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedVesti = localStorage.getItem('vesti');
    if (cachedVesti) {
      setVesti(JSON.parse(cachedVesti));
      setLoading(false);
    } else {
      fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-10-19&sortBy=publishedAt&apiKey=34d1dc31e446482194b4c8ee38547398`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Greška prilikom učitavanja podataka: ' + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setVesti(data.articles);
          localStorage.setItem('vesti', JSON.stringify(data.articles));
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <p>Učitavanje vesti...</p>;
  if (error) return <p>Došlo je do greške: {error}</p>;

  const prikazaneVesti = vesti.slice(0, 3);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dobrodošli na Blog za Vesti</h1>
      <div style={styles.newsGrid}>
        {prikazaneVesti.map((vest, index) => (
          <div key={index} style={styles.newsCard}>
            <img
              src={vest.urlToImage || 'https://via.placeholder.com/300'}
              alt={vest.title}
              style={styles.image}
            />
            <h3 style={styles.newsTitle}>{vest.title}</h3>
            <p style={styles.newsDescription}>{vest.description ? vest.description.substring(0, 100) : ''}...</p>
            <Link to="/all-news" style={styles.readMore}>Pročitaj više</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '100px 20px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '32px',
    color: '#343a40',
    marginBottom: '20px',
  },
  newsGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  newsCard: {
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    width: '300px', 
    marginBottom: '20px', 
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  newsTitle: {
    fontSize: '18px',
    color: '#343a40',
    margin: '10px 0',
  },
  newsDescription: {
    color: '#6c757d',
  },
  readMore: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '10px',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#0056b3',
    },
  },
};

export default Home;
