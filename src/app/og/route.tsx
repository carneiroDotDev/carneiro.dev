import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Carneiro.dev";

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
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 240,
                height: 24,
                background: "black",
                color: "white",
                padding: "2px 25px 2px 2px",
              }}
            >
              Luiz Carneiro
            </span>
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
              }}
            >
              carneiro.dev
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 50px",
              margin: "0 42px",
              fontSize: 40,
              width: "auto",
              maxWidth: 550,
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              lineHeight: 1.4,
            }}
          >
            {title}
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
