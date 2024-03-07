import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function PWInputWithLabel() {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='password'>Password</Label>
      <Input type='password' id='password' placeholder='Password' />
    </div>
  );
}
