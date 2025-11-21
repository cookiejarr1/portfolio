"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavigationBar from "../../components/navigation/NavigationBar";
import Footer from "../../components/Footer";
import { projects } from "../../data/projects";
import { Card, CardBody, Button, Chip, Divider } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="text-foreground bg-background min-h-screen">
        <NavigationBar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button color="primary">Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="text-foreground bg-background min-h-screen">
      <NavigationBar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/projects">
          <Button variant="light" className="mb-4">
            ← Back to Projects
          </Button>
        </Link>

        <Card className="bg-background/60 dark:bg-default-100/50">
          <CardBody className="p-8">
            {/* Project Header */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
              <p className="text-lg text-foreground/80 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Chip key={tag} color="primary" variant="flat">
                    {tag}
                  </Chip>
                ))}
              </div>

              {/* Metadata */}
              <div className="flex gap-4 text-sm text-foreground/60 mb-4">
                <span>Created: {new Date(project.dateCreated).toLocaleDateString()}</span>
                <span>•</span>
                <span>Updated: {new Date(project.dateUpdated).toLocaleDateString()}</span>
              </div>

              {/* Links */}
              {(project.links.github || project.links.live || project.links.demo) && (
                <div className="flex gap-2 mb-6">
                  {project.links.github && (
                    <Button
                      as={Link}
                      href={project.links.github}
                      target="_blank"
                      color="primary"
                      variant="bordered"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      as={Link}
                      href={project.links.live}
                      target="_blank"
                      color="success"
                      variant="bordered"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      as={Link}
                      href={project.links.demo}
                      target="_blank"
                      color="secondary"
                      variant="bordered"
                    >
                      Demo
                    </Button>
                  )}
                </div>
              )}

              <Divider className="my-6" />
            </div>

            {/* Project Content (Markdown) */}
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ ...props }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />
                  ),
                  h2: ({ ...props }) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3 text-foreground" {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className="text-xl font-bold mt-4 mb-2 text-foreground" {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className="mb-4 text-foreground/80 leading-7" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="list-disc list-inside mb-4 text-foreground/80" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="list-decimal list-inside mb-4 text-foreground/80" {...props} />
                  ),
                  li: ({ ...props }) => <li className="mb-2 text-foreground/80" {...props} />,
                  code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    ) : (
                      <code
                        className="bg-primary/20 px-2 py-1 rounded text-sm text-foreground"
                        {...props}
                      >
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
                {project.content || "No detailed information available for this project."}
              </ReactMarkdown>
            </div>
          </CardBody>
        </Card>

        {/* Related Projects or CTA */}
        <div className="mt-8 text-center">
          <Link href="/projects">
            <Button color="primary" size="lg">
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
