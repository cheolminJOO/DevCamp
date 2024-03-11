import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import React from 'react';

const SelectBar = ({ field }) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Color' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='light'>Red</SelectItem>
        <SelectItem value='dark'>Blue</SelectItem>
        <SelectItem value='system'>Green</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectBar;
