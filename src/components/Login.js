export function Login({handleLogin}) {


    return (
        <div className="login__container">
            <form 
                className="login__form"
                //onSubmit={handleSubmit}
            >
                <h2 className="login__title">{"Вход"}</h2>
                <label className="login__label">
                    <input
                    id="email"
                    type="email"
                    className="login__input login__input_type_email"
                    name="email"
                    placeholder="Email"
                    required
                    //minLength="2"
                    //maxLength="30"
                    />
                    <span id="error-email" className="login__error-message"></span>
                </label>
                <label className="login__label">
                    <input
                    id="password"
                    type="password"
                    className="login__input login__input_type_password"
                    name="password"
                    placeholder="Пароль"
                    //value={description || ""}
                    //onChange={handleDescriptionChange}
                    required
                    //minLength="2"
                   // maxLength="30"
                    />
                    <span id="error-password" className="login__error-message"></span>
                </label>
                <button
                className="login__submit"
                type="submit">Войти</button>
            </form>
        </div>
    )
}