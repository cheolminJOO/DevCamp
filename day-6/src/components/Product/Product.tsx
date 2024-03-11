import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react';
import SelectBar from '../select';
import DaumPostcode from 'react-daum-postcode';
import { Modal, message } from 'antd';
import { useState } from 'react';
import MessageSelectBar from '../Select/Message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const Product = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [iAddress, setIAddress] = useState('');

  const onClickAddressBtn = () => {
    setIsClicked((prev) => !prev);
  };

  const onChangeAddress = (data: any) => {
    setIAddress(`${data.zonecode}, ${data.address} `);
    setIsClicked(false);
  };

  const formSchema = z
    .object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      count: z.string().min(1, { message: '수량을 선택하지 않았습니다' }),
      address: z.string(),
      color: z.string().min(1, { message: '색상을 선택하세요.' }),
    })
    .refine((data) => data.address === '', {
      message: '주소를 설정하세요',
      path: ['address'],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      count: '',
      address: '',
      color: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <TabsContent value='product'>
            <Card className='w-[600px] h-[700px]'>
              <CardHeader>
                <CardTitle>Product</CardTitle>
                <CardDescription>
                  {/* Change your password here. After saving, you'll be logged out. */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex justify-around'>
                  <Image src='/sun.png' alt='해' width={300} height={150} />
                  <div>
                    <Label htmlFor='product-name'>상품명</Label>
                    <Input
                      id='product-name'
                      readOnly
                      value={'반짝반짝 웃는 태양 인형'}
                    />
                    <Label htmlFor='select'>색상</Label>
                    <FormField
                      control={form.control}
                      name='color'
                      render={({ field }) => (
                        <FormItem>
                          <SelectBar field={field}></SelectBar>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Label htmlFor='price'>가격</Label>
                    <Input id='price' readOnly value={'20,000원'} />
                    <FormField
                      control={form.control}
                      name='count'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>수량</FormLabel>
                          <FormControl>
                            <Input
                              type='number'
                              placeholder='수량을 선택하세요'
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>수량을 선택하세요</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className='mt-[70px]'>
                  {isClicked && (
                    <Modal
                      okText='확인'
                      cancelText='취소'
                      open={isClicked}
                      onOk={onClickAddressBtn}
                      onCancel={onClickAddressBtn}
                      okButtonProps={{ className: 'custom-ok-button-class' }}
                    >
                      <DaumPostcode onComplete={onChangeAddress}></DaumPostcode>
                    </Modal>
                  )}
                  <div className='space-y-1'>
                    <div className='flex justify-between'>
                      <Label className='text-2xl font-bold' htmlFor='username'>
                        Address
                      </Label>
                      <Button
                        className='hover:bg-orange-300 hover:text-cyan-700 font-bold'
                        onClick={onClickAddressBtn}
                      >
                        주소찾기
                      </Button>
                    </div>
                    <Label htmlFor='address'>배송 주소</Label>
                    <FormField
                      control={form.control}
                      name='address'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id='address'
                              placeholder='주소를 입력해주세요'
                              {...field}
                              value={iAddress}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Label htmlFor='message'>배달원 분께 남길 메세지</Label>
                    <MessageSelectBar />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </form>
      </Form>
    </div>
  );
};

export default Product;
