import React from 'react';

export default class DetailView extends React.Component {
  render() {
    const { tourDetails, isFetched } = this.props;
    return (
      <div>
        {isFetched
          ? (
            <div className="row">
              <div className="col-sm-12">
                <img
                  alt="alternative"
                  src={`https://res.cloudinary.com/thetripguru/image/upload/h_400,q_90,w_1000/${tourDetails.data.attributes.media.header.url}.jpg`}
                />
                <h3>
                  {tourDetails.data.attributes.title}
                </h3>
                {tourDetails.data.attributes.location.name}
                <br />
                <i className="fa fa-star" />
                {tourDetails.data.attributes.rating}
                <br />
                <i className="fal fa-clock" />
                {tourDetails.data.attributes.duration_type}
                <br />
                {tourDetails.data.attributes.price.max_price_per_person}
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}
