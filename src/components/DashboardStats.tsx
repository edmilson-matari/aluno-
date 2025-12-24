
import React from 'react';
import {
  FolderOpen,     // Total Projects
  Clock,          // In Progress
  CheckCircle,    // Completed
  AlertCircle,    // Overdue
  ArrowUp,        // Aumento
  ArrowDown,      // Diminuição
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  changePositive: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  changePositive,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 p-6 flex flex-col">
      {/* Header com ícone e mudança */}
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl ${iconColor} flex items-center justify-center shadow-md`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center space-x-1 text-sm font-semibold ${changePositive ? 'text-green-600' : 'text-red-600'}`}>
          {changePositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>{Math.abs(change)}</span>
        </div>
      </div>

      {/* Valor principal */}
      <h3 className="text-4xl font-bold text-slate-900 mb-1">{value}</h3>

      {/* Título e comparação */}
      <p className="text-sm font-medium text-slate-600">{title}</p>
      <p className="text-xs text-slate-500 mt-1">Do último mês</p>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Projectos Totais',
      value: 12,
      change: 2,
      icon: FolderOpen,
      iconColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      changePositive: true,
    },
    {
      title: 'Em Progresso',
      value: 7,
      change: 3,
      icon: Clock,
      iconColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      changePositive: true,
    },
    {
      title: 'Completos',
      value: 4,
      change: 1,
      icon: CheckCircle,
      iconColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
      changePositive: true,
    },
    {
      title: 'Atrasado',
      value: 1,
      change: 2,
      icon: AlertCircle,
      iconColor: 'bg-gradient-to-br from-red-500 to-rose-600',
      changePositive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          iconColor={stat.iconColor}
          changePositive={stat.changePositive}
        />
      ))}
    </div>
  );
};

export default DashboardStats;