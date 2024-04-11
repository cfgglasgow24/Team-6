import PageTemplate from "./PageTemplate";

export default function CVPage() {
    return (
        <PageTemplate title="CV Template">
            <p className="mb-10">
                Having a good CV is important when applying for jobs. Click Open
                PDF to view a CV template for technologists.
            </p>
            <a
                href="/assets/cv-template.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#5f05fa",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "5px",
                }}
            >
                Open PDF
            </a>
        </PageTemplate>
    );
}
