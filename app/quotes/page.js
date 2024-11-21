// API Fetching in Server Component

import Author from "./author";

const quotes = async () => {
  let data = await fetch("https://dummyjson.com/quotes");
  let response = await data.json(); // parse json
  return response.quotes;
};

const Quotes = async () => {
  let quote = await quotes();
  console.log(quote);
  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quote.map((item) => (
          <li key={item.id}>
            Quote: {item.quote}
            <Author author={item.author} />
          </li>
        ))}
      </ul>
    </div>

    // {}
  );
};

export default Quotes;
