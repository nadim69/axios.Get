import React, { Component } from 'react'
import './Flat.css'

export default class Flat extends Component {
  render() {
    const title = this.props.flat.name + ' ' + this.props.flat.price + ' ' + this.props.flat.priceCurrency
    // const image = this.props.flat.imageUrl
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    }

    return (
      <div className='flat'>
        <div className='flat-picture' style={style}> </div>
        <div className='flat-tittle'>
          {title}
        </div>
      </div>
    )
  }
}
