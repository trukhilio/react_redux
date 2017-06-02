import React, { PropTypes, Component } from 'react'

export default class Page extends Component{
    onYearBtnClick(e){
        this.props.getPhotos(+e.target.innerText)
    }
    render(){
        const { year, photos, fetching, error } = this.props;
        const years = [2017, 2016, 2015, 2014, 2013, 2012];
        return(
            <div className="ib page">
                <p>
                    {years.map((item,index)=> <button key={index} onClick={::this.onYearBtnClick}>{item}</button>)}
                </p>
                <h3>{year} year [{photos.length}]</h3>
                { error ? <p> Oops, download is failed... </p> : '' }
                {
                    fetching ?
                    <p>
                        Downloading...
                    </p>
                    :
                    photos.map((entry, index) =>
                        <div key={index}>
                            <p><img src={entry.src} /></p>
                            <p>{entry.likes.count} ❤</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};