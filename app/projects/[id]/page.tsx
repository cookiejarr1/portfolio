"use client";

import { Button, Card, CardBody, Chip, Divider } from "@nextui-org/react";
import clsx from "clsx";
import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi";

import { projects } from "../../data/projects";
import MarkdownContent from "@/app/components/MarkdownContent";
import Image from "next/image";

const normalizeUrl = (url?: string) => {
  if (!url || url === "#") return undefined;
  return url.startsWith("http") ? url : `https://${url}`;
};

export default function ProjectDetailPage() {
  const params = useParams();
  const tagPalette = useMemo(
    () => [
      // Blue
      "bg-blue-100 text-blue-900 border border-blue-200 dark:bg-blue-400/20 dark:text-blue-50 dark:border-blue-400/30",
      // Orange
      "bg-orange-100 text-orange-900 border border-orange-200 dark:bg-orange-400/20 dark:text-orange-50 dark:border-orange-400/30",
      // Slate
      "bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-400/20 dark:text-slate-50 dark:border-slate-400/30",
      // Cyan
      "bg-cyan-100 text-cyan-900 border border-cyan-200 dark:bg-cyan-400/20 dark:text-cyan-50 dark:border-cyan-400/30",
      // Lime
      "bg-lime-100 text-lime-900 border border-lime-200 dark:bg-lime-400/20 dark:text-lime-50 dark:border-lime-400/30",
      // Teal
      "bg-teal-100 text-teal-900 border border-teal-200 dark:bg-teal-400/20 dark:text-teal-50 dark:border-teal-400/30",
      // Pink
      "bg-pink-100 text-pink-900 border border-pink-200 dark:bg-pink-400/20 dark:text-pink-50 dark:border-pink-400/30",
      // Red
      "bg-red-100 text-red-900 border border-red-200 dark:bg-red-400/20 dark:text-red-50 dark:border-red-400/30",
      // Purple
      "bg-purple-100 text-purple-900 border border-purple-200 dark:bg-purple-400/20 dark:text-purple-50 dark:border-purple-400/30",
      // Yellow
      "bg-yellow-100 text-yellow-900 border border-yellow-200 dark:bg-yellow-400/20 dark:text-yellow-50 dark:border-yellow-400/30",
      // Existing colors
      "bg-emerald-100 text-emerald-900 border border-emerald-200 dark:bg-emerald-400/20 dark:text-emerald-50 dark:border-emerald-400/30",
      "bg-sky-100 text-sky-900 border border-sky-200 dark:bg-sky-400/20 dark:text-sky-50 dark:border-sky-400/30",
      "bg-violet-100 text-violet-500 border border-violet-200 dark:bg-violet-600/40 dark:text-white dark:border-violet-400/50",
      "bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-400/20 dark:text-amber-50 dark:border-amber-400/30",
      "bg-fuchsia-100 text-fuchsia-900 border border-fuchsia-200 dark:bg-fuchsia-400/20 dark:text-fuchsia-50 dark:border-fuchsia-400/30",
      "bg-rose-100 text-rose-900 border border-rose-200 dark:bg-rose-400/20 dark:text-rose-50 dark:border-rose-400/30",
    ],
    [],
  );
  const [previewWidth, setPreviewWidth] = useState(0); // 0 => full width
  const [isResizing, setIsResizing] = useState(false);
  const previewWrapperRef = useRef<HTMLDivElement>(null);
  const breakpointPresets = [
    { label: "360px", value: 360 },
    { label: "720px", value: 720 },
    { label: "1024px", value: 1024 },
    { label: "Full", value: 0 },
  ];
  const previewWidthStyle = previewWidth === 0 ? "100%" : `${previewWidth}px`;
  const project = projects.find((p) => p.id === params.id);
  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!previewWrapperRef.current) return;
      const bounds = previewWrapperRef.current.getBoundingClientRect();
      const newWidth = Math.min(Math.max(event.clientX - bounds.left, 320), 1440);
      setPreviewWidth(newWidth);
    };

    const stopResizing = () => setIsResizing(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopResizing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing]);

  if (!project) {
    return (
      <div className="text-foreground bg-background min-h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-medium mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button color="primary">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const livePreviewUrl = normalizeUrl(project.links?.live);
  const githubUrl = normalizeUrl(project.links?.github);
  const figmaUrl = normalizeUrl(project.links?.figma);
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    // .filter((p) => p.tags.some((tag) => project.tags.includes(tag)))
    .slice(0, 4);
  const fallbackRelated = projects.filter((p) => p.id !== project.id).slice(0, 4);
  const relatedToRender = relatedProjects.length > 0 ? relatedProjects : fallbackRelated;
  const randomTagIndex =
    Math.floor(Math.random() * tagPalette.length) < 0
      ? 0
      : Math.floor(Math.random() * tagPalette.length);

  return (
    <div className="text-foreground bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/projects">
          <Button variant="light" className="mb-4">
            ← Back to Projects
          </Button>
        </Link>

        <Card className="bg-background/60 dark:bg-default-50/20 border border-default-200/60 dark:border-white/5 rounded-xl">
          <CardBody className="p-8 space-y-8">
            <div className="relative w-full h-[480px] rounded-xl overflow-hidden border border-default-200/60 dark:border-white/10 bg-default-100">
              <Image
                src={project.image.static || project.image.placeholder}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw 100vh, 50vw 100vh"
              />
            </div>

            {/* Project Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {livePreviewUrl ? (
                  <Button
                    as={Link}
                    href={livePreviewUrl}
                    target="_blank"
                    color="success"
                    variant="ghost"
                    className="inline-flex items-center gap-2 px-0 text-sm hover:underline underline-offset-2"
                  >
                    <HiExternalLink />
                    {livePreviewUrl.replace(/^https?:\/\//, "")}
                  </Button>
                ) : (
                  <div className="px-4 py-2 rounded-lg border border-dashed border-default-300 dark:border-white/20 text-sm text-foreground/70">
                    Live preview coming soon
                  </div>
                )}
                {githubUrl && (
                  <Button
                    as={Link}
                    href={githubUrl}
                    target="_blank"
                    color="secondary"
                    variant="ghost"
                    startContent={<FiGithub />}
                    className="text-sm hover:underline underline-offset-2"
                  >
                    GitHub
                  </Button>
                )}
                {figmaUrl && (
                  <Button
                    as={Link}
                    href={figmaUrl}
                    target="_blank"
                    color="secondary"
                    variant="bordered"
                    startContent={<FaFigma />}
                  >
                    Figma
                  </Button>
                )}
              </div>

              <h1 className="text-4xl font-medium mb-3 text-foreground">{project.title}</h1>
              <p className="text-base text-foreground/90 mb-4 leading-snug">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <Chip
                    key={tag}
                    variant="flat"
                    className={clsx(
                      "px-2.5 py-1 text-xs font-medium",
                      tagPalette[randomTagIndex - index <= 0 ? 0 : randomTagIndex - index],
                    )}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 text-xs text-foreground/70 mb-4">
                <span>Updated: {new Date(project.dateUpdated).toLocaleDateString()}</span>
              </div>

              <Divider className="my-6" />
            </div>

            {/* Project Content (Markdown) */}
            <MarkdownContent content={project.content} />

            {/* Live Preview */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-medium text-foreground">Live preview</h2>
                <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/70">
                  {breakpointPresets.map((preset) => (
                    <button
                      key={preset.label}
                      className={clsx(
                        "px-3 py-1 rounded-full border transition",
                        previewWidth === preset.value
                          ? "border-blue-500 text-blue-200"
                          : "border-default-200 text-foreground/70 hover:text-foreground",
                      )}
                      onClick={() => setPreviewWidth(preset.value)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
              {livePreviewUrl ? (
                <div className="overflow-x-auto pb-2" ref={previewWrapperRef}>
                  <div
                    className="relative rounded-lg h-[720px] bg-white dark:bg-black mx-auto transition-all duration-300 min-w-[320px]"
                    style={{ width: previewWidthStyle }}
                  >
                    <iframe
                      src={livePreviewUrl}
                      title={`${project.title} live preview`}
                      className="w-full h-full rounded-lg"
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl h-full bg-white/5 border border-dashed border-default-200 dark:border-white/20 flex flex-col items-center justify-center text-foreground/60 pb-6 pt-2">
                  <Image src={"/empty.png"} width={250} height={250} alt="empty content" />
                  <p className="text-base text-white/80">Huh, must have been the wind.</p>
                  <p className="text-sm text-white/80">Come back later</p>
                </div>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Related Projects */}
        <section className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">You might also like</h2>
            {/* <Link href="/projects" className="text-white text-sm hover:underline">
              View all
            </Link> */}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {relatedToRender.map((related) => (
              <Link
                key={related.id}
                href={`/projects/${related.id}`}
                className="rounded-2xl border border-default-200/70 dark:border-white/10 dark:hover:border-white/40 bg-background/60 dark:bg-white/5 p-4 transition hover:border-primary/60 hover:-translate-y-0.5"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {related.tags.slice(0, 4).map((tag, index) => (
                    <Chip
                      key={tag}
                      size="sm"
                      variant="flat"
                      className={clsx(
                        "px-2.5 py-1 text-[11px] font-medium",
                        tagPalette[randomTagIndex + index <= 0 ? 0 : randomTagIndex + index],
                      )}
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
                <p className="text-base font-medium text-foreground">{related.title}</p>
                <p className="text-xs font-medium text-foreground/70 mt-1 line-clamp-2">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
