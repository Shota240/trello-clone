import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={jaJP}>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
