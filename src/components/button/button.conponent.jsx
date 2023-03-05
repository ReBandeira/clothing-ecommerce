import './button.styles.sass';

/**
 * Há 3 tipos de botões na aplicação:
    * default - brackgound preto - branco ao click
    * invertido - brackgound branco - preto ao click
    * google sign-in - backoung branco - azul
    * 
    *  Criar objeto com os diferentes tipos de botões para selecionar a classe
 */

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export const Button = ({ children, buttonType, ...otherProps}) => {
    return (
        <button 
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >            
            {children}
        </button>
    );
};