function Article ({ title, date = "January 1, 1970", preview, minutes}){
    let displayEmoji = "";
    if (minutes < 30) {
      displayEmoji = "☕".repeat(Math.ceil(minutes / 5));
    } else {
      displayEmoji = "🍱".repeat(Math.ceil(minutes / 10));
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {displayEmoji} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;