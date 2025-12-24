// HomePage.tsx
import DashboardStats from '../components/DashboardStats';
import ProjectOverview from '../components/ProjectOverview';

const HomePage = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
          Visão Geral
        </h2>
        <DashboardStats />
      </div>

      {/* Próximas seções aqui */}
      <ProjectOverview/>
    </div>
  );
};

export default HomePage;