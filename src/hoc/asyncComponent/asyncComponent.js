import React, { Component } from 'react';
const asyncComponent = ( importComponent ) => {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount() {
            importComponent()
                .then(component => {
                    this.setState({ component: component.default });
                })
        }
        render () {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}
export default asyncComponent;