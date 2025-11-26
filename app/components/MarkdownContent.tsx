import React from "react";

interface MarkdownContentProps {
  content?: string;
}

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-2xl font-medium mt-8 mb-4 text-foreground" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-xl font-medium mt-6 mb-3 text-foreground" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-lg font-medium mt-4 mb-2 text-foreground" {...props} />
          ),
          p: ({ ...props }) => <p className="mb-1 font-medium text-foreground/80 leading-7 [&_strong]:text-sky-500 [&_strong]:font-medium" {...props} />,
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside mb-4 text-foreground/80" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-inside mb-4 text-foreground/80" {...props} />
          ),
          li: ({ ...props }) => <li className="text-sm font-medium text-foreground/80 [&_strong]:text-sky-500 [&_strong]:font-medium" {...props} />,
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <code className={className} {...props}>
                {children}
              </code>
            ) : (
              <code className="bg-primary/20 px-2 py-1 rounded text-sm text-foreground" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ ...props }) => (
            <pre className="bg-primary/10 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
          ),
          a: ({ ...props }) => (
            <a
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {content || "No detailed information available for this project."}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
