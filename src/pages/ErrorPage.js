
const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <img src={imgURL} alt="404 error" className="error-gif" />
            <h3>Page doesn't exist.</h3>
        </div>
    );
}

export default ErrorPage;