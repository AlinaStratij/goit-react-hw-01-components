import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  SpanLabel,
  SpanPercentage,
} from 'components/Statistics/Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} label={stat.label}>
            <SpanLabel>{stat.label}</SpanLabel>
            <SpanPercentage>{stat.percentage}%</SpanPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsWrapper>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
