import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-emerald-100">
      <h1 className="text-8xl font-bold text-emerald-600">4 0 4</h1>
      <p className="text-gray-600 text-lg mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-4 px-5 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600" >
        Go Home
      </Link>
    </div>
  )
}

export default PageNotFound;