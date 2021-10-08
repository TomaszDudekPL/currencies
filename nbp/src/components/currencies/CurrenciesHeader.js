import classes from "./css/CurrenciesHeader.module.css";

const CurrenciesHeader = () => {
    return (
        <header className={classes.header}>
            <span>KOD WALUTY</span>
            <span>KURŚ ŚREDNI</span>
            <span>NAZWA WALUTY</span>
            <span>DO ULUBIONYCH</span>
        </header>
    )
}
export default CurrenciesHeader;