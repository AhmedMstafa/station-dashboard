import { ResponsiveBar } from '@nivo/bar';
import data from '../../data.json';

const MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['Dummy']}
    indexBy="station"
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    padding={0.92}
    valueScale={{ type: 'linear', min: 0 }}
    colors={() => '#ff7f5c'}
    axisBottom={{
      tickSize: 0,
      tickPadding: 15,
      tickRotation: 0,
      legend: null,
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 15,
      tickRotation: 0,
      legend: null,
      legendPosition: 'middle',
      legendOffset: -43,
      truncateTickAt: 0,
      tickValues: [100, 150, 200, 250, 300],
    }}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 0]],
    }}
    enableLabel={false}
    theme={{
      axis: {
        ticks: {
          text: {
            fill: '#3d5161',
            fontSize: 12,
          },
        },
      },
      grid: {
        line: {
          stroke: '#B2BEC39B',
          strokeWidth: 0.1,
        },
      },
    }}
  />
);

export default function Bar() {
  return <MyResponsiveBar data={data[1].bar} />;
}
