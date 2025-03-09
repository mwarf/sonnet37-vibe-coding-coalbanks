import React, { useState } from 'react';
import { Check, Copy, FileCode } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  highlightLines?: number[];
}

export function CodeBlock({ code, language, filename, highlightLines = [] }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-muted/80">
      {/* File header with language and filename */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
        <div className="flex items-center gap-2">
          <FileCode size={16} className="text-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground">
            {filename || language}
          </span>
        </div>
        <button 
          onClick={copyToClipboard}
          className="p-1.5 rounded-md text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground transition-colors"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      
      {/* Code content - actual syntax highlighting is handled by Shiki via MDX integration */}
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

// For use in MDX files
export function CodeBlockWrapper(props: any) {
  const { children, className = '', ...rest } = props;
  const language = className.replace(/language-/, '');
  
  if (!language) {
    return <pre {...rest}><code>{children}</code></pre>;
  }
  
  return (
    <CodeBlock
      code={children}
      language={language}
      {...rest}
    />
  );
}
