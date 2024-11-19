import React, { useState, useEffect } from 'react';

const AllNews = () => {
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

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sve Vesti</h1>
      <div style={styles.newsGrid}>
        {vesti.map((vest, index) => (
          <div key={index} style={styles.newsCard}>
            <img
              src={vest.urlToImage || 'https://via.placeholder.com/300'}
              alt={vest.title}
              style={styles.image}
            />
            <h3 style={styles.newsTitle}>{vest.title}</h3>
            <p style={styles.newsDescription}>{vest.description ? vest.description.substring(0, 100) : ''}...</p>
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  newsCard: {
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
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
};

export default AllNews;
