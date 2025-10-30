import { getAllPosts, getPostBySlug } from "@/components/utils/markdown";
import markdownToHtml from "@/components/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: any) {
  const data = await params;
  const post = getPostBySlug(data.slug, [
    "title",
    "excerpt",
    "coverImage",
    "date",
    "author",
    "tag",
    "detail",
  ]);

  const siteName = process.env.SITE_NAME || "Архитек";
  const siteUrl = process.env.SITE_URL || "https://arhitek.ru";
  const authorName = process.env.AUTHOR_NAME || "Архитек";

  if (post) {
    const metadata = {
      title: `${post.title} | ${siteName}`,
      description:
        post.excerpt ||
        post.detail?.substring(0, 160) ||
        `Статья о ${post.tag} от ${siteName}`,
      keywords: `${post.tag}, строительство, частные дома, архитектура, ${post.title}`,
      authors: [{ name: post.author || authorName }],
      publisher: siteName,
      creator: post.author || authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: post.title,
        description: post.excerpt || post.detail?.substring(0, 160),
        type: "article",
        publishedTime: post.date,
        authors: [post.author || authorName],
        tags: [post.tag],
        siteName: siteName,
        images: [
          {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt || post.detail?.substring(0, 160),
        images: [post.coverImage],
        creator: `@${siteName}`,
      },
      alternates: {
        canonical: `${siteUrl}/blogs/${data.slug}`,
      },
      other: {
        "article:section": post.tag,
        "article:published_time": post.date,
        "article:author": post.author || authorName,
      },
    };

    return metadata;
  } else {
    return {
      title: "Статья не найдена",
      description: "Запрошенная статья не существует или была удалена",
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    };
  }
}

export default async function Post({ params }: any) {
  const data = await params;
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const post = getPostBySlug(data.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "tag",
    "detail",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <section className="relative !pt-44 pb-0!">
        <div className="container max-w-8xl mx-auto md:px-0 px-4">
          <div>
            <div>
              <Link
                href="/blogs"
                className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300"
              >
                <Icon
                  icon={"ph:arrow-left"}
                  width={20}
                  height={20}
                  className=""
                />
                <span>Ко всем статьям</span>
              </Link>
              <h2 className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7">
                {post.title}
              </h2>
              <h6 className="text-xm mt-5 text-dark dark:text-white">
                {post.detail}
              </h6>
            </div>
            <div className="flex items-center justify-between gap-6 mt-12">
              <div className="flex items-center gap-7">
                <div className="flex items-center gap-4">
                  <Icon icon={"ph:clock"} width={20} height={20} className="" />
                  <span className="text-base text-dark font-medium dark:text-white">
                    {format(new Date(post.date), "MMM dd, yyyy")}
                  </span>
                </div>
                <div className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15">
                  <p className="text-sm font-semibold text-dark dark:text-white">
                    {post.tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-20 mt-12 overflow-hidden rounded">
            <Image
              src={post.coverImage}
              alt="image"
              width={1170}
              height={766}
              quality={100}
              className="h-full w-full object-cover object-center rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section className="pt-12! mx-auto px-6">
        <div className="container max-w-8xl mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="blog-details markdown xl:pr-10">
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
