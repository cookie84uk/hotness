export const hookFormCodeString = `import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <button type="submit">Submit</button>
    </form>
  );
}`;
