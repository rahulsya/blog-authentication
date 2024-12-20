import Image from "next/image";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 h-[600px] shadow-xl bg-white rounded-2xl">
        <div className="flex w-full h-full gap-4">
          <div className="w-[800px] p-4">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={"/images/login_bg.jpg"}
              width={640}
              height={1137}
              alt="auth_bg"
            />
          </div>
          <div className="w-full h-full py-4 flex justify-center items-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
