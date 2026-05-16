import { Icons } from './Icons';

const ToggleSwitch = ({ checked }) => (
  <label className="switch">
    <input type="checkbox" defaultChecked={checked} />
    <span className="slider"></span>
  </label>
);

const SettingRow = ({ label, desc, control }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
    <div style={{ paddingRight: '24px' }}>
      <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>{label}</div>
      {desc && <div style={{ fontSize: '11px', color: '#64748b' }}>{desc}</div>}
    </div>
    <div>{control}</div>
  </div>
);

const Settings = () => {
  return (
    <div className="settings-section">
      <style>{`
        .settings-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
        .settings-bottom-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 24px; }
        .settings-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .settings-card-header { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 24px; }
        .settings-card-icon { color: #166534; }
        .settings-card-title { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
        .settings-card-desc { font-size: 12px; color: #64748b; }
        
        .switch { position: relative; display: inline-block; width: 36px; height: 20px; flex-shrink: 0; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #cbd5e1; transition: .4s; border-radius: 20px; }
        .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
        input:checked + .slider { background-color: #166534; }
        input:checked + .slider:before { transform: translateX(16px); }
        
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .form-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px; }
      `}</style>

      <div className="page-header" style={{ alignItems: 'center' }}>
        <div className="page-title">
          <h2>System Settings</h2>
          <p>Manage and configure all system preferences and configuration.</p>
        </div>
        <button className="primary-btn">
          <Icons.Save /> Save All Changes
        </button>
      </div>

      <div className="settings-layout">
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* General Settings */}
          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-card-icon"><Icons.Settings /></div>
              <div>
                <div className="settings-card-title">General Settings</div>
                <div className="settings-card-desc">Basic system information and preferences.</div>
              </div>
            </div>
            
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Site Name</label>
                <input type="text" className="form-input" defaultValue="MediCare+ Clinic Management System" />
              </div>
              <div className="form-group">
                <label className="form-label">Site Tagline</label>
                <input type="text" className="form-input" defaultValue="Your Health, Our Priority" />
              </div>
            </div>
            
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Timezone</label>
                <select className="form-input"><option>(UTC+05:30) Asia/Kolkata</option></select>
              </div>
              <div className="form-group">
                <label className="form-label">Date Format</label>
                <select className="form-input"><option>DD MMM YYYY (12 May 2025)</option></select>
              </div>
            </div>

            <div className="form-grid-2" style={{ marginBottom: '24px' }}>
              <div className="form-group">
                <label className="form-label">Time Format</label>
                <select className="form-input"><option>12 Hour (HH:MM AM/PM)</option></select>
              </div>
              <div className="form-group">
                <label className="form-label">Currency</label>
                <select className="form-input"><option>INR (₹) - Indian Rupee</option></select>
              </div>
            </div>

            <SettingRow 
              label="Maintenance Mode" 
              desc="System will be unavailable for normal users." 
              control={<ToggleSwitch checked={false} />} 
            />
          </div>

          {/* Email & SMS Settings */}
          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-card-icon"><Icons.Mail /></div>
              <div>
                <div className="settings-card-title">Email & SMS Settings</div>
                <div className="settings-card-desc">Configure email server and SMS gateway.</div>
              </div>
            </div>

            <div className="form-grid-3">
              <div className="form-group">
                <label className="form-label">Mail Driver</label>
                <select className="form-input"><option>SMTP</option></select>
              </div>
              <div className="form-group">
                <label className="form-label">Mail Host</label>
                <input type="text" className="form-input" defaultValue="smtp.gmail.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Mail Port</label>
                <input type="text" className="form-input" defaultValue="587" />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Mail Username</label>
                <input type="text" className="form-input" defaultValue="noreply@medicare.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Mail Password</label>
                <div style={{position: 'relative'}}>
                  <input type="password" className="form-input" defaultValue="password123" />
                  <div style={{position: 'absolute', right: '12px', top: '10px', color: '#94a3b8'}}><Icons.Eye /></div>
                </div>
              </div>
            </div>

            <div className="form-grid-2" style={{ marginBottom: '24px' }}>
              <div className="form-group">
                <label className="form-label">From Name</label>
                <input type="text" className="form-input" defaultValue="MediCare+ System" />
              </div>
              <div className="form-group">
                <label className="form-label">From Email</label>
                <input type="text" className="form-input" defaultValue="noreply@medicare.com" />
              </div>
            </div>
            
            <div className="form-grid-2" style={{ marginBottom: '24px' }}>
              <div className="form-group">
                <label className="form-label">SMS Gateway</label>
                <select className="form-input"><option>Twilio</option></select>
              </div>
            </div>

            <button className="secondary-btn" style={{color: '#166534', borderColor: '#166534'}}>
               Send Test Email
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Security Settings */}
          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-card-icon"><Icons.Shield /></div>
              <div>
                <div className="settings-card-title">Security Settings</div>
                <div className="settings-card-desc">Configure security preferences and policies.</div>
              </div>
            </div>

            <SettingRow label="Enforce Strong Password" desc="Require strong password for all users." control={<ToggleSwitch checked={true} />} />
            <SettingRow label="Two Factor Authentication" desc="Enable 2FA for admin and staff users." control={<ToggleSwitch checked={true} />} />
            <SettingRow 
              label="Session Timeout (minutes)" 
              desc="Automatically logout after inactivity." 
              control={<input type="number" className="form-input" style={{width: '60px', padding: '6px 10px'}} defaultValue="30" />} 
            />
            <SettingRow 
              label="Login Attempt Limit" 
              desc="Maximum number of failed login attempts." 
              control={<input type="number" className="form-input" style={{width: '60px', padding: '6px 10px'}} defaultValue="5" />} 
            />
            <SettingRow 
              label="IP Restriction for Admin" 
              desc="Restrict admin login to specific IP addresses." 
              control={<ToggleSwitch checked={false} />} 
            />
            
            <button className="secondary-btn" style={{color: '#166534', borderColor: '#166534', marginTop: '8px'}}>
               <Icons.Shield /> Manage IP Whitelist
            </button>
          </div>

          {/* Appointment Settings */}
          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-card-icon"><Icons.Calendar /></div>
              <div>
                <div className="settings-card-title">Appointment Settings</div>
                <div className="settings-card-desc">Configure appointment related preferences.</div>
              </div>
            </div>

            <SettingRow 
              label="Advance Booking Days" 
              desc="Maximum days in advance for booking." 
              control={<input type="number" className="form-input" style={{width: '60px', padding: '6px 10px'}} defaultValue="30" />} 
            />
            <SettingRow 
              label="Appointment Slot Interval" 
              desc="Interval between two appointments." 
              control={<select className="form-input" style={{width: '120px'}}><option>30 Minutes</option></select>} 
            />
            <SettingRow label="Allow Walk-in Appointments" desc="Enable walk-in appointments." control={<ToggleSwitch checked={true} />} />
            <SettingRow label="Auto Confirm Appointments" desc="Automatically confirm appointments." control={<ToggleSwitch checked={false} />} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ paddingRight: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Appointment Cancellation Limit</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Allow cancellation up to (hours before appointment).</div>
              </div>
              <div><input type="number" className="form-input" style={{width: '60px', padding: '6px 10px'}} defaultValue="2" /></div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="settings-bottom-row">
        
        {/* Lab & Reports */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon"><Icons.Flask /></div>
            <div>
              <div className="settings-card-title">Lab & Reports Settings</div>
              <div className="settings-card-desc">Configure lab tests and reports preferences.</div>
            </div>
          </div>
          <SettingRow 
            label="Default Report Format" 
            desc="" 
            control={<select className="form-input" style={{width: '100px'}}><option>PDF</option></select>} 
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ paddingRight: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Enable Report Approval</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Reports must be approved before release.</div>
            </div>
            <div><ToggleSwitch checked={true} /></div>
          </div>
        </div>

        {/* Pharmacy Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon"><Icons.Briefcase /></div>
            <div>
              <div className="settings-card-title">Pharmacy Settings</div>
              <div className="settings-card-desc">Configure pharmacy and medicine preferences.</div>
            </div>
          </div>
          <SettingRow 
            label="Low Stock Alert Threshold" 
            desc="Notify when stock goes below quantity." 
            control={<input type="number" className="form-input" style={{width: '60px', padding: '6px 10px'}} defaultValue="10" />} 
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ paddingRight: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Enable Expiry Alerts</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Receive alerts for medicine expiry.</div>
            </div>
            <div><ToggleSwitch checked={true} /></div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon"><Icons.CreditCard /></div>
            <div>
              <div className="settings-card-title">Payment Settings</div>
              <div className="settings-card-desc">Configure payment and billing preferences.</div>
            </div>
          </div>
          <SettingRow 
            label="Default Payment Method" 
            desc="" 
            control={<select className="form-input" style={{width: '100px'}}><option>Cash</option></select>} 
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ paddingRight: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Enable Online Payments</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Allow online payments for invoices.</div>
            </div>
            <div><ToggleSwitch checked={true} /></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Settings;
