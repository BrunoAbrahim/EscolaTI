import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex min-h-screen">
      <LeftPanel
        tagline="Crie seu estilo. Defina sua identidade."
        sub="Junte-se a milhares de pessoas que já encontraram o look perfeito com a Vitryne."
      />
      <div className="flex w-full flex-col items-center justify-center bg-white px-10 py-12 lg:w-1/2 lg:px-20">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex justify-center lg:hidden">
            <span className="text-2xl font-black tracking-[0.2em] text-purple-700">
              VITRYNE
            </span>
          </div>

          <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-900">
            Olá, bem-vindo
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Estamos felizes em ter você aqui! Falta pouco para ter seu novo
            look.
          </p>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Marina Sena"
                className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600">
                CNPJ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="00.000.000/0000-00"
                maxLength={18}
                className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="marinasena@email.com"
                className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600">
                Senha <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 w-full rounded-lg border border-gray-200 px-4 pr-11 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600">
                Confirme sua senha <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 w-full rounded-lg border border-gray-200 px-4 pr-11 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <EyeIcon open={showConfirm} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-purple-600 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Criar conta
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Já possuo uma conta.{" "}
            <Link
              href="/login"
              className="font-medium text-purple-600 hover:underline"
            >
              Entrar
            </Link>
          </p>

          <Divider />

          <GoogleButton label="Crie sua conta com o Google" />
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

      <span className="relative z-10 text-3xl font-black tracking-[0.2em] text-white">
        VITRYNE
      </span>

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

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
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
