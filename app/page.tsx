export default function Home() {
  return (
    <main
      style={{
        padding: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ maxWidth: 540 }}>
        <h1
          style={{
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: -8.4,
            lineHeight: 1,
            color: "var(--fg-primary)",
          }}
        >
          333 Labs
        </h1>

        <div
          style={{
            marginTop: 88,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <p
            style={{
              fontSize: 17,
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: -0.068,
              color: "var(--fg-secondary)",
            }}
          >
            333 Labs is a design studio focused on crafting delightful products
            &amp; interfaces.
          </p>
          <p
            style={{
              fontSize: 17,
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: -0.068,
              color: "var(--fg-secondary)",
            }}
          >
            You bring us in when you need a design partner who thinks in
            systems.
          </p>
          <p
            style={{
              fontSize: 17,
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: -0.068,
              color: "var(--fg-tertiary)",
            }}
          >
            Based in Dubai — led by Kunj Parekh.{" "}
            <a
              href="mailto:hi@kunj.live"
              style={{
                color: "var(--fg-tertiary)",
                textDecoration: "none",
              }}
            >
              hi@kunj.live
            </a>
          </p>
        </div>

        <div style={{ marginTop: 88 }}>
          <p
            style={{
              fontSize: 13,
              color: "var(--fg-tertiary)",
              marginBottom: 16,
            }}
          >
            Past work
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Luma iOS", href: "#" },
              { label: "Luma web", href: "#" },
              { label: "Glow wallet", href: "#" },
              { label: "Daily", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--fg-secondary)",
                  textDecoration: "none",
                }}
              >
                {item.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
