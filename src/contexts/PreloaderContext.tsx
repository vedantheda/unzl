"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PreloaderContextType {
  isPreloaderActive: boolean;
  setIsPreloaderActive: (active: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isPreloaderActive, setIsPreloaderActive }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
}
