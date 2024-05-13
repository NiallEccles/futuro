import { useState } from 'react';
import { Button } from '@mantine/core';
import CreateEvent from './components/create-event/create-event';
import { useDisclosure } from '@mantine/hooks';

export function App() {
  const [value, setValue] = useState<Date | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Button variant="filled" size="md" onClick={() => opened ? close() : open()}>Create Event</Button>
      <CreateEvent opened={opened} open={open} close={close} />
    </div>
  );
}

export default App;
