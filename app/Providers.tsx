"use client";

import HvProvider from "@hitachivantara/uikit-react-core/dist/Provider";

type TProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: TProvidersProps) => (
  <HvProvider>{children}</HvProvider>
);

export default Providers;
