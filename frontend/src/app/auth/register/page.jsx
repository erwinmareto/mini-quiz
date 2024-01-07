import AuthPage from "@/components/pages/Auth";

export default function Auth() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <AuthPage isRegister={true} />
    </section>
  );
}