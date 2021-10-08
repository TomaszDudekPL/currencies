import classes from "./css/CurrenciesHeader.module.css";

const CurrenciesHeader = () => {
    return (
        <header className={classes.header}>
            <span>KOD WALUTY</span>
            <span>KURŚ ŚREDNI</span>
            <span>NAZWA WALUTY</span>
            <span>AKCJA</span>
        </header>
    )
}
export default CurrenciesHeader;