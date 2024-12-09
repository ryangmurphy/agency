interface TimelineItem {
  title: string;
  process: string;
  step: number;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-16 px-4 md:px-0">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-current"></div>

      <div className="relative space-y-8">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`
              flex items-center w-full
              ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}
            `}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

            {/* Content Container */}
            <div
              className={`
                md:w-[calc(50%-2rem)]
                w-40
                -mx-8
                md:-mx-0
                p-4
                rounded-lg
                border
                shadow-sm
                ${index % 2 === 0 ? "mr-auto pl-4" : "ml-auto pr-4"}
              `}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-bold mr-4 border-2 rounded-full p-2 border-primary">{item.step}</div>
                <div>
                  <div className="text-md font-bold py-2">{item.title}</div>
                  <div className="text-sm font-semibold">{item.process}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
