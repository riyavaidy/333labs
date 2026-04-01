import { DubaiClock } from "./dubai-clock";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 395,
          width: "100%",
          padding: "0 24px",
        }}
      >
        <p className="text-body">333 Labs</p>

        <p className="text-secondary">
          We are a design studio crafting thoughtful products and playful
          interfaces. It&apos;s a team of two. We&apos;re married to each other,
          but not to ideas.
        </p>

        <p className="text-secondary">
          Kunj, founding designer at{" "}
          <a href="https://lu.ma/" target="_blank" rel="noopener noreferrer">
            Luma
          </a>{" "}
          who helped shape delightful events and hosting experience for millions.
          He has previously worked with{" "}
          <a
            href="https://share.google/EoHDeQMgWvq6ofGoI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linktree
          </a>
          ,{" "}
          <a
            href="https://share.google/bdAXqr83G1rxIyO6n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whop
          </a>
          ,{" "}
          <a
            href="https://josephsemrai.com/Ninja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ninja AI
          </a>{" "}
          &amp; Lancify.
        </p>

        <p className="text-secondary">
          And Riya, a former GP who quietly transitioned into design over the
          past year. Built{" "}
          <a
            href="https://capsulefeeds.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capsulefeeds
          </a>{" "}
          — a study tool for doctors as her first personal project.
        </p>

        <p className="text-secondary">
          That leaves room to eliminate what doesn&apos;t serve &amp; create
          something better. We enjoy the messy early stage of building when
          products are still uncertain and things need to be figured out.
        </p>

        <p className="text-secondary">
          During the week of naming the studio, mysteriously, 333 kept showing
          up multiple times.{" "}
          <span className="text-accent">
            It signals alignment and creative energy.
          </span>{" "}
          That was our sign.
        </p>

        <p className="text-secondary">
          Now that you&apos;ve seen it too, it&apos;s your sign of being in the
          right place. Say hi.
        </p>

        <DubaiClock />
      </div>
    </main>
  );
}
