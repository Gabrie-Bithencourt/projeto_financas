
export const PortugueseTranslation = (text) => {
    const wordPortuguese = {
        'navbar_conversor': 'Conversor de Moedas',
        'navbar_news': 'Central de Notícias',
        'navbar_login': 'Entrar',
        'navbar_register': 'Cadastre-se',

        'home_first_intro': 'Mais de 600 moedas disponíveis para conversão',
        'home_second_intro': 'Conhece nossa central de notícias?',
        'home_third_intro': 'Informações financeiras de mais de 150.00 fontes em todo o mundo',

        'news_first_intro': 'Mais de 150.00 fontes em todo o mundo',
        'news_second_intro': 'Bem vindo há central de notícias',
        'news_input_search_text': 'O que temos para hoje?',
        'news_button_search_text': 'Pesquisar',
        
        'news_previous_page': 'Anterior',
        'news_next_page': 'Próximo',
        'news_button_access_material': 'Acessar Materia Completa',

        'feedback_modal_first_intro': 'Queremos ouvir você!',
        'feedback_modal_second_intro': 'Conta pra gente o que achou do nosso site e como podemos torná-lo ainda melhor.',
        'feedback_modal_input_name': 'Nome',
        'feedback_modal_textarea_feedback': 'Como podemos melhorar?',
        'feedback_modal_input_close': 'Fechar',
        'feedback_modal_input_send_feedback': 'Enviar Feedback'
    };

    return wordPortuguese[text] ?? '';
}

