import { SportsNavbar } from './components/SportsNavbar';
import { EditorialHero } from './components/EditorialHero';
import { TournamentGrid } from './components/TournamentGrid';
import { SportsFooter } from './components/SportsFooter';

export function App() {
  const scrollToGames = () => {
    const gamesElement = document.getElementById('games');
    if (gamesElement) {
      gamesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B09] text-[#F6F8F5] font-sans flex flex-col justify-between selection:bg-[#00D68F] selection:text-[#070B09]">
      {/* 1. Slim Athletic Navigation Bar */}
      <SportsNavbar onRegisterClick={scrollToGames} />

      <main className="flex-grow flex flex-col">
        {/* 2. Asymmetric Editorial Hero with Integrated Scoreboard Countdown & Cinematic Visual */}
        <EditorialHero onExploreGames={scrollToGames} />

        {/* 3. Main Focus: Tournament Registration Grid (CHOOSE YOUR BATTLE) */}
        <TournamentGrid />
      </main>

      {/* 4. Minimal Sports Footer */}
      <SportsFooter />
    </div>
  );
}

export default App;
