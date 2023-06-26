import axios from "axios";

export async function fetchQuote() {
  const quote = await axios.get(
    "https://api.quotable.io/quotes/random?limit=0"
  );
  //   console.log(quote.data[0].content);
  //   console.log(quote.data[0].author);
  return quote.data[0];
}
