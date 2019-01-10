import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetImageUpload, uploadImage } from '../actions';

class ImageUpload extends Component {
    state = {
        file: null,
        src: '',
        name: '',
        caption: ''
    }

    backToImages = () => {
        const { history, resetImageUpload } = this.props;

        resetImageUpload();

        history.push('/');
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

    renderImage(src){
        return (
            <div className="col s8 offset-s2 center">
                {src && <img src={src} style={{ maxWidth: '100%' }} alt="Uploaded image preview" />}
            </div>
        );
    }

    resetUpload = () => {
        this.setState({
            file: null,
            src: '',
            name: '',
            caption: ''
        });

        this.props.resetImageUpload();
    }

    renderForm(){
        const { src } = this.state;
        const { status } = this.props;

        if(status === 'in-progress'){
            return <h4 className="grey-text center">Image Uploading</h4>;
        }

        if(status === 'complete'){
            return (
                <div className="center">
                    <h4 className="green-text darken-2">Image Upload Successful</h4>
                    <div className="row">
                        <div className="col s6">
                            <button className="btn blue lighten-1" onClick={this.resetUpload}>Upload New Image</button>
                        </div>
                        <div className="col s6">
                            <button className="btn blue darken-1" onClick={this.backToImages}>Back to Images</button>
                        </div>
                    </div>
                    <div className="row">
                        {this.renderImage(src)}
                    </div>
                </div>
            );
        }

        return (
            <form onSubmit={this.handleUpload}>
                <div className="row">
                    <div className="col s12 center">
                        <input type="file" accept="image/*" onChange={this.onFileChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <input type="text" id="name" onChange={({ target }) => this.setState({ name: target.value })} autoComplete="off" />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <input type="text" id="caption" onChange={({ target }) => this.setState({ caption: target.value })} autoComplete="off" />
                            <label htmlFor="caption">Caption</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h5 className="grey-text center">{src && 'Preview'}</h5>
                    {this.renderImage(src)}
                </div>
                <div className="row">
                    <div className="s12 center">
                        {src && <button className="btn blue darken-1">Upload Image</button>}
                    </div>
                </div>
            </form>
        );
    }

    render(){
        

        return (
            <div>
                <h3 className="center">Upload an Image</h3>
                {this.renderForm()}
            </div>
        );
    }
}

const mapStateToProps = ({images}) => ({status: images.uploadStatus});

export default connect(mapStateToProps, { resetImageUpload, uploadImage })(ImageUpload);
