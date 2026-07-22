import { useState } from 'react';
import type { TweetRecord } from './data';

type TweetProps = {
  tweet: TweetRecord;
};

export default function Tweet({ tweet }: TweetProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((current) => !current);
  };

  return (
    <article className="tweet">
      <div className="avatar" aria-hidden="true">
        {tweet.username.charAt(0).toUpperCase()}
      </div>
      <div className="tweet-content">
        <header>
          <strong>@{tweet.username}</strong>
          <span>· {tweet.timestamp}</span>
        </header>
        <p>{tweet.content}</p>
        <button
          className={liked ? 'like-button liked' : 'like-button'}
          type="button"
          aria-pressed={liked}
          aria-label={`${liked ? 'Unlike' : 'Like'} post by ${tweet.username}`}
          onClick={toggleLike}
        >
          <span aria-hidden="true">{liked ? '♥' : '♡'}</span>
          {tweet.likes + (liked ? 1 : 0)}
        </button>
      </div>
    </article>
  );
}
