export function Loading({ isLoading, text }) {
  if (isLoading === true) {
    return (
      <div className="loading-screen">
        <img src="https://media.tenor.com/GQAsycjoZG8AAAAi/scuba-scuba-cat.gif"></img>
        <div className="loading-circle"></div>
        <p>{text}</p>
      </div>
    );
  } else {
    return null;
  }
}
