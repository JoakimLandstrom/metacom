import React, {Component} from 'react';
import ListItem from '../components/ListItem';

class List extends Component {

        state = {
            ideas: []
        }

    constructor(props){
        super(props);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response) {
                return response.json()
            }).then((response) => {

            var ideas = response.map((idea) => {
                return idea.title;
            })

            this.setState({
                ideas: ideas
            })
        });
        
    }


    render() {
        return (

            <ul>
                {
                    this.state.ideas.map((row, index) => {
                        return <ListItem key={index} value={row}/>
                    })

                }
            </ul>

        );
    }

}

export default List;
