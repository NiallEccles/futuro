import { useDisclosure } from '@mantine/hooks';
import { Drawer, TextInput, Group, Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

export function CreateEvent() {
  const [opened, { open, close }] = useDisclosure(true);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      date: '',
      termsOfService: false,
    },

    validate: {
      title: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return(
    <Drawer title={<span className='font-bold'>New Event</span>} opened={opened} onClose={close} position='bottom'
            offset={8} radius="md">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Title"
          key={form.key('title')}
          {...form.getInputProps('title')}
        />
        <DateInput
          label="Date"
          key={form.key('date')}
          {...form.getInputProps('date')}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Drawer>
)
}

export default CreateEvent;