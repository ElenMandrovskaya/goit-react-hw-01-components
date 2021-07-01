import PropTypes from 'prop-types';
import {
  Statistics,
  UploadStatsTitle,
  UploadStatsList,
  UploadStatsItem,
  UploadStatsLabel,
  UploadStatsPercentage,
} from './UploadStats.styles';
// import statisticalData from '../../data/statistical-data.json'

export default function UploadStats({ title, stats }) {
  return (
    <Statistics>
      {title && <UploadStatsTitle>{title}</UploadStatsTitle>}
      <UploadStatsList>
        {stats.map(({ id, label, percentage, color }) => (
          <UploadStatsItem key={id} style={{ backgroundColor: color }}>
            <UploadStatsLabel>{label}</UploadStatsLabel>
            <UploadStatsPercentage>{percentage}%</UploadStatsPercentage>
          </UploadStatsItem>
        ))}
      </UploadStatsList>
    </Statistics>
  );
}

UploadStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
