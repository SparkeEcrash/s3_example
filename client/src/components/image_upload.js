import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../actions';

class ImageUpload extends Component {
    state = {
        file: null,
        src: '',
        name: '',
        caption: ''
    }

    onFileChange = e => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = e => this.setState({src: e.target.result});

        reader.readAsDataURL(file);

        this.setState({ file });
    }

    handleUpload = e => {
        e.preventDefault();

        const { uploadImage } = this.props;
        const { file, name, caption } = this.state;

        uploadImage({name, caption}, file);
    }

    render(){
        const { src } = this.state;

        return (
            <div>
                <h3 className="center">Upload an Image</h3>
                <form onSubmit={this.handleUpload}>
                    <div className="row">
                        <div className="col s12 center">
                            <input type="file" accept="image/*" onChange={this.onFileChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="input-field">
                                <input type="text" id="name" onChange={({target}) => this.setState({name: target.value})} autoComplete="off"/>
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="input-field">
                                <input type="text" id="caption" onChange={({ target }) => this.setState({ caption: target.value })} autoComplete="off"/>
                                <label htmlFor="caption">Caption</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2 center">
                            {
                                src
                                    ? <Fragment>
                                        <h5 className="grey-text">Preview</h5>
                                        <img src={src} style={{maxWidth: '100%'}} alt="Uploaded image preview"/>
                                    </Fragment>
                                    : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="s12 center">
                        { src && <button className="btn blue darken-1">Upload Image</button> }
                        </div>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default connect(null, { uploadImage })(ImageUpload);
