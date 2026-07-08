"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(
    items.find((item) => item.defaultOpen)?.id || items[0]?.id
  );

  return (
    <div className="divide-y divide-white/15 border-y border-white/15">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left sm:py-6"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-title text-lg font-bold text-white sm:text-xl">
                {item.title}
              </span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 shrink-0 text-white" />
              ) : (
                <ChevronDown className="h-5 w-5 shrink-0 text-white" />
              )}
            </button>

            {isOpen && item.items && (
              <div className="pb-6">
                <ul className="space-y-0">
                  {item.items.map((line, index) => (
                    <li
                      key={line}
                      className={`py-4 font-body text-sm text-white/85 sm:text-base ${
                        index < item.items.length - 1 ? "border-b border-white/15" : ""
                      }`}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
