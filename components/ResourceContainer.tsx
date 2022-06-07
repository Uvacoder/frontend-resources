import { resources } from "../data/resources";
import Resource from "./Resource";

function ResourceContainer({
  filter,
  toggleFilter,
}: {
  filter: string[];
  toggleFilter: (tag: string) => void;
}): any {
  return (
    <main className="px-4 pb-10 bg-base-100 grid grid-cols-1 xl:grid-cols-4 3xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
      {resources.map((resource) => {
        //filter out resources by tags
        let render = true;
        filter.forEach((filterTag) => {
          if (!resource.tags.includes(filterTag)) {
            render = false;
          }
        });
        if (render)
          return (
            <Resource
              key={resource.id}
              data={resource}
              filter={filter}
              toggleFilter={toggleFilter}
            />
          );
      })}
    </main>
  );
}

export default ResourceContainer;
