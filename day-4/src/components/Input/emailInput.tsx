import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function EmailInputWithLabel(props) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input
        type='email'
        id='email'
        placeholder='Email'
        {...props.register('email')}
      />
      {props.errors.email?.message && (
        <span className='text-red-500'>{props.errors.email?.message}</span>
      )}
    </div>
  );
}
