import PropTypes from 'prop-types';
import {StatisticsContainer, Title, StatisticsInfo, TitleInfo} from './statistics.styled'
// import randomColor from "randomcolor";

const Statistics = ({title, stats}) => {
  
    return (<StatisticsContainer >
      {title && <Title>{title}</Title> }
    <StatisticsInfo>
      {stats.map(stat => (
        <li key={stat.id}>
        <TitleInfo>{stat.label}</TitleInfo>
        <span>{stat.percentage}%</span>
      </li>)
       )}
    </StatisticsInfo>
  </StatisticsContainer>)
}

Statistics.propTypes ={
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
    
}

export default Statistics;