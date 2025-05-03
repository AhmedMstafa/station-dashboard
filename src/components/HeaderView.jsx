export default function HeaderView({ icon, numbers, title }) {
  return (
    <div className="flex gap-2">
      <div className="mt-auto mb-1">
        <div className="rounded-full w-2.5 h-2.5 bg-main-color"></div>
      </div>
      <div className="flex items-center shrink-0">{icon}</div>
      <div className="flex gap-2">
        <p className="text-text-color text-[32px] font-mono">{numbers}</p>
        <p className="capitalize text-[13px]">{title}</p>
      </div>
    </div>
  );
}
