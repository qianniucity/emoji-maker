import { Suspense } from 'react';
import { EmojiForm } from './components/emoji-form';
import { EmojiGrid } from './components/emoji-grid';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">😊 Emoj maker</h1>
          <Suspense fallback={<div>Loading form...</div>}>
            <EmojiForm />
          </Suspense>
        </div>
        
        <div className="mt-12">
          <Suspense fallback={<div>Loading emojis...</div>}>
            <EmojiGrid />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
