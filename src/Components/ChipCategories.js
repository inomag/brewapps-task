import React, { Component } from 'react';
import { Typography, Container, Chip } from '@mui/material';
import '../Styles/ChipCategories.css';


class ChipCategories extends Component{
    constructor(props) { 
        super(props);
        this.state = {
            categories: [],
            selected: 0
        }
    }

    componentDidMount() { 
        fetch('./chips.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    categories: data.chips
                })
            });
    }
    render() { 
        return (
            <div className='chipContainer'>
                {this.state.categories.map((category,index) => {
                    return (
                        <Chip
                            key={index}
                            label={category.name}
                            icon={<img src={category.icon} className='chipIcon' alt="" />}
                            className='chip'
                            variant={this.state.selected === index ? 'filled' : 'outlined'}
                            clickable
                            onClick={() => this.setState({selected: index})}
                        />
                    )
                })}
            </div>

        );
    }
}

export default ChipCategories;