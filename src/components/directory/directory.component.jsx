import React from 'react';
import MenuItem from './../../components/menu-item/menu-item.component';
import sections from './../../constants/sections.json';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }

}

export default Directory;