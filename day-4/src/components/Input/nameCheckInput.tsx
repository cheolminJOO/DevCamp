import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function NicknameCheck(props) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='Nickname Check'>Nickname Check</Label>
      <Input
        id='Nickname Check'
        placeholder='Nickname Check'
        {...props.register('nameCheck')}
      />
      {props.errors.nameCheck?.message && (
        <span className='text-red-500'>{props.errors.nameCheck?.message}</span>
      )}
    </div>
  );
}
