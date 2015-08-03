import React from 'react';
import { View, DataSetLayout } from 'mosaic-ui';

export default class ListSizeView extends View {
    renderView(options){
        options = options || {};
        return (
            <ListSizeLayout
                view={this}
                dataSet={this.options.dataSet}
                dependencies={this.options.dependencies||[]}
                {...options}
            />
        );
    }
}
class ListSizeLayout extends DataSetLayout {
    render() {
        var dataSet = this.props.dataSet;
        var className = this.props.className || "badge";
        return (
            <span className={className}>{dataSet.size()}</span>
        );
    }
}
