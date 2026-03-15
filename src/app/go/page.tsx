export default function GoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Get Prismorph</h1>
        <p className="text-gray-400 mb-8">Download the app</p>
        <div className="space-y-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.prismorph.ai"
            className="block px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20"
          >
            Google Play
          </a>
          <a
            href="https://apps.apple.com/app/prismorph"
            className="block px-6 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20"
          >
            App Store
          </a>
        </div>
        <a href="/" className="inline-block mt-8 text-gray-400 hover:text-white">
          Back to Home
        </a>
      </div>
    </main>
  );
}
