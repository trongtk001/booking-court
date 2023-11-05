import RegisterForm from './register-form';

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const className = {
    container: 'w-[366px]',
    title: 'w-[350px] h-[82px] font-bold text-6xl leading-[82px] mb-1',
  };

  return (
    <div className={className.container}>
      <h1 className={className.title}>Register</h1>
      <RegisterForm />
    </div>
  );
}
