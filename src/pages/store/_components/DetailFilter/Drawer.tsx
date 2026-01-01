import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

import CloseIcon from '@/assets/svg/close.svg';
import * as S from '@/pages/store/_components/DetailFilter/Drawer.style';

import OptionSection from './OptionSection';

const RightDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(isOpen);
    };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <S.FilterButton onClick={toggleDrawer(true)}>상세 필터</S.FilterButton>

      <S.DrawerContainer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <S.DrawerHeader>
          <S.DrawerTitle>상세 필터</S.DrawerTitle>
          <S.CloseButton
            src={CloseIcon}
            alt="닫힘 버튼"
            width={24}
            height={24}
            onClick={toggleDrawer(false)}
          />
        </S.DrawerHeader>
        <OptionSection />
        <S.DrawerFooter>
          <S.ResetButton>초기화</S.ResetButton>
          <S.ApplyButton>적용하기</S.ApplyButton>
        </S.DrawerFooter>
      </S.DrawerContainer>
    </>
  );
};

export default RightDrawer;
