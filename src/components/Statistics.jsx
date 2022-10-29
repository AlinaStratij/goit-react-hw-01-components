import PropTypes from 'prop-types';
export default function Statistics(props) {
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      <li class="item">
        <span class="label">{props.label}</span>
        <span class="percentage">{props.percentage}</span>
      </li>
      <li class="item">
        <span class="label">{props.label}</span>
        <span class="percentage">{props.percentage}</span>
      </li>
      <li class="item">
        <span class="label">{props.label}</span>
        <span class="percentage">{props.percentage}</span>
      </li>
      <li class="item">
        <span class="label">{props.label}</span>
        <span class="percentage">{props.percentage}</span>
      </li>
    </ul>
  </section>;
}
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
