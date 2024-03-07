import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface IProps {
  register: UseFormRegister<IProps>;
  errors: FieldErrors<IProps>;
}

export function Nickname(props: IProps) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='nickname'>Nickname</Label>
      <Input {...props.register('name')} id='nickname' placeholder='Nickname' />
      {props.errors.name?.message && (
        <span className='text-red-500'>{props.errors.name?.message}</span>
      )}
    </div>
  );
}
