import AuthForm from "@/components/parts/Forms/AuthForm";

const AuthPage = ({isRegister}) => {
  return (
    <div className="flex flex-col items-center gap-5 bg-emerald-300 p-10 rounded-xl w-2/5">
      <AuthForm isRegister={isRegister} />
    </div>
  );
};

export default AuthPage;
