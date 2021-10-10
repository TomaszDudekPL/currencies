import Button from "../Button";
import Modal from "../../layout/Modal";
import {useDispatch, useSelector} from "react-redux";

const ConfirmationModal = (props) => {

    const dispatch = useDispatch();
    const {type, warning, buttonText, code} = useSelector(state => state.modalStateReducer.payload);

    const confirmActionHandler = () => {
        dispatch({type: type, code});
        dispatch({type: 'CLOSE'});
    }

    const cancelActionHandler = () => {
        dispatch({type: 'CLOSE'});
    }

    const confirmButtonAttributes = {
        testId: 'confirm-btn',
        styles: 'btn danger',
        clickHandler: confirmActionHandler,
        text: buttonText
    }
    const cancelButtonAttributes = {
        testId: 'cancel-btn',
        styles: 'btn done',
        clickHandler: cancelActionHandler,
        text: 'ANULUJ'
    }

    return (
        <Modal onClose={props.onClose}>
            <div>
                <p>{warning}</p>
            </div>
            <footer>
                <Button attributes={confirmButtonAttributes}/>
                <Button attributes={cancelButtonAttributes}/>
            </footer>
        </Modal>
    )
};
export default ConfirmationModal;