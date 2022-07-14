import React from 'react';
import { links } from '../shared/data';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarBtnLink,
  SidebarBtnWrapper,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer {...{ isOpen }}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {links?.map(({ id, url, text }) => (
          <SidebarMenu key={id}>
            <SidebarLink
              to={url}
              smooth={true}
              spy={true}
              duration={500}
              onClick={toggle}
            >
              {text}
            </SidebarLink>
          </SidebarMenu>
        ))}
        <SidebarBtnWrapper>
          <SidebarBtnLink to='/signin' onClick={toggle}>
            Sign In
          </SidebarBtnLink>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
