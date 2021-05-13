import { Field } from 'payload/types';

export type Type = 'none' | 'light' | 'dark';

const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Background Color',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Light',
      value: 'light',
    },
    {
      label: 'Dark',
      value: 'dark',
    }
  ]
};

export default backgroundColor;
