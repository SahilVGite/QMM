import { Fragment } from "react";

/**
 * Safely renders heading markup from data strings.
 * Allowed tags: <br />, <br>, <span>...</span>
 *
 * Weights (all headings):
 * - default text → extrabold
 * - <span> text → medium
 */
export default function RichHeading({
  html = "",
  className = "",
  as: Tag = "span",
}) {
  const parts = parseRichHeading(String(html));

  return (
    <Tag className={className}>
      {parts.map((part, index) => {
        if (part.type === "br") {
          return <br key={`br-${index}`} />;
        }

        if (part.type === "span") {
          return (
            <span key={`span-${index}`} className="font-medium">
              {part.value}
            </span>
          );
        }

        return <Fragment key={`text-${index}`}>{part.value}</Fragment>;
      })}
    </Tag>
  );
}

function parseRichHeading(input) {
  const tokens = [];
  const pattern = /<\s*br\s*\/?\s*>|<\s*span\s*>|<\s*\/\s*span\s*>/gi;
  let lastIndex = 0;
  let inSpan = false;
  let match;

  while ((match = pattern.exec(input)) !== null) {
    const text = input.slice(lastIndex, match.index);
    if (text) {
      tokens.push({ type: inSpan ? "span" : "text", value: text });
    }

    const tag = match[0].toLowerCase().replace(/\s+/g, "");

    if (tag.startsWith("<br")) {
      tokens.push({ type: "br" });
    } else if (tag === "<span>") {
      inSpan = true;
    } else if (tag === "</span>") {
      inSpan = false;
    }

    lastIndex = pattern.lastIndex;
  }

  const remaining = input.slice(lastIndex);
  if (remaining) {
    tokens.push({ type: inSpan ? "span" : "text", value: remaining });
  }

  return tokens;
}

export function stripRichHeading(html = "") {
  return String(html)
    .replace(/<\s*br\s*\/?\s*>/gi, " ")
    .replace(/<\/?span>/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}
