import { Icons } from './Icons';
import { StatCard } from './StatCard';

const UserManagementContent = ({ onAddUser }) => {
  return (
    <div className="user-management-section">
      <div className="page-header">
        <div className="page-title">
          <h2>User Management</h2>
          <p>Manage system users, roles, permissions and access control.</p>
        </div>
        <button className="primary-btn" onClick={onAddUser}>
          <span style={{fontSize: '16px', lineHeight: '10px'}}>+</span> Add New User
        </button>
      </div>

      <div className="stats-grid" style={{gridTemplateColumns: 'repeat(5, 1fr)'}}>
        <StatCard title="Total Users" value="48" trend="All Users" icon={<Icons.Users />} colorClass="bg-blue" />
        <StatCard title="Active Users" value="42" trend="Currently Active" icon={<Icons.Search />} colorClass="bg-green" />
        <StatCard title="Inactive Users" value="6" trend="Deactivated" icon={<Icons.Bell />} colorClass="bg-purple" />
        <StatCard title="Locked Users" value="2" trend="Account Locked" icon={<Icons.Layout />} colorClass="bg-red" />
        <StatCard title="Online Now" value="12" trend="Currently Online" icon={<Icons.Users />} colorClass="bg-orange" />
      </div>

      <div className="layout-split">
        <div className="main-table-area">
          <div className="table-card" style={{padding: 0}}>
            <div className="tabs-container" style={{padding: '0 24px'}}>
              <div className="tab active">All Users</div>
              <div className="tab">Doctors</div>
              <div className="tab">Lab Assistants</div>
              <div className="tab">Clinic Staff</div>
              <div className="tab">Appointment Staff</div>
              <div className="tab">Billing Staff</div>
              <div className="tab">Admin Users</div>
            </div>

            <div className="filters-row" style={{padding: '0 24px'}}>
              <div className="search-input">
                <Icons.Search />
                <input type="text" placeholder="Search by name, email or mobile..." />
              </div>
              <select className="filter-select"><option>All Roles</option></select>
              <select className="filter-select"><option>All Status</option></select>
              <select className="filter-select"><option>All Labs / Clinics</option></select>
              <button className="filter-btn"><Icons.Search /> Filter</button>
            </div>

            <table style={{marginTop: '12px'}}>
              <thead>
                <tr>
                  <th style={{paddingLeft: '24px'}}>User</th>
                  <th>Role</th>
                  <th>Department / Lab</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th style={{paddingRight: '24px'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{paddingLeft: '24px'}}>
                    <div className="user-row">
                      <img src="https://i.pravatar.cc/150?img=5" alt="avatar" className="user-avatar" />
                      <div>
                        <div className="user-name">Dr. Sarah Miller</div>
                        <div className="user-email">sarah.miller@careplus.com</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="role-badge role-doctor">Doctor</span></td>
                  <td>Cardiology Clinic</td>
                  <td><span className="status-badge status-active"><span className="status-dot"></span>Active</span></td>
                  <td><div style={{fontSize: 11}}>12 May 2025, 10:30 AM</div></td>
                  <td style={{paddingRight: '24px'}}>
                    <div className="action-btns">
                      <button className="action-btn"><Icons.Search /></button>
                      <button className="action-btn"><Icons.FileText /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{paddingLeft: '24px'}}>
                    <div className="user-row">
                      <div className="user-avatar avatar-purple">LA</div>
                      <div>
                        <div className="user-name">John Lab Assistant</div>
                        <div className="user-email">john.lab@careplus.com</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="role-badge role-lab">Lab Assistant</span></td>
                  <td>Pathology Lab<br/><span style={{fontSize: 11, color: '#64748b'}}>Hematology Reports</span></td>
                  <td><span className="status-badge status-active"><span className="status-dot"></span>Active</span></td>
                  <td><div style={{fontSize: 11}}>12 May 2025, 09:15 AM</div></td>
                  <td style={{paddingRight: '24px'}}>
                    <div className="action-btns">
                      <button className="action-btn"><Icons.Search /></button>
                      <button className="action-btn"><Icons.FileText /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{paddingLeft: '24px'}}>
                    <div className="user-row">
                      <div className="user-avatar avatar-orange">AD</div>
                      <div>
                        <div className="user-name">Admin User</div>
                        <div className="user-email">admin@careplus.com</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="role-badge role-admin">Admin</span></td>
                  <td>System Administration<br/><span style={{fontSize: 11, color: '#64748b'}}>Full Access</span></td>
                  <td><span className="status-badge status-inactive"><span className="status-dot"></span>Offline</span></td>
                  <td><div style={{fontSize: 11}}>10 May 2025, 11:30 AM</div></td>
                  <td style={{paddingRight: '24px'}}>
                    <div className="action-btns">
                      <button className="action-btn"><Icons.Search /></button>
                      <button className="action-btn"><Icons.FileText /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panel for User Details */}
        <div className="side-panel">
          <div className="panel-header">
            <div className="panel-title">User Details</div>
            <div className="close-btn">✕</div>
          </div>
          
          <div className="user-row" style={{marginBottom: '24px'}}>
            <img src="https://i.pravatar.cc/150?img=5" alt="avatar" style={{width: 48, height: 48, borderRadius: '50%'}} />
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <div className="user-name" style={{fontSize: '15px'}}>Dr. Sarah Miller</div>
                <span className="status-badge status-active" style={{background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', fontSize: '10px'}}>Active</span>
              </div>
              <div className="role-badge role-doctor" style={{marginTop: '4px'}}>Doctor</div>
              <div style={{fontSize: '11px', color: '#64748b', marginTop: '4px'}}>ID: USR-0001</div>
            </div>
          </div>

          <div className="panel-section">
            <div className="panel-section-title">Personal Information</div>
            <div className="panel-info-row"><div className="panel-info-label">Email</div><div className="panel-info-value">sarah.miller@careplus.com</div></div>
            <div className="panel-info-row"><div className="panel-info-label">Mobile</div><div className="panel-info-value">+91 9876543210</div></div>
            <div className="panel-info-row"><div className="panel-info-label">Gender</div><div className="panel-info-value">Female</div></div>
          </div>

          <div className="panel-section">
            <div className="panel-section-title">Access Information</div>
            <div className="panel-info-row"><div className="panel-info-label">Username</div><div className="panel-info-value">sarah.miller</div></div>
            <div className="panel-info-row" style={{alignItems: 'center'}}>
              <div className="panel-info-label">Password</div>
              <div className="panel-info-value" style={{display: 'flex', justifyContent: 'space-between'}}>
                ........ <span style={{color: '#2563eb', cursor: 'pointer', fontSize: '11px', fontWeight: 600}}>Change</span>
              </div>
            </div>
            <div className="panel-info-row" style={{alignItems: 'center', marginTop: '16px'}}>
              <div className="panel-info-label" style={{width: 'auto', flex: 1}}>Login Allowed</div>
              <div className="panel-info-value" style={{flex: 'none'}}>
                <div style={{width: 36, height: 20, background: '#10b981', borderRadius: '10px', position: 'relative'}}>
                  <div style={{width: 16, height: 16, background: '#fff', borderRadius: '50%', position: 'absolute', right: 2, top: 2}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-section" style={{borderTop: '1px solid #e2e8f0', paddingTop: '24px'}}>
            <div className="panel-section-title">Account Actions</div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px'}}>
              <button className="secondary-btn" style={{fontSize: '12px', padding: '8px 6px'}}><Icons.Search /> Reset</button>
              <button className="danger-btn" style={{fontSize: '12px', padding: '8px 6px'}}><Icons.Bell /> Lock</button>
            </div>
            <button className="primary-btn" style={{width: '100%', justifyContent: 'center'}}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementContent;
