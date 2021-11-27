const quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Never go on trips with anyone you do ntot love.',
    author: 'Hemmingway',
  },
  {
    quote: '나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.',
    author: '토마스 제퍼슨',
  },
  {
    quote: '열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.',
    author: '윈스턴 처칠',
  },
  {
    quote: '모방해서 성공하는 것보다 독창적으로 실패하는 게 더 낫다.',
    author: '허먼 멜빌',
  },
  {
    quote: '농구는 신장이 아닌 심장으로 하는 것 이다.',
    author: '앨런 아이버슨',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
