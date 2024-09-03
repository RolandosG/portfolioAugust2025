import React from 'react';
import './WoWAddon.css'; // Create a corresponding CSS file for styling

const WoWAddon = () => {
    return (
        <div className="wow-addon">
            <h3>CompareIlvlToolTip</h3>
            <p>A lightweight World of Warcraft addon that enhances item tooltips by displaying the item level of the currently equipped item in the corresponding slot. This allows for quick and easy comparison while browsing your inventory or considering upgrades.</p>

            {/* Add more details like: */}
            <ul>
                <li>Key Features</li>
                <li>How to Use</li>
                <li>Screenshots or Videos (if available)</li>
                <li>Link to download/project page</li>
            </ul>
        </div>
    );
};

export default WoWAddon;