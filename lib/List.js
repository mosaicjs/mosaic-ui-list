import ReactDOM from 'react-dom';
import React from 'react';
import { View, DataSetLayout } from 'mosaic-ui';
import ListItem from './ListItem';

export default class List extends DataSetLayout {
    componentDidMount(){
        super.componentDidMount();
        this._scrollToOpenItem();
    }
    componentDidUpdate(){
        this._scrollToOpenItem();
    }
    get ListItem(){ return this.props.ListItem || ListItem; }
    
    _scrollToOpenItem(){
        if (this.openItemPos !== undefined){
            const container = ReactDOM.findDOMNode(this);
            const elm = container.children[this.openItemPos];
            if (typeof elm.scrollIntoView === 'function') {
                elm.scrollIntoView(true);
            }
        }
    }
    render(){
        console.log('>> List#render');
        const dataSet = this.props.dataSet;
        const openItems = this.props.openItems;
        const ListItem = this.ListItem;
        const that = this;
        delete that.openItemPos;
        const list = dataSet.map(function(item, pos){
            if (openItems && that.openItemPos === undefined && openItems.has(item)) {
                that.openItemPos = pos;
            }
            const props = {...this.props, key: item.id };
            const result = item.newAdapter(ListItem.Factory, props);
            return result;
        }.bind(this));
        let listView = list;
        if (!list.length){
            listView = this._renderEmptyList();
        }
        return (
           <div className='panels' {...this.props}>
               {listView}
           </div>
        );
    }
    
    _renderEmptyList(){
        let result = this.props.emptyList;
        if (typeof result === 'function') {
            result = result();
        }
        return result;
    }

}
List.Factory = List.newFactory();
