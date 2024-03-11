import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsDemo } from '../tapeDemo';

const Payment = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <TabsDemo />
    </div>
  );
};

export default Payment;
