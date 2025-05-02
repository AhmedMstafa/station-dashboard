import StartEndDate from './StartEndDate';

export default function StartEndDateWrapper() {
  return (
    <div className="flex gap-5">
      <StartEndDate
        isStartDate
        label={
          <>
            <span>Start </span>date - time
          </>
        }
      />
      <StartEndDate
        label={
          <>
            <span>End </span>date - time
          </>
        }
      />
    </div>
  );
}
