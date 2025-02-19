import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-800 to-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm text-center">
        {isAuthenticated ? (
          <div>
            <img src={user.picture} alt={user.name} className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-lg"/>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to MyApp</h2>
            <p className="text-gray-600 mb-6">Sign in to access amazing features!</p>
            <button
              onClick={() => loginWithRedirect()}
              className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Login with Auth0
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
