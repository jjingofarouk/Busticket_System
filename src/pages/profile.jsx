import React, { useState } from 'react';
import { VscAccount } from 'react-icons/vsc';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <button className="profile-dropdown-toggle" onClick={toggleDropdown}>
        <VscAccount className='me-1 fs-2' />
      </button>
      {isOpen && (
        <div className="profile-dropdown-menu">
          {/* Dropdown menu items */}
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
