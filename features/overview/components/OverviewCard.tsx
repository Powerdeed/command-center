"use client";

export default function OverviewCard({
  title,
  value,
  actions,
}: {
  title: string;
  value: string;
  actions: string;
}) {
  return (
    <div
      className="
  @apply p-2.5 md:p-5 grid grid-rows-3 gap-2.5 md:gap-5 bg-white border border-(--terciary-grey) rounded-[10px] h-40"
    >
      <div className="text-style__body">{title}</div>
      <div className="text-style__heading flex-1">{value}</div>
      <div className="text-style__small-text">{actions}</div>
    </div>
  );
}
