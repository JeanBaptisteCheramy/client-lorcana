import React from "react";

export default function Aside({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className="w-1/5 h-90vh bg-fourth py-4">
      <div className="flex flex-col items-center gap-4">
        {children}
      </div>  
    </aside>
)
}
