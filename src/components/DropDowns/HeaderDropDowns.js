import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { FaUnity } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  transition: all 0.3s ease;
  background-color: transparent;
  color: #9B9D9E;
  padding: 3px;
  font-size: 18px;
  
  border: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: rgb(255, 255, 255, 0.75);
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1; 
  min-width: 160px;
  box-shadow: 0px 8px 16px   
 0px rgba(0,0,0,0.2); 
  z-index: 1;
  border-radius: 8px; 
  overflow:   
 hidden; 
  height: 0; /* Initially collapse the dropdown menu */
  transition: height 0.4s ease; /* Add a smooth transition for height */

  ${DropdownContainer}:hover & {
    display: block;
    height: auto; /* Expand to fit content on hover */
  }
`;

const DropdownItem = styled.a`
color: #9B9D9E;
padding: 12px 16px;
text-decoration: none;
text-align: center;
display: block;
transition: background-color 0.2s ease; /* Smooth transition on hover */
background-color: #212529;
&:hover {
  background-color: rgb(255, 255, 255, 1);
  color: black;
}


/* Add subtle dividers between items */
& + & { 
  border-top: 1px solid #eee; 
}
`;
const ItemIcon = styled.span`
  margin-right: 8px; /* Add some space between the icon and label */
`;

const HeaderDropdown = ({ title, items }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
  
    useEffect(() => {
      // Calculate the height of the content when it's rendered
      setContentHeight(contentRef.current?.offsetHeight || 0);
    }, [items]); // Recalculate height if items change
  
  return (
    <DropdownContainer>
      <DropdownButton>
        {title}
      </DropdownButton>
      <DropdownContent 
        style={{ height: contentHeight }} // Set height for the transition
        ref={contentRef} 
      >
        {items.map((item, index) => (
           <DropdownItem 
           key={index} 
           href={item.href} 
           target={item.target || '_self'} 
           rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
         >
           <ItemIcon>
             {item.icon} {/* Render the icon here */}
           </ItemIcon>
           {item.label}
         </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default HeaderDropdown;