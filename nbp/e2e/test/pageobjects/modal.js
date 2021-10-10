class Modal {

    get modal_confirm_btn () {return $('[data-testid="confirm-btn"]')}
    get modal_cancel_btn () {return $('[data-testid="cancel-btn"]')}
    get modal_body () { return $('[data-testid="modal-body"]')}

}

export default new Modal();
