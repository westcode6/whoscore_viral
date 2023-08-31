import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";

const Scoreboard = ({ pairScore, status }) => {
    return (
        <section className="p-2 rounded-xl glass-effect">
            <TeamView teamData={pairScore.homeTeam} />
            <main>
                <Result homeTeamScore={pairScore.homeTeam.score} awayTeamScore={pairScore.awayTeam.score} />
                <GameStatus status={status} />
            </main>
            <TeamView teamData={pairScore.awayTeam} />
        </section>
    );
};

export default Scoreboard;