import './App.css'
import Header from "./components/header/Header"
import Body from './components/body/Body'

const list = [
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "In order to write about life first you must live it.",
    author: "Ernest Hemingway"
  },
  {
    quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton"
  },
  {
    quote: "Find people who will make you better.",
    author: "Michelle Obama"
  },
];


function App() {
  return (
    <div className="App">
      <Header/>
      <Body
      data = {list}/>
    </div>
  );
}

export default App;
