import LoadingLink from "@components/LoadingLink";

export default function RootLayout({ children }) {
  return (
    <main className="before:bg-auth before:absolute before:-z-20 after:-z-10 before:inset-0 before:bg-cover before:blur-2xl after:absolute after:inset-0 after:bg-black after:bg-opacity-50 min-h-[100vh] grid place-items-center">
      <div className="container">
        <div className="py-8 md:h-[880px] grid lg:grid-cols-[2fr_2fr] xl:grid-cols-[2fr_2.5fr] 2xl:grid-cols-[1.4fr_2.8fr]">
          <div className="relative bg-authPanel bg-[color:rgb(23,_23,_23)] rounded-tl-2xl rounded-bl-2xl p-10 sm:p-20">
            <div className="flex flex-col gap-10 items-center">
              <LoadingLink href="/">
                <img src="/assets/img/website-logo.svg" className="h-24 mr-3" alt="Enveus logo" />
              </LoadingLink>
              <h1 className="uppercase font-enveus text-6xl">Enveus</h1>
            </div>
            <div>
              {children}
            </div>
          </div>
          <div className="lg:flex hidden">
            <img src="/assets/img/bg-auth.jpeg" className="object-cover rounded-tr-2xl rounded-br-2xl" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
