import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import IconButton from '@neos-project/react-ui-components/src/IconButton/';

export default class AddNode extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        focusedNodeContextPath: PropTypes.string.isRequired,
        hasAnyNodeTypeOptions: PropTypes.bool.isRequired
    };

    handleClick = () => {
        const {onClick, focusedNodeContextPath} = this.props;

        onClick(focusedNodeContextPath);
    }

    render() {
        const {focusedNodeContextPath, hasAnyNodeTypeOptions, className} = this.props;

        return (
            <span>
                <IconButton
                    isDisabled={Boolean(focusedNodeContextPath) === false || !hasAnyNodeTypeOptions}
                    className={className}
                    icon="plus"
                    onClick={this.handleClick}
                    hoverStyle="clean"
                    />
            </span>
        );
    }
}
