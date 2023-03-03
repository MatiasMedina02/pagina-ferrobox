import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<div id="error-page" className="grid h-screen px-4 bg-white place-content-center">
				<h1 className="tracking-widest text-gray-500 uppercase">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</>
	)
}

export default ErrorPage