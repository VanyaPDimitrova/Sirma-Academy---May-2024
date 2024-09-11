import styles from './MatchCard.module.css';

function MatchCard({
    flagA,
    teamA,
    flagB,
    teamB,
    result,
}) {
    return (
        <>
        <h1>MatchCard</h1>
        <div className={styles.matchCard}>
            <div className={styles.teams}>
                <div className={styles.teamA}>               
                    <img src={flagA} alt={teamA} />
                    <h3>{teamA}</h3>
                </div>

                <div className={styles.teamB}>
                    <img src={flagB} alt={teamB} />
                    <h3>{teamB}</h3>
                </div>
            </div>

            <div className={styles.result}>
                <h3>{result}</h3>
            </div>
        </div>
        </>
    );
}

export default MatchCard;