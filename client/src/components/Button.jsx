import "../App.css";

const Button = ( {quote, author, age} ) => {
    return (
        <>
            <div className="quote-text">{quote}</div>
            <div className="quote-author">- {author}</div>
            <div className="quote-age">Age: {age}</div>
        </>
    );
}

export default Button;