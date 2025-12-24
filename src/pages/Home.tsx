// HomePage.tsx
import DashboardStats from '../components/DashboardStats';
import ProjectOverview from '../components/ProjectOverview';

const HomePage = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl text-black-500 bg-clip-text mb-8">
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