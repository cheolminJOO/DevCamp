import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react';
import SelectBar from '../select';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';
import { useState } from 'react';
import { zip } from 'lodash';
import MessageSelectBar from '../Select/Message';

const Product = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [address, setAddress] = useState('');
  const [zipcode, setZipcod] = useState('');

  const onClickAddressBtn = () => {
    setIsClicked((prev) => !prev);
  };

  const onChangeAddress = (data: any) => {
    setAddress(`${data.zonecode}, ${data.address} `);
    setZipcod(data.zonecode);
    setIsClicked(false);
  };

  return (
    <div>
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
              <Image src='/sun.png' alt='해' width={150} height={150} />
              <div>
                <Label htmlFor='product-name'>상품명</Label>
                <Input
                  id='product-name'
                  readOnly
                  value={'반짝반짝 웃는 태양 인형'}
                />
                <Label htmlFor='select'>색상</Label>
                <SelectBar />
                <Label htmlFor='price'>가격</Label>
                <Input id='price' readOnly value={'20,000원'} />
              </div>
            </div>
            <div className='mt-[70px]'>
              <Button
                className='hover:bg-orange-300 hover:text-cyan-700 font-bold'
                onClick={onClickAddressBtn}
              >
                주소찾기
              </Button>
              {isClicked && (
                <Modal
                  okText='확인'
                  cancelText='취소'
                  visible={isClicked}
                  onOk={onClickAddressBtn}
                  onCancel={onClickAddressBtn}
                  okButtonProps={{ className: 'custom-ok-button-class' }}
                >
                  <DaumPostcode onComplete={onChangeAddress}></DaumPostcode>
                </Modal>
              )}
              <div className='space-y-1'>
                <Label htmlFor='username'>Address</Label>
                <Input
                  id='username'
                  readOnly
                  placeholder='주소를 입력해주세요'
                  value={address}
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
    </div>
  );
};

export default Product;
