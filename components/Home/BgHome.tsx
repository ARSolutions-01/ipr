import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

export function HomeBg() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden items-center justify-center bg-black antialiased">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      {/* Flowing Gradient Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-2xl rotate-45" />
      </div>

      {/* Grid Overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-20",
          "[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 md:pt-0">
        <div className="relative rounded-3xl p-8 md:p-12">
          {/* Content */}
          <div className="relative text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text leading-tight tracking-tight drop-shadow-2xl">
              IPR GUARDIANS
              <br />
              <span className="text-3xl md:text-6xl font-semibold text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text block mt-2">
                IP Guardians to the World
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              In today's competitive landscape, your intellectual property is
              your most valuable asset. Our firm specializes in providing
              comprehensive legal solutions to safeguard your innovations,
              creations, and brand identity.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <Button
                variant="ghost"
                className="bg-white text-black hover:bg-gray-200 hover:text-black transition-colors duration-300 text-lg font-medium px-8 py-4 rounded-xl shadow-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Gradient Overlays */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent" />
    </div>
  );
}
