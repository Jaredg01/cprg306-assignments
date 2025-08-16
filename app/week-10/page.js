"use client"

// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    // Sign out of Firebase
    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <main className="p-6 max-w-xl mx-auto text-center">
        {!user ? (
            <div>
                <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome</h1>
                <p className="mb-6 text-gray-700">Sign in to get personalized meal ideas from your shopping list.</p>
                <button
                    onClick={handleLogin}
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                >
                    Sign in with GitHub
                </button>
            </div>
        ) : ( 
            // Display some of the user's information
            <div>
                <p>
                Welcome, {user.displayName} ({user.email})
                </p>
                <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-400 text-white rounded hover:bg-red-500 mb-5 cursor-pointer"
                >
                    Log Out
                </button>
                <div>
                    <Link href="/week-9/shopping-list">
                    <span className="text-blue-600 underline hover:text-blue-800">
                        Go to Shopping List
                    </span>
                    </Link>
                </div>
            </div>
        )}
        </main>
    );

}
