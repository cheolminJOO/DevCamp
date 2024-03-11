import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import React from 'react';

const MessageSelectBar = () => {
  return (
    <Select>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='메세지를 선택 해보세요 !' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='light'>부재 시 경비실에 맡겨주세요</SelectItem>
        <SelectItem value='dark'>집 앞에 놔둬주세요</SelectItem>
        <SelectItem value='system'>배송 전 전화 부탁드려요.</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MessageSelectBar;
