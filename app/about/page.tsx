import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
        <h1>About Emoji Maker</h1>
        
        <h2>👋 Hey there!</h2>
        <p>
          Emoji Maker is a fun project that lets you create custom emojis using AI. 
          Ever wanted an emoji that perfectly captures your mood or idea? Now you can make it happen!
        </p>

        <h2>✨ What Makes It Cool</h2>
        <p>
          We've combined the power of Stable Diffusion (SDXL) with a specialized emoji model to turn your text descriptions into 
          unique, expressive emojis. Just type what you want, and watch the AI work its magic.
        </p>

        <h2>🛠️ How It Works</h2>
        <ul>
          <li>Type in your emoji idea</li>
          <li>Our AI processes your description</li>
          <li>Get your custom emoji in seconds</li>
          <li>Share it with the community</li>
          <li>Download and use it anywhere</li>
        </ul>

        <h2>🎯 Built For Creators</h2>
        <p>
          Whether you're a developer, content creator, or just someone who loves emojis, 
          we've got you covered. Every new user starts with free credits to create their first emojis.
        </p>

        <h2>🤝 Community First</h2>
        <p>
          This isn't just a tool - it's a community of emoji enthusiasts. Like and share your favorite 
          creations, get inspired by others, and be part of something fun!
        </p>

        <h2>💻 Tech Stack</h2>
        <p>
          For the tech-curious folks out there, we built this using:
        </p>
        <ul>
          <li>Next.js 14 for the framework</li>
          <li>Replicate AI for emoji generation</li>
          <li>Supabase for the backend</li>
          <li>Clerk for authentication</li>
          <li>Tailwind CSS for styling</li>
        </ul>

        <h2>🚀 Get Started</h2>
        <p>
          Ready to create your own custom emojis? Head back to the{' '}
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            homepage
          </Link>
          {' '}and start creating!
        </p>

        <h2>📬 Contact</h2>
        <p>
          Got questions or suggestions? We'd love to hear from you! Drop us a line at{' '}
          <a href="king101125s@gmail.com" className="text-blue-600 hover:text-blue-800">
          king101125s@gmail.com
          </a>
        </p>

        <div className="mt-12 text-sm text-gray-600">
          <p>
            Made with ❤️ by developers who love emojis
          </p>
        </div>
      </main>
    </div>
  );
}