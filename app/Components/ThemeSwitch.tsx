'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { GrMoon, GrSun } from "react-icons/gr";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-8 h-8"></div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center text-white">
      {resolvedTheme === 'dark' ? (
        <GrSun
          className="text-2xl cursor-pointer hover:text-yellow-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <GrMoon
          className="text-2xl cursor-pointer hover:text-gray-600"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}
