import { getNewsInfo } from "@/app/api/route";
import Image from "next/image";
import Link from "next/link";

const News = async () => {
  const getNews = await getNewsInfo({ page: 5 });
  const newsData: newsType[] = getNews.articles;
  return (
    <div className="hidden sm:block mt-8 sm:w-[350px] h-full bg-zinc-200 dark:bg-zinc-900 rounded-md p-2 md:px-6">
      <h1 className="text-xl">News - Top Headlines</h1>
      <div>
        {newsData.map((news) => (
          <Link key={news.title} href={news.url} legacyBehavior>
            <a target="_blank" href="">
              <div className="relative w-full h-[150px] mb-4 group">
                <Image
                  src={
                    news.urlToImage !== null
                      ? news?.urlToImage
                      : "/img/news-football.webp"
                  }
                  alt={news.title}
                  fill
                  priority={true}
                  sizes="20vw"
                  className="object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 w-full p-2 z-10">
                  <p className="font-semibold whitespace-nowrap overflow-hidden max-w-[150px] transition-max-width text-ellipsis text-[15px] text-zinc-200 box-border group-hover:max-w-none group-hover:whitespace-normal">
                    {news.title}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
