import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    const { genImage } = this.props;
    genImage();
  }

  render() {
    let imageList = this.props;
    imageList = imageList.imageList.data;
    return (
      <div>
        {imageList ? imageList.map((value) => {
          return (
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    alt="alternative"
                    src={`https://res.cloudinary.com/thetripguru/image/upload/h_100,q_90,w_150/${value.attributes.media.banner.url}.jpg`}
                  />
                  <div className="card-body">
                    <h3 className="card-title">
                      {value.attributes.title}
                    </h3>
                    {value.attributes.location.name}
                    <br />
                    {value.attributes.rating}
                    <br />
                    {value.attributes.duration_type}
                    <br />
                    {value.attributes.price.max_price_per_person}
                  </div>
                </div>
              </div>
            </div>
          );
        }) : null
        }
      </div >
    );
  }
}
