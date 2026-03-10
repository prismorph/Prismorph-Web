import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Prismorph - Transform Your Photos with AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #0a0a14 100%)",
          position: "relative",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Prismorph
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            color: "white",
            fontWeight: "600",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Transform Your Photos with AI
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "800px",
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          50+ AI-powered filters that turn ordinary photos into stunning art
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          {["Cyberpunk", "Oil Painting", "Anime", "Watercolor"].map((filter) => (
            <div
              key={filter}
              style={{
                padding: "12px 24px",
                borderRadius: "30px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "18px",
              }}
            >
              {filter}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
