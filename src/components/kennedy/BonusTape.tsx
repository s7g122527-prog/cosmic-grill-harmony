import { Flame, Pizza, Sparkles, Star } from "lucide-react";

type Item = { label: string; Icon: typeof Flame };

const TOP: Item[] = [
  { label: "Crazy Deal · Malai Boti Platter Rs 200 Off", Icon: Flame },
  { label: "Crazy Deal · Second Large Pizza Half Price", Icon: Pizza },
];

const BOTTOM: Item[] = [
  { label: "Today's Bonus · Free Delivery Inside Narowal", Icon: Star },
  { label: "Limited Today · Seekh Kebab Combo", Icon: Sparkles },
];

function Row({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  return (
    <div className="tape-track" data-reverse={reverse ? "true" : undefined}>
      {[0, 1].map((copy) => (
        <div className="tape-row" key={copy} aria-hidden={copy === 1}>
          {items.map(({ label, Icon }, i) => (
            <span className="tape-item" key={`${copy}-${i}`}>
              <Icon className="tape-icon" aria-hidden="true" />
              <span>{label}</span>
              <span className="tape-dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function BonusTape() {
  return (
    <section
      className="tape-section relative z-20"
      aria-label="Today's bonus offers"
    >
      <div className="tape tape-gold" data-tilt="left">
        <Row items={TOP} />
      </div>
      <div className="tape tape-flame" data-tilt="right">
        <Row items={BOTTOM} reverse />
      </div>
    </section>
  );
}
