import classes from "./css/CurrenciesHeader.module.css";

const CurrenciesHeader = () => {
    return (
        <header className={classes.header}>
            <span>KOD WALUTY</span>
            <span>NAZWA WALUTY</span>
            <span>KURŚ ŚREDNI</span>
        </header>
    )
}
export default CurrenciesHeader;