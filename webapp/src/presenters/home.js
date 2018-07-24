import React from 'react';
import ReactStars from 'react-stars';

const TourList = ({
  tourList, isLoaded, previewImgList, onClick, onLoad,
}) => {
  const { data } = tourList;
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((value, index) => {
          return (
            <div key={value.id} className="col-md-6 col-sm">
              <div
                className="card"
                role="presentation"
                style={{ width: '40rem' }}
                onClick={() => onClick(value.attributes.url)}
              >
                <img
                  className="card-img-top"
                  alt="alternative"
                  src={previewImgList[index]}
                  style={{
                    filter: `${isLoaded ? '' : 'blur(50px)'}`,
                    transition: '0.5s filter linear',
                  }}
                  onLoad={onLoad}
                />
                <div className="card-body">
                  <h3 className="card-title">
                    {value.attributes.title}
                  </h3>
                  <div className="row">
                    <div className="col md-4">
                      <i className="fa fa-map-marker" />
                      &nbsp;
                      {value.attributes.location.name}
                    </div>
                    <div className="col md-4">
                      <ReactStars
                        count={5}
                        value={value.attributes.rating}
                        edit={false}
                        size={20}
                        color1="white"
                        color2="green"
                      />
                    </div>
                    <div className="col md-4">
                      {value.attributes.reviews}
                      &nbsp;
                      Reviews
                    </div>
                    <div className="col md-4">
                      <i className="fa fa-clock-o" />
                      &nbsp;
                      {value.attributes.duration_type.replace('_', ' ')}
                    </div>
                  </div>
                  <hr />
                  $
                  {value.attributes.price.min_price_per_person}
                </div>
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

const AppLoading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img alt="spinner" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
    </div>
  );
};


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      previewImgList: [],
    };
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    const { genImage } = this.props;
    genImage();
  }

  // Maintain a list of all low resolution images needed for the app
  componentWillReceiveProps(nextProps) {
    const imgList = [];
    nextProps.tourList.data.map(value => imgList.push(
      `https://res.cloudinary.com/thetripguru/image/upload/h_10,w_10/${value.attributes.media.banner.url}.jpg`,
    ));
    this.setState((prev => Object.assign({}, prev, {
      previewImgList: imgList,
    })));
  }

  // replace the current low resolution images with high resoluion images
  onLoad() {
    const { tourList } = this.props;
    const imgList = [];
    tourList.data.map(value => imgList.push(
      `https://res.cloudinary.com/thetripguru/image/upload/h_300,w_500/${value.attributes.media.banner.url}.jpg`,
    ));
    this.setState((prev => Object.assign({}, prev, {
      isLoaded: true,
      previewImgList: imgList,
    })));
  }

  render() {
    const { tourList, isFetched, onClick } = this.props;
    const { isLoaded, previewImgList } = this.state;
    return (isFetched
      ? (
        <TourList
          tourList={tourList}
          isLoaded={isLoaded}
          previewImgList={previewImgList}
          onClick={onClick}
          onLoad={this.onLoad}
        />
      )
      : <AppLoading />);
  }
}
