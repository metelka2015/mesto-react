export function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
              <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_type_${props.name}`} name={`popup-${props.name}-form`} novalidate>
                  {props.children}
                  <button className="popup__submit" type="submit">{props.textButton}</button>
                </form>
                <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
              </div>
        </section>
    );
}