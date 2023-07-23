export function Card({card, onCardClick}) {
    
    function handleClick() {
        onCardClick(card);
      } 

    return (
        <li class="element">
            <img src={card.link} alt={card.name} onClick={handleClick} className="element__image" />
            <button className="element__delete-button" type="button" aria-label="Удалить"></button>
            <div className="element__container">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                <button className="element__like-button" type="button" aria-label="Поставить лайк"></button>
                <span className="element__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}