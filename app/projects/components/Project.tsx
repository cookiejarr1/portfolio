"use client";
import { Button, Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { Project } from "@/app/data/projects";
import { HiHeart, HiOutlineHeart, HiArrowRight } from "react-icons/hi";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import NextImage from "next/image";

const tagLength = 4;
const FAVORITES_STORAGE_KEY = "portfolio:favorites";

export default function Project({ project }: { project: Project }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const visibleTags = project.tags.slice(0, tagLength);
  const hiddenTags = project.tags.slice(tagLength);
  const tagPalette = useMemo(
    () => [
      "bg-emerald-100 text-emerald-900 border border-emerald-200 dark:bg-emerald-400/25 dark:text-emerald-50 dark:border-emerald-400/40",
      "bg-sky-100 text-sky-900 border border-sky-200 dark:bg-sky-400/25 dark:text-sky-50 dark:border-sky-400/40",
      "bg-indigo-100 text-indigo-900 border border-indigo-200 dark:bg-indigo-400/20 dark:text-indigo-50 dark:border-indigo-400/40",
      "bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-400/25 dark:text-amber-50 dark:border-amber-400/40",
    ],
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) ?? "[]");
    setIsFavorite(stored.includes(project.id));
  }, [project.id]);

  const handleFavoriteToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFavorite((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        const stored = new Set<string>(
          JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) ?? "[]"),
        );
        if (next) {
          stored.add(project.id);
        } else {
          stored.delete(project.id);
        }
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(Array.from(stored)));
      }
      return next;
    });
  };

  return (
    <Card
      shadow="sm"
      className="group border border-default-200 dark:border-white/5 bg-white/95 dark:bg-[#121418] rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative w-full h-[240px] overflow-hidden rounded-t-lg bg-gradient-to-b from-[#585C61]/40 to-transparent">
        <Link href={`/projects/${project.id}`}>
          <NextImage
            src={project.image.static || project.image.placeholder}
            alt={project.title}
            fill
            className="object-cover object-center cursor-pointer transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </Link>
      </div>
      <CardBody className="px-6 py-5 flex flex-col gap-4 justify-between h-full max-h-fit">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {visibleTags.map((tag, index) => (
              <Chip
                key={tag}
                size="sm"
                variant="flat"
                className={`px-3 py-2 text-xs font-semibold ${tagPalette[index % tagPalette.length]}`}
              >
                {tag}
              </Chip>
            ))}
            {project.tags.length > tagLength && (
              <Tooltip
                showArrow={true}
                content={
                  <div className="bg-white/95 dark:bg-[#121418] rounded-xl p-2 text-sm">
                    <ul className="list-inside">
                      {hiddenTags.map((tag, index) => (
                        <li key={index} className="text-foreground/70 dark:text-white">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              >
                <Chip
                  size="sm"
                  variant="flat"
                  className="px-2.5 py-1 text-[11px] bg-default-100 border border-default-200 text-foreground dark:bg-white/10 dark:text-white dark:border-white/20"
                >
                  +{project.tags.length - tagLength}
                </Chip>
              </Tooltip>
            )}
          </div>
          <Button
            isIconOnly
            size="sm"
            radius="full"
            variant="light"
            className="text-foreground/60 hover:text-red-500"
            aria-pressed={isFavorite}
            onPress={handleFavoriteToggle}
          >
            {isFavorite ? (
              <HiHeart className="text-red-500" size={18} />
            ) : (
              <HiOutlineHeart size={18} />
            )}
          </Button>
        </div>
        <div className="space-y-2 h-full pt-2">
          <p className="text-lg font-medium text-foreground tracking-wide">{project.title}</p>
          <p className="text-xs font-normal leading-tight text-foreground/70">
            {project.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 text-sm font-medium">
          <span className="text-xs text-foreground/60 tracking-wider">
            {new Date(project.dateUpdated).toLocaleDateString()}
          </span>
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-sky-500 transition-all duration-300 hover:underline underline-offset-2"
          >
            Read more
            <HiArrowRight className="text-sky-500 group-hover:translate-x-0.5 transition-all duration-300" />
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
