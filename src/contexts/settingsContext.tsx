'use client';

import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Mode = 'light' | 'dark' | 'system';

export interface ThemeStyles {
  light?: Record<string, string | number>;
  dark?: Record<string, string | number>;
}

export interface ThemeSettings {
  styles?: ThemeStyles;
}

export interface Settings {
  mode: Mode;
  theme: ThemeSettings;
}

export interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Settings) => void;
}

const defaultSettings: Settings = {
  mode: 'system',
  theme: {
    styles: {
      light: {},
      dark: {},
    },
  },
};

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('app-settings');
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch {
        // Failed to parse stored settings, use defaults
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
