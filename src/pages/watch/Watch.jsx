import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>

      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/embed/z8DeiU7lpLY"
      />
    </div>
  );
};

export default Watch;
