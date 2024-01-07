import ProjectContextProvider from "@/utils/projectContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ProjectContextProvider>{children}</ProjectContextProvider>
      </body>
    </html>
  );
}
