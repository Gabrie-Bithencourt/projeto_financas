
export const SpanishTranslation = (text) => {
    const wordSpanish = {
        'navbar_conversor': 'Convertidor de Divisas',
        'navbar_news': 'Centro de noticias',
        'navbar_login': 'Entrar',
        'navbar_register': 'Inscribirse',

        'home_first_intro': 'Más de 600 monedas disponibles para conversión',
        'home_second_intro': '¿Conoces nuestro centro de noticias?',
        'home_third_intro': 'Información financiera de más de 150.000 fuentes de todo el mundo',

        'news_first_intro': 'Más de 150.000 fuentes en todo el mundo',
        'news_second_intro': 'Bienvenido al centro de noticias',
        'news_input_search_text': '¿Que tenemos para hoy?',
        'news_button_search_text': 'Buscar',
        
        'news_previous_page': 'Anterior',
        'news_next_page': 'Próximo',
        'news_button_access_material': 'Acceder al Artículo Completo',

        'feedback_modal_first_intro': '¡Queremos saber de ti!',
        'feedback_modal_second_intro': 'Cuéntenos qué piensa de nuestro sitio web y cómo podemos hacerlo aún mejor.',
        'feedback_modal_input_name': 'Nombre',
        'feedback_modal_textarea_feedback': '¿Cómo podemos mejorar?',
        'feedback_modal_input_close': 'Cerrar',
        'feedback_modal_input_send_feedback': 'Enviar comentarios'
    };

    return wordSpanish[text] ?? '';
}

