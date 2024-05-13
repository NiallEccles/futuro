import { Button } from '@mantine/core';
import CreateEvent from './components/create-event/create-event';
import { useDisclosure } from '@mantine/hooks';
import MainNav from './components/main-nav/main-nav';

export function App() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <MainNav opened={opened} open={open} />
      <div className="px-5">
        <Button variant="filled" size="md" fullWidth onClick={() => opened ? close() : open()}>Create Event</Button>
      </div>
      <CreateEvent opened={opened} open={open} close={close} />
    </div>
  );
}

export default App;
