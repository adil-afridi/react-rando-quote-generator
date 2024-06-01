
import { useState } from 'react';
import './App.css'

function App() {

  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The best way to predict the future is to invent it. - Alan Kay",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "May you live all the days of your life. - Jonathan Swift",
    "Life itself is the most wonderful fairy tale. - Hans Christian Andersen",
    "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "The purpose of life is a life of purpose. - Robert Byrne",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
    "Life isn't about finding yourself. It's about creating yourself. - George Bernard Shaw",
    "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
    "Life is ten percent what happens to us and ninety percent how we respond to it. - Charles R. Swindoll",
    "Keep calm and carry on. - Winston Churchill",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Life is made of ever so many partings welded together. - Charles Dickens",
    "Life is a long lesson in humility. - James M. Barrie",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Love the life you live. Live the life you love. - Bob Marley",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "You have enemies? Good. That means you've stood up for something, sometime in your life. - Winston Churchill",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. - Buddha",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Life is what we make it, always has been, always will be. - Grandma Moses",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Life is a flower of which love is the honey. - Victor Hugo",
    "Life is short, and truth works far and lives long: let us then speak the truth. - Arthur Schopenhauer"
];

const [qoute , setQoute] = useState( "The purpose of our lives is to be happy. - Dalai Lama")

function handleRandomQouteGenerator(){
  const randomIndex = Math.floor(Math.random( ) * quotes.length)
  setQoute(quotes[randomIndex])
}
 

  return (
    <>
      <div className="container">
        <h1>Random Quote Generator</h1>
        <p>{qoute}</p>
        <button onClick={handleRandomQouteGenerator}>Generate</button>
      </div>
    </>
  )
}

export default App
