import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ padding: '20px', textAlign: 'center', color: '#000' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#ccff00', padding: '20px', borderRadius: '0px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Supporting Settled Afghan Refugees in Scotland</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Our mission is to provide assistance and support to Afghan refugees who have settled in Scotland, helping them to find sustainable work and rebuild their lives.</p>
            </div>
        </header>
    );
};

export default Header;