import { ActionIcon, Drawer } from '@mantine/core';
import { Menu, Plus } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';

export function MainNav({ opened, open }: { opened: boolean, open: () => void }) {
  const [navDrawerOpen, { open: openNavDrawer, close: closeNavDrawer }] = useDisclosure(false);
  return (
    <nav className="flex flex-row justify-between items-center m-3">
      <ActionIcon variant="transparent" aria-label="Open Navigation Drawer" size="xl"
                  onClick={() => navDrawerOpen ? null : openNavDrawer()}>
        <Menu />
      </ActionIcon>
      <Drawer opened={navDrawerOpen} onClose={closeNavDrawer} title="Authentication">
        {/* Drawer content */}
      </Drawer>
      <h1 className="font-bold">futuro</h1>
      <ActionIcon variant="transparent" aria-label="Create new event" size="xl" onClick={() => opened ? null : open()}>
        <Plus />
      </ActionIcon>
    </nav>
  );
}

export default MainNav;
