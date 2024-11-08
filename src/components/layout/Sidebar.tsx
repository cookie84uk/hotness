import { themeConfig } from '../../constants';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box 
} from '@mui/material';

export const Sidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: themeConfig.dark.paper
        }
      }}
    >
      {/* Your sidebar content */}
    </Drawer>
  );
};
