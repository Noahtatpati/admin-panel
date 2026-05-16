const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'MedicoDashboard.jsx');
const content = fs.readFileSync(filePath, 'utf-8');

// Match Icons
const iconsMatch = content.match(/const Icons = \{([\s\S]*?)\n\};\n/);
const iconsCode = iconsMatch ? iconsMatch[0].replace('const Icons', 'export const Icons') : '';

// Match StatCard
const statCardMatch = content.match(/const StatCard = \([\s\S]*?\);\n/);
const statCardCode = statCardMatch ? statCardMatch[0].replace('const StatCard', 'export const StatCard') : '';

// Match UserManagementContent
const userMgmtMatch = content.match(/const UserManagementContent = \(\{ onAddUser \}\) => \{([\s\S]*?)\n\};\n/);
const userMgmtCode = userMgmtMatch ? userMgmtMatch[0] : '';

// Match AddNewUser
const addNewUserMatch = content.match(/const AddNewUser = \(\{ onBack \}\) => \{([\s\S]*?)\n\};\n/);
const addNewUserCode = addNewUserMatch ? addNewUserMatch[0] : '';

// Create Icons.jsx
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Icons.jsx'), `import React from 'react';\n\n${iconsCode}`);

// Create StatCard.jsx
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'StatCard.jsx'), `import React from 'react';\nimport { Icons } from './Icons';\n\n${statCardCode}`);

// Create UserManagement.jsx
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'UserManagement.jsx'), `import React from 'react';\nimport { Icons } from './Icons';\nimport { StatCard } from './StatCard';\n\n${userMgmtCode}\n\nexport default UserManagementContent;\n`);

// Create AddNewUser.jsx
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'AddNewUser.jsx'), `import React from 'react';\nimport { Icons } from './Icons';\n\n${addNewUserCode}\n\nexport default AddNewUser;\n`);

// Update MedicoDashboard.jsx
let newContent = content;
newContent = newContent.replace(/const Icons = \{([\s\S]*?)\n\};\n/, '');
newContent = newContent.replace(/const StatCard = \([\s\S]*?\);\n/, '');
newContent = newContent.replace(/const UserManagementContent = \(\{ onAddUser \}\) => \{([\s\S]*?)\n\};\n/, '');
newContent = newContent.replace(/const AddNewUser = \(\{ onBack \}\) => \{([\s\S]*?)\n\};\n/, '');

const importStatements = `import { Icons } from './Icons';
import { StatCard } from './StatCard';
import UserManagementContent from './UserManagement';
import AddNewUser from './AddNewUser';
`;

newContent = newContent.replace(/import \{ useState, useRef \} from 'react';\n/, `import { useState, useRef } from 'react';\n${importStatements}\n`);

fs.writeFileSync(filePath, newContent);
console.log('Refactoring complete!');
