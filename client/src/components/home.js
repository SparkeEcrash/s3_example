import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../actions';

class Home extends Component {
    componentDidMount(){
        this.props.getImages();
    }

    render(){
        const { images } = this.props;

        const imageElements = images.map(img => {
            return (
                <div key={img.id} className="col s3 center">
                    <p>{img.name}</p>
                    <img style={{width: '40%'}} src={`https://s3-us-west-2.amazonaws.com/lfz-example-images/${img.path}`} alt={img.caption}/>
                </div>
            )
        });
        
        return (
            <div>
                <h1 className="center">Uploaded Images</h1>

                <div className="row">
                    {imageElements}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({images}) => ({images: images.all});

export default connect(mapStateToProps, { getImages })(Home);
