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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Product from './Product/Product';

export function TabsDemo() {
  return (
    <Tabs
      defaultValue='account'
      className='w-[400px] h-[1000px] flex justify-center items-center flex-col'
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='product'>Information</TabsTrigger>
        <TabsTrigger value='password'>Payment</TabsTrigger>
      </TabsList>
      <Product />
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              {/* Change your password here. After saving, you'll be logged out. */}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='current'>Current password</Label>
              <Input id='current' type='password' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>New password</Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
