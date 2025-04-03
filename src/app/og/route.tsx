import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Carneiro.dev";
  const [mainTitle, subTitle] = title.split(" - ");

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
            position: "relative",
            background: "linear-gradient(135deg, #DBDBDB, #A08963)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Colorful Circles */}
          <div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              background: "#706D54",
              borderRadius: "50%",
              top: 50,
              left: 100,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 200,
              height: 200,
              background: "#A08963",
              borderRadius: "50%",
              top: 300,
              left: 400,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              background: "#C9B194",
              borderRadius: "50%",
              top: 150,
              right: 150,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 150,
              height: 150,
              background: "#DBDBDB",
              borderRadius: "50%",
              top: 400,
              right: 300,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              background: "#706D54",
              borderRadius: "50%",
              top: 100,
              right: 50,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 180,
              height: 180,
              background: "#A08963",
              borderRadius: "50%",
              bottom: 100,
              left: 200,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 220,
              height: 220,
              background: "#C9B194",
              borderRadius: "50%",
              bottom: 50,
              right: 100,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 140,
              height: 140,
              background: "#DBDBDB",
              borderRadius: "50%",
              bottom: 200,
              left: 300,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 160,
              height: 160,
              background: "#706D54",
              borderRadius: "50%",
              top: 250,
              left: 250,
              zIndex: 0,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              padding: "20px",
              background: "rgba(0, 0, 0, 0.8)", // Higher opacity for better readability
              borderRadius: "16px",
            }}
          >
            {/* Name and Website */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  background: "black",
                  color: "white",
                  padding: "5px 15px",
                  borderRadius: "8px",
                }}
              >
                carneiro.dev
              </span>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.2,
                maxWidth: 800,
              }}
            >
              {mainTitle}
            </div>
            {subTitle && (
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  marginTop: 10,
                }}
              >
                {subTitle}
              </div>
            )}
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
