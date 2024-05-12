import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import CreateEvent from './components/create-event/create-event';

export function App() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div>
      <DatePicker allowDeselect value={value} onChange={setValue} />;
      <CreateEvent/>
    </div>
  );
}

export default App;
