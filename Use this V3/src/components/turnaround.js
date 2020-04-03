import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TurnUnit from './turnaround/turnunit';
import TurnHr from './turnaround/turnhr';
import TurnMonth from './turnaround/turnmonth';
import TurnDate from './turnaround/turndate';

function Turnaround(props) {
  const [fetched, setFetched] = useState(false);
  const [graphOption] = useState(2);
  const [timeseries, setTimeseries] = useState([]);
  const [timeseriesMode] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [response] = await Promise.all([axios.get('data.json')]);
      setTimeseries(response.data.cases_time_series);

      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Home">
      <div>
        {fetched && (
          <React.Fragment>
            <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1s'}}
            >
              <h2>BTAT Across Units</h2>
            </div>
            <TurnUnit />
            <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1s'}}
            >
              <h2>BTAT Summary</h2>
            </div>
            <TurnDate />
          </React.Fragment>
        )}
      </div>
      <div>
        {fetched && (
          <React.Fragment>
            <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1s'}}
            >
              <h2>BTAT Hourly Summary</h2>
            </div>
            <TurnHr />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Turnaround;
