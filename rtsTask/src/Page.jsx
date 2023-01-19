import React, { useEffect, useState } from 'react';

function analyticsTrackClick(url) {
  // sending clicked link url to analytics
  console.log(url);
}

function Card({
  title,
  text,
  target,
  linkTitle,
  href,
  rel,
  onClick,
  linkClassName,
}) {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
      <a
        className={`default-link card__link ${linkClassName}`}
        target={target}
        rel={rel}
        href={href}
        onClick={onClick}
      >
        {linkTitle}
      </a>
    </div>
  );
}

export default function Page() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://my-json-server.typicode.com/savayer/demo/posts'
        );
        const json = await response.json();
        setIsLoading(false);
        const cardsData = json.map((item) => {
          return {
            id: item.id,
            title: item.title,
            linkTitle: item.link_title,
            link: item.link,
            text: item.body?.en ? item.body.en.substr(0, 50) + '...' : ' ',
          };
        });
        setCards(cardsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <div>
      {cards.map((item) => (
        <Card
          key={item.id}
          title={item.title.en}
          linkTitle={item.linkTitle}
          href={item.link}
          text={item.text}
          linkClassName={item.id === 1 ? 'card__link--red' : ''}
          target={item.id === 1 ? '_blank' : ''}
          onClick={() => analyticsTrackClick(item.link)}
        />
      ))}
    </div>
  );
}

// ----------------------------------------------------------->
// what has been done:

// 1) Component is now functional component using hooks

// 2) UseEffect hook is used to fetch the data and update the state

// 3) map function is used to iterate through the data and render the cards

// 4) added error handling using try-catch block

// 5) added key prop to each Card component to make it more performant

// 6) added onClick function that calls the analyticsTrackClick function and passing the item.link as an argument

// 7) the function analyticsTrackClick(url) is now passed as a callback function, so it will execute only when the link is clicked

// 8) the component is now more readable and maintainable.

// 9) added proper naming convention for variables and functions used in the component

// 10) formatted the code for better readability
