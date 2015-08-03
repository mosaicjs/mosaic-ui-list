import React from 'react';
import { View, DataSetLayout } from 'mosaic-ui';
import ListItemView from './ListItemView';

export default class ListView extends View {
    
    /** Returns the type of list items. */ 
    get ListItemView(){ return ListItemView; }
    _renderEmptyList(){
        if (typeof this.options.emptyList === 'function') {
            return this.options.emptyList();
        }
    }
    renderView(){
        const itemViewType = this.options.itemViewType || ListItemView;
        return (
            <ListLayout
                view={this}
                dataSet={this.options.dataSet}
                dependencies={this.options.dependencies||[]}
                itemViewType={itemViewType}
                itemOptions={this.options}/>
        );
    }
}

class ListLayout extends DataSetLayout {

    render(){
        const dataSet = this.props.dataSet;
        const ListItemView = this.props.itemViewType;
        const list = dataSet.map(function(r){
            const itemView = r.newAdapter(ListItemView, this.props.itemOptions);
            const result = itemView.renderView();
            return result;
        }.bind(this));
        let listView = list;
        const view = this.props.view;
        if (!list.length){
            listView = view._renderEmptyList();
        }
        let className = view.className || 'panels';
        return (
           <div className={className} style={this.style}>
               {listView}
           </div>
        );
    }
    
}