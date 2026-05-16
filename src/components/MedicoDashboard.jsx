import { useState, useRef } from 'react';
import { Icons } from './Icons';
import { StatCard } from './StatCard';
import UserManagementContent from './UserManagement';
import AddNewUser from './AddNewUser';
import Settings from './Settings';

// --- Subcomponents ---

const Sidebar = ({ currentView, onMenuClick }) => {
  const menuItems = [
    { id: 'admin_dashboard', name: 'Dashboard', icon: <Icons.Layout /> },
    { id: 'patients', name: 'Patients', icon: <Icons.Users /> },
    { id: 'doctors', name: 'Doctors', icon: <Icons.Users /> },
    { id: 'appointments', name: 'Appointments', icon: <Icons.Calendar /> },
    { id: 'emr', name: 'EMR', icon: <Icons.FileText /> },
    { id: 'laboratory', name: 'Laboratory', icon: <Icons.Flask /> },
    { id: 'pharmacy', name: 'Pharmacy', icon: <Icons.Flask /> },
    { id: 'billing', name: 'Billing', icon: <Icons.DollarSign /> },
    { id: 'analytics', name: 'Analytics', icon: <Icons.TrendingUp /> },
    { id: 'admin_panel', name: 'Admin Panel', icon: <Icons.Users /> },
    { id: 'settings', name: 'Settings', icon: <Icons.Settings /> }
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img 
          src="/logo.png" 
          alt="Bireena Medico" 
          style={{ width: '100%', maxHeight: '48px', objectFit: 'contain', padding: '0 8px' }} 
        />
      </div>
      <div className="nav-menu">
        <div className="nav-label">Main Menu</div>
        {menuItems.map(item => (
          <div 
            key={item.name} 
            className={`nav-item ${(currentView === 'dashboard' || currentView === 'add_user') && item.id === 'admin_panel' ? 'active' : currentView === item.id ? 'active' : ''}`}
            onClick={() => onMenuClick(item.id)}
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="logout-btn">
          <Icons.LogOut />
          Log Out
        </div>
        <div className="copyright">
          COPYRIGHT © 2026 MEDICO HEALTH SYSTEMS
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <Icons.Search />
        <input type="text" placeholder="Search across Medico..." />
      </div>
      <div className="header-actions">
        <div className="notification-btn">
          <Icons.Bell />
          <div className="notification-badge"></div>
        </div>
        <div className="header-divider"></div>
        <div className="user-profile">
          <div className="user-info">
            <div className="user-role">SYSTEM ADMIN</div>
            <div className="user-dept">ADMIN</div>
          </div>
          <div className="avatar">
            <Icons.User />
          </div>
          <div style={{color: '#94a3b8', display: 'flex'}}><Icons.ChevronDown /></div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsContent = () => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('report', file);

    try {
      // Assuming the backend runs on port 5000
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        alert('File uploaded successfully!\\nURL: ' + data.fileUrl);
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload file. Make sure the Node server is running on port 5000.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="analytics-section">
      <div className="page-header">
        <div className="page-title">
          <h2>Admin Analytics</h2>
          <p>Overview of clinic operations and performance</p>
        </div>
        <div className="header-controls">
          <div className="date-picker">
            <Icons.Calendar />
            05 May 2025 - 12 May 2025
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
          />
          <button className="export-btn" onClick={handleUploadClick} disabled={isUploading}>
            <Icons.Download />
            {isUploading ? 'Uploading...' : 'Export Report'}
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard title="Total Patients" value="2,458" trend="12.5%" icon={<Icons.Users />} colorClass="bg-green" />
        <StatCard title="Total Appointments" value="1,189" trend="8.3%" icon={<Icons.Calendar />} colorClass="bg-blue" />
        <StatCard title="Prescriptions Issued" value="1,024" trend="9.6%" icon={<Icons.FileText />} colorClass="bg-purple" />
        <StatCard title="Lab Reports Issued" value="846" trend="15.2%" icon={<Icons.Flask />} colorClass="bg-orange" />
        <StatCard title="Total Revenue" value="₹ 12,45,890" trend="18.7%" icon={<Icons.DollarSign />} colorClass="bg-red" />
      </div>

      <div className="charts-grid-row-1">
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Appointments Overview</div>
            <div className="chart-action">Last 7 Days</div>
          </div>
          <div className="mock-chart">
            [ Line Chart Visualization ]
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Patients by Gender</div>
          </div>
          <div className="mock-chart">
            [ Donut Chart ]
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Appointments by Status</div>
          </div>
          <div className="mock-chart">
            [ Donut Chart ]
          </div>
        </div>
      </div>

      <div className="charts-grid-row-2">
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Top Doctors</div>
            <div className="chart-action" style={{border: 'none', color: '#1e5a32', fontWeight: 600}}>View All</div>
          </div>
          <div className="top-doctors-list">
            {/* Mocking a simple list */}
            {[1, 2, 3].map(i => (
              <div key={i} style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <div style={{width: 30, height: 30, borderRadius: '50%', backgroundColor: '#e2e8f0'}} />
                  <div style={{fontSize: 14, fontWeight: 500}}>Dr. Example {i}</div>
                </div>
                <div style={{fontSize: 14, color: '#666'}}>24{i}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Lab Reports Status</div>
          </div>
          <div className="mock-chart">
            [ Donut Chart ]
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Revenue Overview</div>
            <div className="chart-action">Last 7 Days</div>
          </div>
          <div className="mock-chart">
            [ Area Chart Visualization ]
          </div>
        </div>
      </div>

      <div className="table-card">
        <div className="chart-header" style={{marginBottom: '16px'}}>
          <div className="chart-title">Recent Activity</div>
          <div className="chart-action" style={{border: 'none', color: '#1e5a32', fontWeight: 600}}>View All</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Details</th>
              <th>By</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="activity-type">
                  <div className="activity-icon" style={{backgroundColor: '#e0f2fe', color: '#0284c7'}}><Icons.Flask /></div>
                  Lab Report Issued
                </div>
              </td>
              <td>CBC (Complete Blood Count) - Patient: Alice Cooper</td>
              <td>Dr. Michael Brown</td>
              <td>12 May 2025, 10:30 AM</td>
            </tr>
            <tr>
              <td>
                <div className="activity-type">
                  <div className="activity-icon" style={{backgroundColor: '#e0e7ff', color: '#4f46e5'}}><Icons.Calendar /></div>
                  Appointment Scheduled
                </div>
              </td>
              <td>Dr. Sarah Johnson - Patient: John Doe</td>
              <td>Reception</td>
              <td>12 May 2025, 10:15 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- Main Application Component ---
const Dashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="app-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .app-container {
          display: flex;
          height: 100vh;
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
          color: #0f172a;
        }

        /* Sidebar Styles */
        .sidebar {
          width: 260px;
          background-color: #f8fafc;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }
        .logo-container {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .logo-mark {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #166534 0%, #15803d 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          box-shadow: 0 4px 6px -1px rgba(22, 101, 52, 0.2);
        }
        .logo-mark svg { width: 24px; height: 24px; }
        .logo-text h1 { font-size: 18px; color: #166534; font-weight: 800; letter-spacing: -0.5px; }
        .logo-text span { font-size: 12px; color: #64748b; font-weight: 500; letter-spacing: 1px; }
        
        .nav-menu { padding: 24px 0; flex: 1; overflow-y: auto; }
        .nav-label { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700; padding: 0 24px; margin-bottom: 12px; letter-spacing: 0.5px; }
        .nav-item {
          display: flex; align-items: center; padding: 12px 24px; color: #64748b; text-decoration: none; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s;
        }
        .nav-item:hover { background-color: #f1f5f9; color: #166534; }
        .nav-item.active { background-color: #ecfdf5; color: #166534; border-left: 4px solid #166534; font-weight: 600; }
        .nav-item svg { margin-right: 12px; width: 18px; height: 18px; opacity: 0.8; }
        .nav-item.active svg { opacity: 1; }
        
        .sidebar-footer { padding: 24px; border-top: 1px solid #e2e8f0; }
        .logout-btn { display: flex; align-items: center; color: #64748b; font-weight: 600; cursor: pointer; font-size: 14px; margin-bottom: 16px; transition: color 0.2s; }
        .logout-btn:hover { color: #ef4444; }
        .logout-btn svg { margin-right: 12px; width: 18px; height: 18px; }
        .copyright { font-size: 10px; color: #94a3b8; line-height: 1.4; text-transform: uppercase; letter-spacing: 0.5px; }

        /* Main Wrapper & Header */
        .main-wrapper { flex: 1; display: flex; flex-direction: column; overflow: hidden; background-color: #f8fafc; }
        .header { height: 76px; background-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px); border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 32px; z-index: 5; }
        .search-bar { display: flex; align-items: center; background-color: #f1f5f9; border-radius: 99px; padding: 10px 20px; width: 400px; border: 1px solid transparent; transition: border-color 0.2s; }
        .search-bar:focus-within { border-color: #cbd5e1; background-color: #fff; }
        .search-bar svg { color: #94a3b8; }
        .search-bar input { border: none; background: transparent; margin-left: 12px; outline: none; width: 100%; font-size: 14px; color: #334155; }
        .search-bar input::placeholder { color: #94a3b8; }
        
        .header-actions { display: flex; align-items: center; gap: 16px; }
        .notification-btn { position: relative; color: #64748b; cursor: pointer; padding: 8px; border-radius: 50%; transition: background-color 0.2s; display: flex; }
        .notification-btn:hover { background-color: #f1f5f9; color: #0f172a; }
        .notification-badge { position: absolute; top: 6px; right: 8px; width: 10px; height: 10px; background-color: #f43f5e; border-radius: 50%; border: 2px solid white; }
        .header-divider { width: 1px; height: 32px; background-color: #e2e8f0; margin: 0 8px; }
        
        .user-profile { display: flex; align-items: center; gap: 12px; cursor: pointer; padding: 4px 8px; border-radius: 8px; transition: background-color 0.2s; }
        .user-profile:hover { background-color: #f1f5f9; }
        .user-info { text-align: right; }
        .user-role { font-size: 14px; font-weight: 800; color: #064e3b; letter-spacing: 0.2px; }
        .user-dept { font-size: 11px; color: #64967b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }
        .avatar { width: 44px; height: 44px; background-color: #e5ebe7; color: #166534; border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 0 0 1px #e2e8f0; }

        /* Content Area */
        .content-area { flex: 1; overflow-y: auto; padding: 32px; }
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; }
        .page-title h2 { font-size: 24px; color: #0f172a; font-weight: 700; margin-bottom: 6px; }
        .page-title p { font-size: 14px; color: #64748b; }
        .header-controls { display: flex; gap: 12px; }
        .date-picker { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background-color: white; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; color: #334155; font-weight: 500; cursor: pointer; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .export-btn { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background-color: #166534; color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background-color 0.2s; box-shadow: 0 1px 2px rgba(22,101,52,0.1); }
        .export-btn:hover { background-color: #15803d; }

        /* Stats Grid */
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-bottom: 24px; }
        .stat-card { background-color: white; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.02); transition: transform 0.2s, box-shadow 0.2s; }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .stat-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .stat-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        
        .bg-green { background-color: #ecfdf5; color: #10b981; }
        .bg-blue { background-color: #eff6ff; color: #3b82f6; }
        .bg-purple { background-color: #faf5ff; color: #a855f7; }
        .bg-orange { background-color: #fff7ed; color: #f97316; }
        .bg-red { background-color: #fef2f2; color: #ef4444; }

        .stat-title { font-size: 13px; color: #64748b; font-weight: 600; }
        .stat-value { font-size: 24px; font-weight: 800; color: #0f172a; margin-bottom: 6px; }
        .stat-trend { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #64748b; }
        .trend-up { color: #10b981; }
        
        /* Charts Grid */
        .charts-grid-row-1 { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .charts-grid-row-2 { display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 20px; margin-bottom: 20px; }
        .chart-card { background-color: white; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .chart-title { font-size: 15px; font-weight: 700; color: #0f172a; }
        .chart-action { font-size: 12px; color: #64748b; padding: 4px 10px; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer; font-weight: 500; }
        .mock-chart { height: 220px; display: flex; align-items: center; justify-content: center; background-color: #f8fafc; border-radius: 12px; color: #94a3b8; font-size: 14px; font-weight: 500; border: 1px dashed #cbd5e1; }

        /* Tables */
        .table-card { background-color: white; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        table { width: 100%; border-collapse: separate; border-spacing: 0; }
        th { text-align: left; padding: 12px 16px; font-size: 12px; color: #64748b; border-bottom: 1px solid #e2e8f0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        td { padding: 16px; font-size: 13px; color: #334155; border-bottom: 1px solid #f1f5f9; font-weight: 500; }
        tr:last-child td { border-bottom: none; }
        .activity-type { display: flex; align-items: center; gap: 12px; font-weight: 600; color: #0f172a; }
        .activity-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }

        /* User Management Styles */
        .user-management-section { margin-top: 48px; padding-top: 48px; border-top: 1px solid #e2e8f0; }
        .tabs-container { display: flex; gap: 24px; border-bottom: 1px solid #e2e8f0; margin-bottom: 24px; padding-top: 16px; }
        .tab { padding: 12px 4px; color: #64748b; font-weight: 600; font-size: 13px; cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; }
        .tab.active { color: #166534; border-bottom-color: #166534; }
        .tab:hover:not(.active) { color: #334155; }
        .filters-row { display: flex; gap: 16px; margin-bottom: 24px; align-items: center; }
        .search-input { display: flex; align-items: center; background-color: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 16px; flex: 1; color: #94a3b8; }
        .search-input input { border: none; outline: none; margin-left: 8px; font-size: 13px; width: 100%; color: #334155; }
        .filter-select { padding: 8px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #fff; font-size: 13px; color: #334155; cursor: pointer; font-weight: 500; }
        .filter-btn { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #fff; font-size: 13px; font-weight: 600; cursor: pointer; color: #334155; }
        
        .role-badge { padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; display: inline-block; }
        .role-doctor { background-color: #eff6ff; color: #2563eb; }
        .role-lab { background-color: #f5f3ff; color: #7c3aed; }
        .role-admin { background-color: #fef2f2; color: #dc2626; }
        
        .status-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; }
        .status-active .status-dot { background-color: #10b981; }
        .status-active { color: #10b981; }
        .status-inactive .status-dot { background-color: #94a3b8; }
        .status-inactive { color: #94a3b8; }
        
        .user-row { display: flex; align-items: center; gap: 12px; }
        .user-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #fff; }
        .avatar-blue { background-color: #3b82f6; }
        .avatar-purple { background-color: #a855f7; }
        .avatar-orange { background-color: #f97316; }
        .user-name { font-weight: 700; color: #0f172a; font-size: 13px; }
        .user-email { font-size: 11px; color: #64748b; }
        
        .action-btns { display: flex; gap: 8px; }
        .action-btn { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; border: 1px solid #e2e8f0; color: #64748b; cursor: pointer; background: #fff; transition: background 0.2s; }
        .action-btn:hover { background: #f1f5f9; color: #0f172a; }
        
        .layout-split { display: flex; gap: 24px; align-items: flex-start; }
        .main-table-area { flex: 1; overflow: hidden; }
        .side-panel { width: 320px; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .panel-title { font-weight: 700; font-size: 15px; color: #0f172a; }
        .close-btn { color: #94a3b8; cursor: pointer; font-size: 14px; }
        .panel-section { margin-bottom: 24px; }
        .panel-section-title { font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .panel-info-row { display: flex; margin-bottom: 12px; font-size: 13px; }
        .panel-info-label { width: 100px; color: #64748b; font-weight: 600; }
        .panel-info-value { flex: 1; color: #0f172a; font-weight: 500; }
        
        .primary-btn { background-color: #166534; color: white; border: none; border-radius: 8px; padding: 8px 16px; font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .primary-btn:hover { background-color: #15803d; }
        .secondary-btn { background-color: #fff; color: #334155; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 16px; font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; justify-content: center; }
        .danger-btn { background-color: #fff; color: #ef4444; border: 1px solid #fee2e2; border-radius: 8px; padding: 8px 16px; font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; justify-content: center; }

        /* Add User Form Styles */
        .form-section-title { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 16px; margin-top: 32px; }
        .form-section-title:first-child { margin-top: 0; }
        .form-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-label { font-size: 12px; font-weight: 600; color: #334155; }
        .form-input { padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; outline: none; transition: border-color 0.2s; color: #0f172a; width: 100%; background: #fff; }
        .form-input:focus { border-color: #166534; box-shadow: 0 0 0 2px rgba(22,101,52,0.1); }
        .form-input::placeholder { color: #94a3b8; }
        select.form-input { appearance: none; background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 12px center; background-size: 16px; padding-right: 32px; }
        .required { color: #ef4444; }
        
        .radio-group { display: flex; flex-direction: column; gap: 12px; }
        .radio-label { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; font-weight: 600; color: #0f172a; cursor: pointer; }
        .radio-label input[type="radio"] { margin-top: 2px; accent-color: #166534; }
        .radio-desc { font-size: 11px; color: #64748b; font-weight: 400; display: block; margin-top: 2px; }
        
        .checkbox-list { display: flex; flex-direction: column; gap: 12px; max-height: 150px; overflow-y: auto; padding-right: 8px; }
        .checkbox-label { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; color: #334155; cursor: pointer; }
        .checkbox-label input[type="checkbox"] { accent-color: #166534; width: 16px; height: 16px; border-radius: 4px; }
        
        .permissions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        
        .info-card { background: #fff; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 20px; }
        .info-card-title { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 16px; }
        .role-info-item { display: flex; gap: 12px; margin-bottom: 16px; }
        .role-info-item:last-child { margin-bottom: 0; }
        .role-info-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .role-info-title { font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 2px; }
        .role-info-desc { font-size: 11px; color: #64748b; line-height: 1.4; }
        
        .policy-list { display: flex; flex-direction: column; gap: 10px; }
        .policy-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #334155; }
        .policy-item.valid { color: #166534; }
        .policy-item.valid svg { color: #10b981; }
        .policy-item svg { color: #cbd5e1; }
        
        .note-box { background: #eff6ff; padding: 16px; border-radius: 8px; display: flex; gap: 12px; border: 1px solid #bfdbfe; }
        .note-box svg { color: #3b82f6; flex-shrink: 0; }
        .note-content { font-size: 12px; color: #1e3a8a; line-height: 1.5; font-weight: 500; }
      `}</style>
      <Sidebar 
        currentView={currentView} 
        onMenuClick={(id) => {
          if (id === 'settings' || id === 'admin_panel') {
            setCurrentView(id === 'admin_panel' ? 'dashboard' : id);
          }
        }} 
      />
      <div className="main-wrapper">
        <Header />
        <div className="content-area">
          {currentView === 'dashboard' ? (
            <>
              <AnalyticsContent />
              <UserManagementContent onAddUser={() => setCurrentView('add_user')} />
            </>
          ) : currentView === 'settings' ? (
            <Settings />
          ) : (
            <AddNewUser onBack={() => setCurrentView('dashboard')} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
