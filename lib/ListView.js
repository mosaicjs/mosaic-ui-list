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
                openItems={this.options.openItems}
                dependencies={this.options.dependencies||[]}
                itemViewType={itemViewType}
                itemOptions={this.options}/>
        );
    }
}

class ListLayout extends DataSetLayout {
    componentDidMount(){
        super.componentDidMount();
        this._scrollToOpenItem();
    }
    componentDidUpdate(){
        this._scrollToOpenItem();
    }
    _scrollToOpenItem(){
        if (this.openItemPos !== undefined){
            const container = React.findDOMNode(this);
            const elm = container.children[this.openItemPos];
            if (typeof elm.scrollIntoView === 'function') {
                elm.scrollIntoView(true);
            }
        }
    }
    render(){
        const dataSet = this.props.dataSet;
        const openItems = this.props.openItems;
        const ListItemView = this.props.itemViewType;
        const that = this;
        delete that.openItemPos;
        const list = dataSet.map(function(r, pos){
            const itemView = r.newAdapter(ListItemView, this.props.itemOptions);
            const result = itemView.renderView();
            if (openItems && that.openItemPos === undefined && openItems.has(r)) {
                that.openItemPos = pos;
            }
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