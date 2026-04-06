import Link from "next/link";

export default function Onboarding() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel
        tagline="Seu novo look começa aqui."
        sub="Conecte-se com os melhores estilistas e monte o visual perfeito para cada momento."
      />
      <div className="flex w-full flex-col items-center justify-center bg-white px-10 lg:w-1/2 lg:px-20">
        <div className="w-full max-w-sm">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-900">
            Bem-vindo
          </h1>
          <p className="mb-10 text-sm text-gray-500">
            Acesse sua conta ou crie uma nova para começar.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="flex h-12 w-full items-center justify-center rounded-lg bg-purple-600 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Já tenho uma conta
            </Link>
            <Link
              href="/register"
              className="flex h-12 w-full items-center justify-center rounded-lg border border-purple-600 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
            >
              Criar nova conta
            </Link>
          </div>
          <Divider />
          <GoogleButton label="Acesse com o Google" />
          <p className="mt-10 text-center text-xs text-gray-400">
            Ao continuar, você concorda com nossos{" "}
            <span className="cursor-pointer underline">Termos de uso</span> e{" "}
            <span className="cursor-pointer underline">
              Política de privacidade
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function LeftPanel({ tagline, sub }: { tagline: string; sub: string }) {
  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 lg:flex lg:w-1/2 lg:flex-col lg:items-start lg:justify-between lg:p-14">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-purple-500 opacity-20" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-purple-900 opacity-30" />
      <Logo />
      <div className="relative z-10">
        <p className="mb-4 text-4xl font-bold leading-tight text-white">
          {tagline}
        </p>
        <p className="text-base leading-relaxed text-purple-200">{sub}</p>
      </div>
      <p className="relative z-10 text-xs text-purple-300">
        © {new Date().getFullYear()} Vitryne. Todos os direitos reservados.
      </p>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative z-10 flex items-center gap-2">
      <span className="text-3xl font-black tracking-[0.2em] text-white">
        VITRYNE
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="my-7 flex items-center gap-3">
      <div className="h-px flex-1 bg-gray-200" />
      <span className="text-xs text-gray-400">ou</span>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function GoogleButton({ label }: { label: string }) {
  return (
    <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50">
      <GoogleIcon />
      {label}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.8 6C12.3 13 17.7 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4 6.9-10 6.9-17z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.9-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.6 2.6 10.9l7.8-6.2z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.7 2.2-6.3 0-11.7-4.2-13.6-10l-7.8 6C6.6 42.6 14.6 48 24 48z"
      />
    </svg>
  );
}
