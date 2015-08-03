import React from 'react';
import Promise from 'promise';
import { View, ViewLayout } from 'mosaic-ui';

export default class ListItemView extends View {
    _renderTitle(){
        const r = this.object;
        return r.get('properties.name');
    }
    _renderContent(){
        const r = this.object;
        return r.get('properties.description');
    }
    get openItems() { return this.options.openItems; }
    setOpen(open){
        const openItems = this.openItems;
        if (!openItems)
            return Promise.resolve();
        const resource = this.object;
        if (open) {
            return openItems.add(resource);
        } else {
            const pos = openItems.pos(resource);
            return openItems.remove(pos);
        }
    }
    get isOpen(){
        const dataSet = this.openItems;
        if (!dataSet)
            return false;
        return dataSet.has(this.object);
    }
    renderView(){
        let key = this.object.id;
        return (<ListItemLayout key={this.object.id} view={this} />);
    }
}

class ListItemLayout extends ViewLayout {
    constructor(...params){
        super(...params);
        this._onClick = this._onClick.bind(this);
        this.state = this._newState({open : this.props.view.isOpen});
    }
    componentWillReceiveProps(props){
        this._updateState({open : props.view.isOpen });
    }
    _onClick(ev) {
        const view = this.props.view;
        view.setOpen(!this.state.open);
        ev.preventDefault();
        ev.stopPropagation();
    }
    render(){
        const view = this.props.view;
        let content;
        if (this.state.open) {
            content = view._renderContent(); 
        }
        return (
            <div key={this.props.id} className={view.className} style={view.style}>
                <h3><a href="#" onClick={this._onClick}>{view._renderTitle()}</a></h3>
                {content}
            </div>
        );
    }
}  