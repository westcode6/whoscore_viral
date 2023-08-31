import LivescoresAndTicketSwitcher from "../components/Header/Live&TicketSwitcher";
import ScrollNav from "../components/Header/ScrollableNav/ScrollNav";
import ScoreboardsGrid from "../components/ScoreboardsGrid/ScoreboardsGrid";
import PageCalender from "../components/calender";

const HomePage = () => {
  return (
    <>
      <div>
        <LivescoresAndTicketSwitcher />
        <ScrollNav />
        {/* PAge Calender */}
        <PageCalender />

    {/* Live Scoreboard Data */}

        <ScoreboardsGrid />
        <ScoreboardsGrid />
      </div>
    </>
  );
};

export default HomePage;
