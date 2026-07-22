import './App.css';
import Tweet from './Tweet';
import { tweetsData } from './data';

export default function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">React component exercise</p>
        <h1>Social Feed</h1>
        <p>A small client-side feed demonstrating typed props, reusable components, and interactive state.</p>
      </header>

      <section className="feed" aria-label="Posts">
        {tweetsData.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </section>
    </main>
  );
}
