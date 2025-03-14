import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">No hay publicaciones disponibles</h1>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => navigate("/")}
            >
                Volver al inicio
            </button>
        </div>
    )
}

export default NotFound
