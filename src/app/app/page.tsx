"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Platform = "ios" | "android" | "desktop";

const APP_CONFIG = {
  android: {
    packageName: "com.prismorph.ai",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.prismorph.ai",
    intentUrl: "intent://prismorph.com/#Intent;scheme=https;package=com.prismorph.ai;end",
  },
  ios: {
    appStoreUrl: "https://apps.apple.com/app/prismorph/id0000000000", // Replace with actual App Store ID
    universalLink: "prismorph://",
  },
};

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "desktop";

  const userAgent = navigator.userAgent || navigator.vendor;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "ios";
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return "android";
  }

  return "desktop";
}

export default function AppRedirectPage() {
  const [platform, setPlatform] = useState<Platform>("desktop");
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);

    // Attempt to open the app or redirect to store
    if (detectedPlatform === "android") {
      // Try to open the app using intent, fallback to Play Store
      window.location.href = APP_CONFIG.android.intentUrl;

      // Fallback to Play Store after a delay
      setTimeout(() => {
        setIsRedirecting(false);
      }, 2500);
    } else if (detectedPlatform === "ios") {
      // Try to open the app using universal link
      window.location.href = APP_CONFIG.ios.universalLink;

      // Fallback to App Store after a delay
      setTimeout(() => {
        window.location.href = APP_CONFIG.ios.appStoreUrl;
      }, 1500);

      setTimeout(() => {
        setIsRedirecting(false);
      }, 2500);
    } else {
      // Desktop - show download options
      setIsRedirecting(false);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
            <svg
              className="w-9 h-9 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <span className="text-3xl font-bold text-gradient">Prismorph</span>
        </div>

        {isRedirecting ? (
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center justify-center mb-6">
              <svg
                className="animate-spin w-12 h-12 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">
              Opening Prismorph...
            </h1>
            <p className="text-gray-400">
              {platform === "android" && "Redirecting to the app or Google Play Store..."}
              {platform === "ios" && "Redirecting to the app or App Store..."}
              {platform === "desktop" && "Loading..."}
            </p>
          </div>
        ) : (
          <div className="glass rounded-3xl p-8">
            <h1 className="text-2xl font-bold text-white mb-3">
              Get Prismorph
            </h1>
            <p className="text-gray-400 mb-8">
              Transform your photos into stunning art with AI-powered filters.
            </p>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* App Store */}
              <a
                href={APP_CONFIG.ios.appStoreUrl}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-black border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02]"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Download on the</div>
                  <div className="text-white font-semibold text-lg">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href={APP_CONFIG.android.playStoreUrl}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-black border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02]"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Get it on</div>
                  <div className="text-white font-semibold text-lg">Google Play</div>
                </div>
              </a>
            </div>

            {/* Manual Download Links */}
            {platform !== "desktop" && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-500 text-sm mb-3">App not opening?</p>
                {platform === "android" && (
                  <a
                    href={APP_CONFIG.android.playStoreUrl}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                  >
                    Open Google Play Store
                  </a>
                )}
                {platform === "ios" && (
                  <a
                    href={APP_CONFIG.ios.appStoreUrl}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                  >
                    Open App Store
                  </a>
                )}
              </div>
            )}

            {/* Back to Home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-8 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Homepage</span>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
