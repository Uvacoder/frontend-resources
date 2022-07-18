import Tag from "./Tag";
interface data {
  id: number;
  name: string;
  url: string;
  description: string;
  tags: string[];
  starred: boolean;
}

function Resource({
  data,
  filter,
  setFilter,
}: {
  data: data;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  let cardClasses =
    "card z-0 shadow-xl group animate-fadein transition-all m-1";
  if (data.starred) {
    cardClasses += " bg-gradient-to-tl from-lime-300 via-teal-300 to-blue-400";
  } else {
    cardClasses += " unstarred";
  }

  return (
    <div className={cardClasses}>
      <div
        style={data.starred ? { position: "absolute" } : { display: "none" }}
        className=" z-20 bg-gradient-to-b from-base-300 to-transparent opacity-85 h-full w-full group-hover:translate-y-[-30%] translate-x-[-0.5rem] transition-all duration-[500ms]"
      ></div>
      <div
        className="absolute top-4 right-4 z-50"
        style={data.starred ? { display: "relative" } : { display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-teal-300"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
      <div className="card-body z-20">
        <a target="_blank" href={data.url} rel="noreferrer">
          <h2 className="hover:opacity-50 pb-4 transition-all link card-title">
            {data.name}
          </h2>
          <p className="transition-colors">{data.description}</p>
        </a>
        <div className="h-full"></div>
        <div className="flex flex-wrap">
          {data.tags.sort().map((tag: string) => {
            return (
              <Tag
                tag={tag}
                emphasis={false}
                key={tag}
                filter={filter}
                setFilter={setFilter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resource;

//-----------------data example:------------------------------------------
//  {
//   id: 0,
//   name: "htmlreference.io",
//   url: "https://htmlreference.io/",
//   description: "A free guide to all HTML elements and attributes.",
//   imageURL: "https://htmlreference.io/images/html-reference-icon.png",
//   tags: ["html"],
//   starred: false,
// },
//--------------------------------------------------------------------------
