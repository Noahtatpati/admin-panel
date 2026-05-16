import { Icons } from './Icons';

export const StatCard = ({ title, value, trend, icon, colorClass }) => (
  <div className="stat-card">
    <div className="stat-header">
      <div className={`stat-icon ${colorClass}`}>
        {icon}
      </div>
      <div className="stat-title">{title}</div>
    </div>
    <div className="stat-value">{value}</div>
    <div className="stat-trend trend-up">
      <Icons.TrendingUp /> {trend} vs last 7 days
    </div>
  </div>
);
