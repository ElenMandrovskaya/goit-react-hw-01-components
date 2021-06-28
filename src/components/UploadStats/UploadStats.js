import PropTypes from 'prop-types';
import { Statistics, UploadStatsTitle, UploadStatsList, UploadStatsItem, UploadStatsLabel, UploadStatsPercentage } from './UploadStats.styles';
import statisticalData from '../../data/statistical-data.json'

export default function UploadStats() {
    return (
        <Statistics>
        <UploadStatsTitle>Upload stats</UploadStatsTitle>
        <UploadStatsList>
            {statisticalData.map(({ id, label, percentage, color }) => (
                <UploadStatsItem
                    key={id}
                    style={{ backgroundColor: color }}>
                    <UploadStatsLabel>{label}</UploadStatsLabel>
                    <UploadStatsPercentage>{percentage}%</UploadStatsPercentage>
            </UploadStatsItem>
            ))}
            </UploadStatsList>
        </Statistics>
    );
};
UploadStats.propTypes = {
    id: PropTypes.node,
    label: PropTypes.node,
    percentage: PropTypes.number,
    color: PropTypes.node,
};