import { Link } from "react-router-dom"

export default function ErrorPage() {
    return <div>
        <h1>Sorry, that page cannot be found.</h1>
        <Link to={"/"}>Continue shopping</Link>
    </div>
}