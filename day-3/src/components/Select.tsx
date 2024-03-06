import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectDemo(props) {
  return (
    <Select>
      <SelectTrigger {...props.register('role')} className='w-full ml-2'>
        <SelectValue placeholder='역할을 선택해주세요' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='관리자'>관리자</SelectItem>
          <SelectItem value='일반 사용자'>일반 사용자</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
