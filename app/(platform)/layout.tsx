import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider localization={jaJP}>{children}</ClerkProvider>;
};

export default PlatformLayout;
