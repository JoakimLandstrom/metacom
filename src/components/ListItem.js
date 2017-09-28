import React from 'react';

const ListItem = props => {

        return(
          <div className="listItem">
            <p>{props.value}</p>

          </div>
        );
}

export default ListItem;