export default function MentorForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };

    return (
        <div className="bg-white shadow rounded-lg py-3 px-3">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                <label>Skills</label>
                <input
                    type="text"
                    name="name"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                <br></br>
                <input
                    type="submit"
                    value="Sign Up"
                    className="font-medium bg-primary-500 py-3 px-6 rounded-lg my-5"
                />
            </form>
        </div>
    );
}
