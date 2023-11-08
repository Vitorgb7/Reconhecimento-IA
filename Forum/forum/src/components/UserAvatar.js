import React from 'react';

const UserAvatar = ({ username }) => {
    const imagePath = "/avatar.png"; 

    return (
        <div className="user-avatar">
            <img
                src={imagePath}
                alt={`${username}'s avatar`}
                className="avatar-image"
            />
        </div>
    );
};

export default UserAvatar;
