
export const EnglishTranslation = (text) => {
    const wordEnglish = {
        'navbar_conversor': 'Currency Conversor',
        'navbar_news': 'News Center',
        'navbar_login': 'Login',
        'navbar_register': 'Register',

        'home_first_intro': 'Over 600 currencies available for conversion',
        'home_second_intro': 'Do you know our news center?',
        'home_third_intro': 'Financial information from over 150,000 sources worldwide',

        'news_first_intro': 'Over 150,000 fonts worldwide',
        'news_second_intro': 'Welcome to the news center',
        'news_input_search_text': 'What do we have for today?',
        'news_button_search_text': 'Search',
        
        'news_previous_page': 'Previous',
        'news_next_page': 'Next',
        'news_button_access_material': 'Access Full Material',

        'feedback_modal_first_intro': 'We want to hear from you!',
        'feedback_modal_second_intro': 'Tell us what you think of our website and how we can make it even better.',
        'feedback_modal_input_name': 'Name',
        'feedback_modal_textarea_feedback': 'How can we improve?',
        'feedback_modal_input_close': 'Close',
        'feedback_modal_input_send_feedback': 'Send Feedback'
    };

    return wordEnglish[text] ?? '';
}

