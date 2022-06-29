import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/getRandomColor';

import {
  StatisticsContainer,
  Title,
  StatisticsInfo,
  TitleInfo,
  Item,
} from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatisticsInfo>
        {stats.map(stat => (
          <Item key={stat.id} color={getRandomHexColor}>
            <TitleInfo>{stat.label}</TitleInfo>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </StatisticsInfo>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
