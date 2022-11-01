import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  SpanLabel,
  SpanPercentage,
} from 'components/StatisticsSection/Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsList>
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <SpanLabel>{stat.label}</SpanLabel>
            <SpanPercentage>{stat.percentage}%</SpanPercentage>
          </li>
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
