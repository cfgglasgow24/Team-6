import PageTemplate from "./PageTemplate";

export default function CVPage() {
    return (
        <PageTemplate title="CV Template">
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>CV Template</h1>
              <p style={{ marginBottom: '20px' }}>Having a good CV is important when applying for jobs. Click Open PDF to view a CV template for technologists.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                  <a href="/assets/cv-template.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Sample CV</a>
                  <a href="/assets/cv-template-analyst.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Sample CV for an Analyst Position</a>
                  <a href="/assets/cv-template-engineer.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Sample CV for an Engineer Position</a>
                  <a href="/assets/cv-template-developer.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Sample CV for a Developer Position</a>
                  <a href="/assets/cv-template-marketing.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Sample CV for a Marketing Position</a>
                  <a href="/assets/cv-template-manager.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#5f05fa', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Sample CV for a Managerial Position</a>
              </div>
          </div>
        </PageTemplate>
    );
}
