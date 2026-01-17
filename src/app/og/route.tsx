import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Carneiro.dev";
  const [mainTitle] = title.split(" - ");

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage: "linear-gradient(to bottom right, #111111, #000000)",
            backgroundColor: "#000000",
            fontFamily: "'Inter', sans-serif",
            position: "relative",
          }}
        >
          {/* Subtle Ambient Background Glows */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "800px",
              height: "800px",
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
            }}
          />
           <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "-10%",
              width: "800px",
              height: "800px",
              background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
            }}
          />

          {/* Card Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "40px",
              maxWidth: "900px",
            }}
          >
            {/* Main Title - Moved to Top */}
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "40px",
                textWrap: "balance",
                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              {mainTitle}
            </div>
           
             {/* Brand Pill - Moved Below and Scaled Down */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "100px",
                padding: "16px 48px", // Reduced from 20/60
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <span
                style={{
                  color: "#EDEDED",
                  fontSize: 40, // Reduced from 50px (Visual spacing from 64px)
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  textTransform: "lowercase",
                }}
              >
                carneiro.dev
              </span>
            </div>

          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response(`Failed to create OG Image - ${error}`, {
      status: 500,
    });
  }
}
