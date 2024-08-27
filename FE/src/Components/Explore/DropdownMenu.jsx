import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';


const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative">
      <Button
        aria-controls={open ? 'browse-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-black font-bold"
        endIcon={<ArrowDropDown />}
      >
        Browse
      </Button>
      <Menu
        id="browse-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'browse-button',
        }}
        PaperProps={{
          style: {
            width: '800px',
          },
          className: "p-4",
        }}
        className="z-50"
      >
        <div className="flex ">
          <div className="mr-5 flex-2 ">
            <h4 className="font-bold text-lg mb-2">BROWSE</h4>
            <div className="grid grid-cols-3 gap-5">
              {['Originals', 'Adventure', 'Fanfiction', 'Horror', 'Mystery', 'Paranormal', 'Science Fiction', 'Thriller', 'Editor\'s Picks', 'Contemporary Lit', 'Fantasy', 'Humor', 'New Adult', 'Poetry', 'Short Story', 'Werewolf', 'The Wattys', 'Diverse Lit', 'Historical Fiction', 'LGBTQ+', 'Non-Fiction', 'Romance', 'Teen Fiction'].map((item) => (
            
                <MenuItem key={item} onClick={handleClose} className="p-1 hover:bg-gray-100  hover:rounded-lg">
                  {item}
                </MenuItem>
              ))}
            </div>
          </div>
          <div className=" bg-gray-200   flex-1 p-2">
            <h4 className="font-bold text-lg mb-2 p-2">WATTPAD PICKS</h4>
            <div className="grid grid-cols-1">
              {['Reading Radar', 'Feuds & forbidden love', 'Billionaire Romances', 'Wattpad Studios Hits', 'Premium Picks'].map((item) => (
                <MenuItem key={item} onClick={handleClose} className="p-1 hover:bg-gray-100">
                  {item}
                </MenuItem>
              ))}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
