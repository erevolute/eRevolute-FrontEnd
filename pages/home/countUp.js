import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup'

function Countup() {
  return (
    <div className="mt-5 pt-2 pb-5 counter">
      <h1 className='text-center'>In 2022 </h1>
      <div className="counts container pb-5">
        <div className="count">
        <FontAwesomeIcon className='fs-3 pb-2'  icon={faBook} />
          <h6>PROJECT </h6>
          <CountUp     className="fs-1 fw-bold" end={1250} />
        </div>
        <div className="count">
        <FontAwesomeIcon className='fs-3 pb-2'  icon={faUser} />
          <h6>HAPPY CLIENTS</h6>
          <CountUp     className="fs-1 fw-bold" end={960} />
        </div>
        <div className="count">
        <FontAwesomeIcon className='fs-3 pb-2'  icon={faStar} />
          <h6>CUP OF TEA</h6>
          <CountUp    className="fs-1 fw-bold" end={130} />
        </div>
        <div className="count">
        <FontAwesomeIcon className='fs-3 pb-2'  icon={faFileLines} />
          <h6>LINE CODE</h6>
          <CountUp     className="fs-1 fw-bold" end={32265} />
        </div>
      </div>
    </div>
  );
}
export default Countup;
