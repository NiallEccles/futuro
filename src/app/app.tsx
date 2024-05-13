import { Button } from '@mantine/core';
import CreateEvent from './components/create-event/create-event';
import { useDisclosure } from '@mantine/hooks';
import MainNav from './components/main-nav/main-nav';

export function App() {
  const [createEventOpen, { open: openCreateEvent, close: closeCreateEvent }] = useDisclosure(false);
  return (
    <div>
      <MainNav opened={createEventOpen} open={openCreateEvent} />
      <div className="px-5">
        <Button variant="filled" size="md" fullWidth
                onClick={() => createEventOpen ? closeCreateEvent() : openCreateEvent()}>Create
          Event</Button>
      </div>
      <CreateEvent opened={createEventOpen} open={openCreateEvent} close={closeCreateEvent} />
    </div>
  );
}

export default App;
