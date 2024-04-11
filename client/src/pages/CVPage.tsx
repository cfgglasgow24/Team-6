import React from 'react';

const CVPage = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>CV Template</h1>
            <p style={{ marginBottom: '20px' }}>Having a good CV is important when applying for jobs. Click Open PDF to view a CV template for technologists.</p>
            <a href="/assets/cv-template.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Open PDF</a>
        </div>
    );
};

export default CVPage;