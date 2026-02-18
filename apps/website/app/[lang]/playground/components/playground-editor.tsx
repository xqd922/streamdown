"use client";

import { useState } from "react";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const defaultMarkdown = `# Hello, world

Some **bold**, *italic*, and ~~strikethrough~~ text.

## A list

- First item
- Second item
  - Nested
- Third item

## A table

| Name | Flavor |
|------|--------|
| Apple | Sweet |
| Lemon | Sour |

## Some code

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> A blockquote for good measure.
`;

const PlaygroundEditor = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [mode, setMode] = useState<"static" | "streaming">("static");

  return (
    <div className="flex h-[calc(100dvh-65px-75px)] flex-col overflow-hidden">
      <header className="flex shrink-0 items-center justify-between border-b px-6 py-3">
        <h1 className="font-semibold text-lg tracking-tight">
          Streamdown Playground
        </h1>
        <div className="flex items-center gap-3">
          <Select
            onValueChange={(value) => setMode(value as "static" | "streaming")}
            value={mode}
          >
            <SelectTrigger size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="static">Static</SelectItem>
              <SelectItem value="streaming">Streaming</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => setMarkdown("")} size="sm" variant="outline">
            Clear
          </Button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <div className="flex w-1/2 flex-col border-r">
          <div className="flex shrink-0 items-center border-b bg-muted/50 px-4 py-2">
            <span className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
              Markdown Input
            </span>
          </div>
          <Textarea
            className="flex-1 resize-none rounded-none border-0 font-mono text-sm leading-relaxed shadow-none focus-visible:ring-0"
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
            spellCheck={false}
            value={markdown}
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="flex shrink-0 items-center border-b bg-muted/50 px-4 py-2">
            <span className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
              Streamdown Output
            </span>
          </div>
          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="mx-auto max-w-prose">
                <Streamdown mode={mode}>{markdown}</Streamdown>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export { PlaygroundEditor };
