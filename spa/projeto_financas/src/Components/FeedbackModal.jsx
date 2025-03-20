import { useState } from "react";
import { getTranslation } from "../../helpers/helpers";

const FeedbackModal = () => {
    const url_api = import.meta.env.VITE_API_URL;
    const [formData, setFormData] = useState({ email: '', name: '', feedback: ''})

    const sendFeedback = async () => {
       if(!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            document.querySelector('#formFeedbackModal input[name="email"]').focus();
            return;
        } 
        if(!formData.name.trim()){
            document.querySelector('#formFeedbackModal input[name="name"]').focus();
            return;
        } 
        if(!formData.feedback.trim()){
            document.querySelector('#formFeedbackModal textarea[name="feedback"]').focus();
            return;
        }


        const request = await fetch(`${url_api}send_feedback`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        });

        const result = await request.json();
        document.querySelector('#exampleModal .closeModal').click();
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-secondary">Feedback</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <h5 className='text-secondary fw-bold'>{ getTranslation('feedback_modal_first_intro') }</h5>
                        <p className='text-secondary'>{ getTranslation('feedback_modal_second_intro') }</p>
                        <div className="mt-4">
                            <form id="formFeedbackModal" method="get">
                                <div className="container d-flex flex-column align-items-center">
                                    <div className="col-md-11 p-1">
                                        <label className="p-1 text-secondary">E-mail</label>
                                        <input name='email' type="email" className="form-control" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                                    </div>
                                    <div className="col-md-11 p-1 mt-2">
                                        <label className="p-1 text-secondary">{ getTranslation('feedback_modal_input_name') }</label>
                                        <input name='name' type="text" className="form-control" onChange={(e) => setFormData({...formData, name: e.target.value })}/>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="col-md-12 p-1 mt-2">
                                            <label className="p-1 text-secondary">{ getTranslation('feedback_modal_textarea_feedback') }</label>
                                            <textarea name='feedback' className="form-control"
                                                style={{ resize: 'none'}}
                                                rows="7" cols="20"
                                                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary closeModal" data-bs-dismiss="modal">
                        { getTranslation('feedback_modal_input_close') }
                    </button>
                    <button type="button" className="btn btn-success"  onClick={() => sendFeedback()}>
                        { getTranslation('feedback_modal_input_send_feedback') }
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackModal;