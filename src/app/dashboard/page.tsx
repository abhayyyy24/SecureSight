import IncidentPlayer from '../components/incident-player';
import IncidentList from '../components/incident-list';
import TimelinePlayer from '../components/timelineplayer';

export default function DashboardPage() {
  return (
    <main className="bg-black p-6 space-y-4">
      {/*Maindashboard*/}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <IncidentPlayer />
        </div>
        <IncidentList />
      </div>

      {/*Timeline*/}
      <div className="w-full">
        <TimelinePlayer />
      </div>
    </main>
  );
}
