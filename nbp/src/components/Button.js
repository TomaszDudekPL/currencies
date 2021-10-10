const Button = (props) => {

    const {
        testId,
        styles,
        clickHandler,
        text
    } = props.attributes

    return (
        <button
            data-testid={testId}
            className={styles}
            onClick={clickHandler}
        >{text}
        </button>
    )
}
export default Button;