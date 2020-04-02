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
      <div className="home-left">
        {fetched && (
          <React.Fragment>
            <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1s'}}
            >
              <h2>BTAT(Unit-wise)</h2>
              {/* <div className="tabs">

                <div
                >
                  <h4>Recent Status</h4>
                </div>
              </div> */}
            </div>
            <TurnUnit />
            <TurnDate />
            {/* <div
              className="timeseries-header fadeInUp"
              style={{ animationDelay: '1s' }}
            >
              <h1>Admissions, Discharges And Transfer Today</h1>
              <div className="tabs">

                <div
                >
                  <h4>Recent Status</h4>
                </div>
              </div>
            </div> */}
          </React.Fragment>
        )}
      </div>
      <div>
        {fetched && (
          <React.Fragment>
            {/* <div
              className="timeseries-header fadeInUp"
              style={{ animationDelay: '1s' }}
            >
              <h1>Admissions, Discharges And Transfer Summary</h1>
              <div className="tabs">

                <div
                >
                  <h4>Recent Status</h4>
                </div>
              </div>
              <Chart1 />
            </div> */}
            <div
              className="timeseries-header fadeInUp"
              style={{animationDelay: '1s'}}
            >
              <h2>BTAT(Hour-Wise)</h2>
              <div className="tabs">
                <div>
                  <h4>Last Two Months</h4>
                </div>
              </div>
            </div>
            <TurnHr />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Turnaround;
