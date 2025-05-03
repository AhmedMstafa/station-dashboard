import { ResponsiveRadar } from '@nivo/radar';
import data from '../../data.json';

const MyResponsiveRadar = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={['chardonay', 'carmenere']}
    colors={['#009ACF33', '#009ACF']}
    maxValue={110}
    indexBy="taste"
    valueFormat=" >-.2f"
    margin={{ top: 70, right: 70, bottom: 70, left: 70 }}
    curve="cardinalClosed"
    borderColor={{ from: 'color', modifiers: [] }}
    borderWidth={1}
    gridShape="linear"
    gridLabelOffset={7}
    gridLevels={7}
    enableDots={false}
    fillOpacity={0.35}
    blendMode="multiply"
    motionConfig="wobbly"
  />
);

export default function Radar() {
  return <MyResponsiveRadar data={data[0].radar} />;
}
