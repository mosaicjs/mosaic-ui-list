import React from 'react';
import { DataSetLayout } from 'mosaic-ui';

export default class ListSize extends DataSetLayout {
    render() {
        var dataSet = this.props.dataSet;
        var className = this.props.className || "badge";
        return (
            <span className={className}>{dataSet.size()}</span>
        );
    }
}
ListSize.Factory = ListSize.newFactory();
