import NewsLetterForm from "../components/common/newsletter/NewsLetterForm";
import PageTemplate from "./PageTemplate";

export default function NewsLetterPage() {
    return (
        <PageTemplate title="Sign up for the newsletter">
            <NewsLetterForm />
        </PageTemplate>
    );
}
