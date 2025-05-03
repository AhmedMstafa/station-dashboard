import HeaderViewWrapper from './HeaderViewWrapper';
import SelectDay from './SelectDay';
import StartEndDateWrapper from './StartEndDateWrapper';

export default function Header() {
  return (
    <header className="px-10 w-full h-[124px] flex items-center gap-2.5 justify-around overflow-x-auto bg-white">
      <HeaderViewWrapper />
      <SelectDay />
      <StartEndDateWrapper />
    </header>
  );
}
