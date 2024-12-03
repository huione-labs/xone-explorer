import { Box, IconButton, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import Popover from 'ui/shared/chakra/Popover';
import IconSvg from 'ui/shared/IconSvg';

import SettingsAddressFormat from './SettingsAddressFormat';
import SettingsColorTheme from './SettingsColorTheme';
import SettingsIdentIcon from './SettingsIdentIcon';

const Settings = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover placement="bottom-start" trigger="click" isOpen={ isOpen } onClose={ onClose }>
      <PopoverTrigger>
        <Box display="inline-block" p="2">
          <IconButton
            variant="simple"
            colorScheme="blue"
            aria-label="User settings"
            icon={ <IconSvg name="menus_point" boxSize={ 5 }/> }
            boxSize={ 5 }
            onClick={ onToggle }
          />
          { /* <IconButton
            display={{ lg: 'inline-block' }}
            variant="simple"
            colorScheme="blue"
            aria-label="User settings"
            icon={ <IconSvg name="menus_point" boxSize={ 5 }/> }
            p="1px"
            boxSize={ 5 }
            onClick={ onToggle }
          /> */ }
        </Box>
      </PopoverTrigger>
      <PopoverContent overflowY="hidden" w="auto" fontSize="sm">
        <PopoverBody boxShadow="2xl" p={ 4 }>
          <SettingsColorTheme onSelect={ onClose }/>
          <Box borderColor="divider" borderWidth="1px" my={ 3 }/>
          <SettingsIdentIcon/>
          <SettingsAddressFormat/>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(Settings);
