"use client";

export default function StatCard({
  title,
  value,
  icon: Icon,
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-default-200
        bg-content1
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-default-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            {value}
          </h3>
        </div>

        <div className="rounded-xl bg-default-100 p-3">
          {Icon && <Icon width={20} height={20} />}
        </div>
      </div>
    </div>
  );
}