import { Icons } from './Icons';

const AddNewUser = ({ onBack }) => {
  return (
    <div className="add-user-section">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>Add New User</h2>
          <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>User Management <span style={{margin: '0 4px'}}>&gt;</span> <span style={{color: '#0f172a'}}>Add New User</span></div>
        </div>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, border: 'none', background: 'transparent', color: '#334155', cursor: 'pointer' }}>
           <Icons.ArrowLeft /> Back to Users
        </button>
      </div>

      <div className="layout-split">
        <div className="main-form-area" style={{ flex: 1, background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
          
          <div className="form-section-title">Basic Information</div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name <span className="required">*</span></label>
              <input type="text" className="form-input" placeholder="Enter full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address <span className="required">*</span></label>
              <input type="email" className="form-input" placeholder="Enter email address" />
            </div>
            <div className="form-group">
              <label className="form-label">Mobile Number <span className="required">*</span></label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <select className="form-input" style={{ width: '80px', padding: '10px' }}>
                  <option>+91</option>
                  <option>+1</option>
                </select>
                <input type="text" className="form-input" placeholder="Enter mobile number" style={{ flex: 1 }} />
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <div style={{position: 'relative'}}>
                <input type="text" className="form-input" placeholder="Select date of birth" />
                <div style={{position: 'absolute', right: '12px', top: '10px', color: '#64748b'}}><Icons.Calendar /></div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select className="form-input">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Language</label>
              <select className="form-input">
                <option>Select language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="form-label">Address</label>
            <input type="text" className="form-input" placeholder="Enter full address" />
          </div>

          <div className="form-section-title">Account Information</div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Username <span className="required">*</span></label>
              <input type="text" className="form-input" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label className="form-label">Password <span className="required">*</span></label>
              <div style={{position: 'relative'}}>
                <input type="password" className="form-input" placeholder="Enter password" />
                <div style={{position: 'absolute', right: '12px', top: '10px', color: '#94a3b8', cursor: 'pointer'}}><Icons.Eye /></div>
              </div>
              <div style={{fontSize: '11px', color: '#64748b', marginTop: '4px'}}>Minimum 8 characters with uppercase, lowercase, number & symbol</div>
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password <span className="required">*</span></label>
              <div style={{position: 'relative'}}>
                <input type="password" className="form-input" placeholder="Confirm password" />
                <div style={{position: 'absolute', right: '12px', top: '10px', color: '#94a3b8', cursor: 'pointer'}}><Icons.Eye /></div>
              </div>
            </div>
          </div>

          <div className="form-section-title">Role & Department</div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Role <span className="required">*</span></label>
              <select className="form-input">
                <option>Select role</option>
                <option>Doctor</option>
                <option>Lab Assistant</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Department / Lab / Clinic <span className="required">*</span></label>
              <select className="form-input">
                <option>Select department, lab or clinic</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Reporting To (Optional)</label>
              <select className="form-input">
                <option>Select reporting manager</option>
              </select>
            </div>
          </div>

          <div className="form-section-title">Access & Permissions</div>
          <div className="form-row" style={{ alignItems: 'flex-start' }}>
            <div className="form-group">
              <label className="form-label" style={{marginBottom: '8px'}}>Lab / Clinic Access <span className="required">*</span></label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="labAccess" />
                  <div>All Labs / Clinics<span className="radio-desc">User can access all labs / clinics</span></div>
                </label>
                <label className="radio-label">
                  <input type="radio" name="labAccess" defaultChecked />
                  <div>Specific Labs / Clinics<span className="radio-desc">User can access only selected labs / clinics</span></div>
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" style={{marginBottom: '8px'}}>Lab Report Access (For Lab Roles)</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="reportAccess" />
                  <div>All Report Types<span className="radio-desc">Can access all types of lab reports</span></div>
                </label>
                <label className="radio-label">
                  <input type="radio" name="reportAccess" defaultChecked />
                  <div>Specific Report Types<span className="radio-desc">Can access only selected report types</span></div>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{marginBottom: '8px'}}>Select Report Types <span className="required">*</span></label>
              <div className="checkbox-list">
                <label className="checkbox-label"><input type="checkbox" defaultChecked /> Hematology Reports</label>
                <label className="checkbox-label"><input type="checkbox" defaultChecked /> Biochemistry Reports</label>
                <label className="checkbox-label"><input type="checkbox" /> Microbiology Reports</label>
                <label className="checkbox-label"><input type="checkbox" /> Immunology Reports</label>
                <label className="checkbox-label"><input type="checkbox" /> Pathology (General) Reports</label>
              </div>
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '16px' }}>
            <label className="form-label" style={{marginBottom: '12px'}}>Additional Permissions</label>
            <div className="permissions-grid">
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> View Patients</label>
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> Create / Edit Patients</label>
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> View Appointments</label>
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> Manage Prescriptions</label>
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> View Reports</label>
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> Manage Billing</label>
              <label className="checkbox-label"><input type="checkbox" defaultChecked /> Manage Inventory</label>
            </div>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
            <label className="checkbox-label" style={{marginBottom: '24px'}}>
              <input type="checkbox" defaultChecked /> 
              Send login credentials to user via email / SMS
            </label>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button className="secondary-btn" style={{border: 'none', background: 'transparent', boxShadow: 'none'}}>Cancel</button>
              <button className="secondary-btn">Reset</button>
              <button className="primary-btn">Create User</button>
            </div>
          </div>

        </div>

        {/* Right Sidebar Info */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column' }}>
          <div className="info-card">
            <div className="info-card-title">Role & Access Information</div>
            
            <div className="role-info-item">
              <div className="role-info-icon" style={{background: '#eff6ff', color: '#3b82f6'}}><Icons.User /></div>
              <div>
                <div className="role-info-title">Doctor</div>
                <div className="role-info-desc">Can manage patients, prescriptions, appointments & reports</div>
              </div>
            </div>
            
            <div className="role-info-item">
              <div className="role-info-icon" style={{background: '#faf5ff', color: '#a855f7'}}><Icons.Flask /></div>
              <div>
                <div className="role-info-title">Lab Assistant</div>
                <div className="role-info-desc">Can view & manage lab reports based on access</div>
              </div>
            </div>
            
            <div className="role-info-item">
              <div className="role-info-icon" style={{background: '#fef2f2', color: '#ef4444'}}><Icons.Calendar /></div>
              <div>
                <div className="role-info-title">Clinic Staff</div>
                <div className="role-info-desc">Can manage medicine distribution & patients</div>
              </div>
            </div>
            
            <div className="role-info-item">
              <div className="role-info-icon" style={{background: '#fff7ed', color: '#f97316'}}><Icons.Calendar /></div>
              <div>
                <div className="role-info-title">Appointment Staff</div>
                <div className="role-info-desc">Can manage appointments & calendar</div>
              </div>
            </div>
            
            <div className="role-info-item">
              <div className="role-info-icon" style={{background: '#eff6ff', color: '#3b82f6'}}><Icons.DollarSign /></div>
              <div>
                <div className="role-info-title">Billing Staff</div>
                <div className="role-info-desc">Can manage billing, invoices & payments</div>
              </div>
            </div>
            
            <div className="role-info-item">
              <div className="role-info-icon" style={{background: '#ecfdf5', color: '#10b981'}}><Icons.Users /></div>
              <div>
                <div className="role-info-title">Admin</div>
                <div className="role-info-desc">Full system access & user management</div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-title">Password Policy</div>
            <div className="policy-list">
              <div className="policy-item valid"><Icons.CheckCircle /> Minimum 8 characters</div>
              <div className="policy-item valid"><Icons.CheckCircle /> At least one uppercase letter (A-Z)</div>
              <div className="policy-item valid"><Icons.CheckCircle /> At least one lowercase letter (a-z)</div>
              <div className="policy-item valid"><Icons.CheckCircle /> At least one number (0-9)</div>
              <div className="policy-item valid"><Icons.CheckCircle /> At least one special character (!@#$%^&*)</div>
            </div>
          </div>

          <div className="note-box">
            <Icons.Info />
            <div className="note-content">
              <strong>Note</strong><br/>
              The user will be able to login after creation. Make sure to assign the appropriate role and permissions.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddNewUser;
