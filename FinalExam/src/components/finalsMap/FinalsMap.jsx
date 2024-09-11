import styles from './FinalsMap.module.css';
import { teamsFlags } from '../../common/teamsFlags';

import MatchCard from '../matchCard/MatchCard';
import { FIRST_PHASE_LAST_DATE } from '../../common/tournament';

function FinalsMap({ 
    matches,
    teams,
 }) {
    console.log(matches);
    console.log(teams);
    
    const finalsMatches = matches
                            .filter(el => new Date(el.Date) > FIRST_PHASE_LAST_DATE)
                            .sort((a, b) => new Date(a.Date)-new Date(b.Date));

    for (const match of finalsMatches) {
        const teamA = teams.filter(team => team.ID == match.ATeamID);
        const teamB = teams.filter(team => team.ID == match.BTeamID);
    }

                            
    console.log(finalsMatches[0]);
    

    return (
        <section className={styles.knockoutStage}>
            <div className="roundOf16">
                {/* {finalsMatches.map(match => { */}
                    <MatchCard  result={finalsMatches[0].Score} />
                {/* }) */}

                {/* } */}
            </div>

            <div className="quarterFinal">

            </div>

            <div className="semi-Final">

            </div>

            <div className="final">

            </div>

        </section>
    );
}

export default FinalsMap;
