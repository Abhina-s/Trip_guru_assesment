import React from 'react';
import ReactStars from 'react-stars';


const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      previewImg: undefined,
    };
    this.onLoad = this.onLoad.bind(this);
  }

  // preload images of lower resolution
  componentDidMount() {
    const { tourDetails } = this.props;
    this.setState((prev => Object.assign({}, prev, {
      previewImg: `https://res.cloudinary.com/thetripguru/image/upload/h_10,w_10/${tourDetails.data.attributes.media.header.url}.jpg`,
    })));
  }

  // replace the lower resolution images with proper images
  onLoad() {
    const { tourDetails } = this.props;
    this.setState((prev => Object.assign({}, prev, {
      isLoaded: true,
      previewImg: `https://res.cloudinary.com/thetripguru/image/upload/w_1280,h_1280,c_mfit/${tourDetails.data.attributes.media.banner.url}.jpg`,
    })));
  }

  render() {
    const { tourDetails, isFetched } = this.props;
    const { previewImg, isLoaded } = this.state;
    return (
      <div>
        {isFetched
          ? (
            <div className="container-fluid">
              <div className="row justify-content-center no-padding">
                <img
                  alt="alternative"
                  src={previewImg}
                  onLoad={() => this.onLoad()}
                  style={{
                    width: SCREEN_WIDTH,
                    height: SCREEN_HEIGHT * 0.75,
                    filter: `${isLoaded ? '' : 'blur(50px)'}`,
                    transition: '0.5s filter linear',
                  }}
                />
              </div>
              <div className="row justify-content-center no-padding">
                <div className="col-md-12">
                  <h3>
                    <strong>
                      {tourDetails.data.attributes.title}
                    </strong>
                  </h3>
                </div>
              </div>
              <div className="row justify-content-center no-padding">
                <div className="col-4">
                  <i className="fa fa-clock-o" />
                  &nbsp;
                  {tourDetails.data.attributes.duration_type.replace('_', ' ')}
                </div>
                <div className="col-4">
                  <i className="fa fa-map-marker" />
                  &nbsp;
                  {tourDetails.data.attributes.location.name}
                </div>
                <div className="col-4">
                  <ReactStars
                    count={5}
                    value={tourDetails.data.attributes.rating}
                    edit={false}
                    size={20}
                    color1="white"
                    color2="green"
                  />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center no-padding">
                {tourDetails.data.attributes.deals.map(value => (
                  value.value
                    ? (
                      <div key={value.key} className="col-4">
                        <i className={`fa ${value.icon}`} />
                        &nbsp;
                        {value.title.replace(/%[a-z]*/, '') + (typeof (value.value) === typeof ('random') ? `${value.value}` : '')}
                      </div>
                    )
                    : null
                ))}
              </div>
              <hr />
              <div className="row no-padding">
                <div className="col-12">
                  <h4>
                    Overview
                  </h4>
                </div>
                {(tourDetails.data.attributes.description.replace(/<(?:.|\n)*?>/gm, '')).replace(/&*$/, '\'')}
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}
