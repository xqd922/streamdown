interface CodeBlockHeaderProps {
  language: string;
}

export const CodeBlockHeader = ({ language }: CodeBlockHeaderProps) => (
  <div
    className="flex h-8 items-center text-muted-foreground text-xs"
    data-language={language}
    data-streamdown="code-block-header"
  >
    <span className="ml-1 font-mono lowercase">{language}</span>
  </div>
);
