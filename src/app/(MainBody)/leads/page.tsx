// components/NewProjectLeads.js
import React from 'react';
import styles from './NewProjectLeads.module.css';

const items = [
  { heading: 'New', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image1.jpg' },
  { heading: 'Contact', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image2.jpg' },
  { heading: 'Schedule', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image3.jpg' },
  { heading: 'Estimate', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image4.jpg' },
  { heading: 'Write', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image5.jpg' },
  { heading: 'Revise', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image6.jpg' },
  { heading: 'Send', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image7.jpg' },
  { heading: 'Sell', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image8.jpg' },
  { heading: 'Sold', count: Math.floor(Math.random() * 100), image: '/path/to/sample-image9.jpg' },
];

const leads = [
  {
    id: 1,
    image: '/path/to/lead-image1.jpg',
    heading: 'Lead 1',
    phone: '123-456-7890',
    email: 'lead1@example.com',
    address: '123 Main St, City, Country',
    projectInfo: 'Project details here...',
    estRevenue: 50000,
    likelihood: 75,
  },
  // Add more leads as needed
];

const NewProjectLeads = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>New Project Leads</h1>
      <div className={styles.navSection}>
        {items.map((item, index) => (
          <div key={index} className={styles.navItem}>
            <div className={styles.navContent}>
              <span className={styles.itemCount}>{item.count}</span>
            </div>
            <h2 className={styles.itemHeading}>{item.heading}</h2>
          </div>
        ))}
      </div>
      <div className={styles.leadsList}>
        {leads.map((lead) => (
          <div key={lead.id} className={styles.leadItem}>
            <div className={styles.likelihood}>
              <strong>Likelihood of Sale:</strong>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${lead.likelihood}%` }}
                />
              </div>
              <span>{lead.likelihood}%</span>
            </div>
            <img src={lead.image} alt={lead.heading} className={styles.image} />
            <div className={styles.leadDetails}>
              <h2 className={styles.leadHeading}>{lead.heading}</h2>
              <div className={styles.detailsColumn}>
                <p><strong>Phone:</strong> {lead.phone}</p>
                <p><strong>Email:</strong> {lead.email}</p>
                <p><strong>Est. Revenue:</strong> ${lead.estRevenue.toLocaleString()}</p>
              </div>
              <p><strong>Address:</strong> {lead.address}</p>
              <p><strong>Project Info:</strong> {lead.projectInfo}</p>
              <button className={styles.showMoreButton}>Show More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProjectLeads;
