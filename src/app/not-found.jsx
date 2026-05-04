import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 px-4">

            {/* Glow Background Blobs */}
            <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-20 right-10 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-30 right-10 top-40 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30 left-10 bottom-50 animate-pulse"></div>

            {/* Glass Card */}
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center text-white">

                {/* Icon */}
                <div className="text-6xl mb-4 animate-bounce">🚫</div>

                {/* Title */}
                <h1 className="text-3xl font-bold tracking-wide">
                    Page Not Found!
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-gray-300">
                    The content you are looking for is missing, moved, or deleted.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
                >
                    <span className="font-bold">← Back to Home</span>
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;