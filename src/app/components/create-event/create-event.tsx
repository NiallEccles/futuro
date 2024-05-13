import { useDisclosure } from '@mantine/hooks';
import { Button, ColorInput, Drawer, Group, Space, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

export function CreateEvent() {
  const [opened, { open, close }] = useDisclosure(true);

  interface FormValues {
    title: string;
    date: Date | null;
    file: File[] | null,
    colour: string;
    termsOfService: boolean;
  }

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      date: null,
      file: null,
      colour: '',
      termsOfService: false
    }
  });

  return (
    <Drawer title={
      <span
        className="font-bold">New Event</span>} opened={opened} onClose={close} position="bottom" offset={8} radius="md"
            size="lg">
      <form
        onSubmit={form.onSubmit((values) => console.log(values))
        }>
        <TextInput
          withAsterisk
          label="Title"
          size="md"
          key={form.key('title')}
          {...form.getInputProps('title')}
        />
        <Space h="sm" />
        <DateInput
          label="Date"
          size="md"
          key={form.key('date')}
          {...form.getInputProps('date')}

        />
        <Space h="sm" />
        <ColorInput
          label="Colour"
          format="hex"
          size="md"
          closeOnColorSwatchClick
          withEyeDropper={false}
          key={form.key('colour')}
          {...form.getInputProps('colour')}
          swatches={
            ['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
        />
        <Group justify="flex-end" mt="md">
          <Button size="md" type="submit">Submit</Button>
        </Group>
      </form>
    </Drawer>
  );
}

export default CreateEvent;