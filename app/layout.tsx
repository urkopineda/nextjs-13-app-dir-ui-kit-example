import Providers from "@/app/Providers";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => (
  <html>
    <head />
    <Providers>
      <body>{children}</body>
    </Providers>
  </html>
);

export default Layout;
