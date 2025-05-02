import CardData from './CardData';

export default function CardDataWrapper() {
  return (
    <section className="flex gap-10 flex-wrap">
      <CardData
        isActive
        number="71,023"
        tag="EGP"
        title="total value"
        isUp={false}
        subTag="2%"
      />
      <CardData
        number="20,000"
        tag={
          <>
            m<sup>3</sup>
          </>
        }
        title="Total Sales"
        isUp
        subTag={
          <>
            50 m<sup>3</sup>
          </>
        }
      />
      <CardData
        number="20,000"
        tag={
          <>
            m<sup>3</sup>
          </>
        }
        title="tAvg Sales"
        isUp={false}
        subTag={
          <>
            50 m<sup>3</sup>
          </>
        }
      />
      <CardData
        number="1567"
        title="Total Transaction Count"
        isUp
        subTag="20"
      />
    </section>
  );
}
