export default function MentorForm() {
    return (
        <div className="bg-white shadow rounded-lg py-3 px-3">
            <form>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className="bg-secondary-50 mx-4 rounded-lg my-1"
                    />
                </label>
                <label>
                    <br></br>
                    Email
                    <input
                        type="text"
                        name="email"
                        className="bg-secondary-50 mx-4 rounded-lg my-1"
                    />
                </label>
                <label>
                    <br></br>
                    Skills
                    <input
                        type="text"
                        name="name"
                        className="bg-secondary-50 mx-4 rounded-lg my-1"
                    />
                </label>
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
