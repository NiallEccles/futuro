import { ActionIcon } from '@mantine/core';
import { Plus } from 'lucide-react';

export function MainNav() {
  return (
    <nav className="flex flex-row justify-between items-center m-3">
      <div></div>
      <h1 className="font-bold">futuro</h1>
      <ActionIcon variant="transparent" aria-label="Settings" size="xl">
        <Plus />
      </ActionIcon>
    </nav>
  );
}

export default MainNav;
