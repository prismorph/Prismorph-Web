import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/data/blog";

export const runtime = "edge";

export const alt = "Prismorph Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title || "Prismorph Blog";
  const category = post?.category || "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background:
            "linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #0a0a14 100%)",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo and brand */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="30"
              height="30"
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
              fontSize: "28px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Prismorph Blog
          </span>
        </div>

        {/* Category badge */}
        <div
          style={{
            display: "flex",
            padding: "10px 24px",
            borderRadius: "30px",
            background: "rgba(139, 92, 246, 0.3)",
            border: "1px solid rgba(139, 92, 246, 0.5)",
            color: "#c4b5fd",
            fontSize: "20px",
            marginBottom: "24px",
          }}
        >
          {category}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "white",
            lineHeight: "1.2",
            maxWidth: "900px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </div>

        {/* Read time and date */}
        {post && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "30px",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "22px",
            }}
          >
            <span>{post.readTime} min read</span>
            <span>|</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
