import React from "react";
import { PiTimerFill } from "react-icons/pi";
export default function ScoreboardsGrid() {
  return (
    <section className="p-4">
      <div className="p-3 rounded-2xl glass-effect-light">
        <header className="glass-effect shadow-sm text-neutral-600 text-sm font-medium rounded-xl px-2 flex items-center justify-between">
          <div className="flex items-center gap-2 justify-start">
            <span className="w-10 h-10">
              <img
                src="./assets/leagues/uefa_women.png"
                alt="sure"
                className="w-full rounded-full object-cover"
              />
            </span>
            <p>Premier League</p>
          </div>

          <div>
            <span> All Matches</span>
          </div>
        </header>

        <main className="p-3">
          <LiveScoreboard
            liveScore="2 : 4"
            liveTime="65"
            firstTeam="Arsenal"
            firstTeamLogo={"./assets/banners/arsenal.webp"}
            secondTeam="Bayern"
            secondTeamLogo={"./assets/banners/bayern.webp"}
          />

          <LiveScoreboard
            liveScore="1 : 1"
            liveTime="89"
            firstTeam="chelsea"
            firstTeamLogo={"./assets/banners/chelsea.png"}
            secondTeam="Liverpool"
            secondTeamLogo={"./assets/banners/liverpool.png"}
          />

          <LiveScoreboard
            liveScore="4 : 1"
            liveTime="74"
            firstTeam="Hullcity"
            firstTeamLogo={"./assets/banners/hullcity.png"}
            secondTeam="Juventus"
            secondTeamLogo={"./assets/banners/juventus.jpg"}
          />

          <LiveScoreboard
            liveScore="2 : 3"
            liveTime="55"
            firstTeam="Real Madrid"
            firstTeamLogo={"./assets/banners/realMadrid.png"}
            secondTeam="Bayern"
            secondTeamLogo={"./assets/banners/bayern.webp"}
          />

          <LiveScoreboard
            liveScore="3 : 0"
            liveTime="68"
            firstTeam="Dortmund"
            firstTeamLogo={"./assets/banners/dortmund.svg"}
            secondTeam="man United"
            secondTeamLogo={"./assets/banners/manU.png"}
          />
          <LiveScoreboard
            liveScore="2 : 4"
            liveTime="65"
            firstTeam="Tottenham"
            firstTeamLogo={"./assets/banners/juventus.jpg"}
            secondTeam="Westbrom"
            secondTeamLogo={"./assets/banners/westbrom.png"}
          />

          <LiveScoreboard
            liveScore="2 : 4"
            liveTime="65"
            firstTeam="Arsenal"
            firstTeamLogo={"./assets/banners/arsenal.webp"}
            secondTeam="Bayern"
            secondTeamLogo={"./assets/banners/bayern.webp"}
          />
        </main>
      </div>
    </section>
  );
}

export function LiveScoreboard({
  liveScore,
  liveTime,
  firstTeam,
  firstTeamLogo,
  secondTeam,
  secondTeamLogo,
}) {
  return (
    <header className="w-[100%] shadow-md text-xs text-neutral-500  rounded-xl flex items-center  gap-2 justify-between mb-1 px-2 py-2">
      <div className="w-[35%] flex items-center gap-2 justify-start">
        <span className="w-6 h-6">
          <img
            src={firstTeamLogo}
            alt={firstTeam}
            className="w-full  object-cover rounded-full"
          />
        </span>
        <p>{firstTeam}</p>
      </div>

      <div className="w-[20%] rounded-xl glass-effect flex items-center justify-center py-1">
        <span className="text-xs text-white font-black">{liveScore}</span>
      </div>
      <span />
      <div className="w-[35%] flex items-center gap-2 justify-end">
        <p>{secondTeam}</p>

        <span className="w-6 h-6">
          <img
            src={secondTeamLogo}
            alt={secondTeam}
            className="object-cover rounded-full"
          />
        </span>
      </div>
      <div className="w-[5%] ml-4 flex items-center gap-1 justify-end">
        <span className="text-[10px] text-green-400">
          <PiTimerFill />
        </span>
        <span className="text-[10px] font-medium animate-pulse">{liveTime}</span>
      </div>
    </header>
  );
}
